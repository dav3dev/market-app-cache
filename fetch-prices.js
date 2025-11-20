const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.warframe.market/v2';

// Pomocnicza funkcja do delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchDirect(url) {
  const response = await axios.get(url, {
    headers: {
      'Platform': 'pc',
      'Language': 'en'
    }
  });
  return response.data;
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
    
    // Pobierz zamówienia dla każdej części
    const partPrices = [];
    for (const part of parts) {
      await delay(500); // 500ms między requestami
      
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
        
        partPrices.push({
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: minPrice
        });
      } catch (error) {
        console.error(`Failed to fetch orders for ${part.slug}:`, error.message);
        partPrices.push({
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: null
        });
      }
    }
    
    // Suma cen części
    const partsTotal = partPrices
      .map(p => p.price)
      .filter(p => p !== null)
      .reduce((sum, p) => sum + p, 0);
    
    // Pobierz cenę bezpośrednią dla setu
    await delay(500);
    let directSetPrice = null;
    try {
      const setOrdersData = await fetchDirect(`${API_BASE}/orders/item/${urlName}`);
      const setOrders = setOrdersData.data || [];
      
      let sellOrders = setOrders.filter(o => o.order_type === 'sell');
      if (onlineOnly) {
        sellOrders = sellOrders.filter(o => o.user?.status === 'ingame' || o.user?.status === 'online');
      }
      
      const prices = sellOrders.map(o => o.price).filter(p => p > 0);
      directSetPrice = prices.length > 0 ? Math.min(...prices) : null;
    } catch (error) {
      console.error(`Failed to fetch set orders for ${urlName}:`, error.message);
    }
    
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
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemName = item.i18n?.en?.name || item.slug;
      console.log(`[${i + 1}/${items.length}] ${itemName}`);
      
      const prices = await fetchSetPrices(item.slug, true);
      if (prices) {
        cache[`${item.slug}|online-true`] = prices;
      }
      
      // Delay między itemami
      await delay(1000);
    }
    
    // Zapisz do pliku (w katalogu cache repo)
    const outputPath = path.join(__dirname, 'cache.json');
    fs.writeFileSync(outputPath, JSON.stringify(cache, null, 2));
    
    console.log(`✅ Cache updated: ${Object.keys(cache).length} items saved to ${outputPath}`);
  } catch (error) {
    console.error('❌ Failed to update cache:', error);
    process.exit(1);
  }
}

main();
