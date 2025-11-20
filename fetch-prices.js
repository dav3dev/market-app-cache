const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.warframe.market/v2';

// Pomocnicza funkcja do delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchDirect(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(url, {
        headers: {
          'Platform': 'pc',
          'Language': 'en'
        }
      });
      return response.data;
    } catch (error) {
      if (error.response?.status === 429 && i < retries - 1) {
        // Rate limit - czekaj dłużej przed retry
        const waitTime = (i + 1) * 2000;
        console.log(`    Rate limited, waiting ${waitTime}ms...`);
        await delay(waitTime);
        continue;
      }
      throw error;
    }
  }
}

async function fetchItems() {
  console.log('Fetching items...');
  const data = await fetchDirect(`${API_BASE}/items`);
  
  // Filtruj tylko sety (Warframes, Weapons, Archwing)
  const sets = data.data.filter(item => {
    const tags = item.tags || [];
    const name = item.i18n?.en?.name || '';
    const isSet = name.toLowerCase().includes(' set');
    return isSet && (
      tags.includes('warframe') ||
      tags.includes('weapon') ||
      tags.includes('primary') ||
      tags.includes('secondary') ||
      tags.includes('melee') ||
      tags.includes('archwing')
    );
  });
  
  console.log(`Found ${sets.length} sets`);
  return sets;
}

async function fetchSetPrices(urlName, onlineOnly = true) {
  try {
    // Pobierz części setu
    const setData = await fetchDirect(`${API_BASE}/items/${urlName}/set`);
    const items = setData.data?.items || [];
    
    // Znajdź części (nie setRoot)
    const parts = items.filter(item => !item.setRoot);
    
    // Pobierz wszystkie zamówienia RÓWNOLEGLE (Promise.all)
    const partPromises = parts.map(async (part) => {
      try {
        const ordersData = await fetchDirect(`${API_BASE}/orders/item/${part.slug}`);
        const orders = ordersData.data || [];
        
        // Filtruj sell orders
        let sellOrders = orders.filter(o => o.order_type === 'sell');
        if (onlineOnly) {
          sellOrders = sellOrders.filter(o => o.user?.status === 'ingame' || o.user?.status === 'online');
        }
        
        // Znajdź najniższą cenę
        const prices = sellOrders.map(o => o.price).filter(p => p > 0);
        const minPrice = prices.length > 0 ? Math.min(...prices) : null;
        
        return {
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: minPrice
        };
      } catch (error) {
        console.error(`Failed to fetch orders for ${part.slug}:`, error.message);
        return {
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: null
        };
      }
    });
    
    // Pobierz cenę bezpośrednią dla setu RÓWNOLEGLE
    const setOrdersPromise = (async () => {
      try {
        const setOrdersData = await fetchDirect(`${API_BASE}/orders/item/${urlName}`);
        const setOrders = setOrdersData.data || [];
        
        let sellOrders = setOrders.filter(o => o.order_type === 'sell');
        if (onlineOnly) {
          sellOrders = sellOrders.filter(o => o.user?.status === 'ingame' || o.user?.status === 'online');
        }
        
        const prices = sellOrders.map(o => o.price).filter(p => p > 0);
        return prices.length > 0 ? Math.min(...prices) : null;
      } catch (error) {
        console.error(`Failed to fetch set orders for ${urlName}:`, error.message);
        return null;
      }
    })();
    
    // Czekaj na wszystkie requesty naraz
    const [partPrices, directSetPrice] = await Promise.all([
      Promise.all(partPromises),
      setOrdersPromise
    ]);
    
    // Suma cen części
    const partsTotal = partPrices
      .map(p => p.price)
      .filter(p => p !== null)
      .reduce((sum, p) => sum + p, 0);
    
    return {
      partPrices,
      directSetPrice,
      partsTotal: partPrices.every(p => p.price !== null) ? partsTotal : null,
      variant: directSetPrice !== null && directSetPrice < partsTotal ? 'direct' : 'parts',
      timestamp: Date.now(),
      expiresAt: Date.now() + (60 * 60 * 1000) // 1 godzina
    };
  } catch (error) {
    console.error(`Failed to fetch set ${urlName}:`, error.message);
    return null;
  }
}

async function main() {
  try {
    const items = await fetchItems();
    const cache = {};
    
    console.log('Fetching prices for all sets...');
    console.time('Total fetch time');
    
    // Przetwarzaj w partiach po 5 itemów jednocześnie (API rate limit)
    const BATCH_SIZE = 5;
    for (let i = 0; i < items.length; i += BATCH_SIZE) {
      const batch = items.slice(i, i + BATCH_SIZE);
      const batchNumber = Math.floor(i / BATCH_SIZE) + 1;
      const totalBatches = Math.ceil(items.length / BATCH_SIZE);
      
      console.log(`\n[Batch ${batchNumber}/${totalBatches}] Processing ${batch.length} items...`);
      
      // Pobierz wszystkie w partii równolegle
      const results = await Promise.all(
        batch.map(async (item, idx) => {
          const itemName = item.i18n?.en?.name || item.slug;
          const globalIdx = i + idx + 1;
          console.log(`  [${globalIdx}/${items.length}] ${itemName}`);
          
          const prices = await fetchSetPrices(item.slug, true);
          return prices ? { key: `${item.slug}|online-true`, prices } : null;
        })
      );
      
      // Dodaj wyniki do cache
      results.forEach(result => {
        if (result) {
          cache[result.key] = result.prices;
        }
      });
      
      console.log(`  ✓ Batch ${batchNumber} completed`);
      
      // Pauza między partiami (API rate limit: ~3 requesty/sec)
      if (i + BATCH_SIZE < items.length) {
        await delay(1000);
      }
    }
    
    console.timeEnd('Total fetch time');
    
    // Zapisz do pliku (w katalogu cache repo)
    const outputPath = path.join(__dirname, 'cache.json');
    fs.writeFileSync(outputPath, JSON.stringify(cache, null, 2));
    
    console.log(`\n✅ Cache updated: ${Object.keys(cache).length} items saved to ${outputPath}`);
  } catch (error) {
    console.error('❌ Failed to update cache:', error);
    process.exit(1);
  }
}

main();
