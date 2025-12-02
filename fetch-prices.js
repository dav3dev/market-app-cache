const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_BASE = 'https://api.warframe.market/v2';

// Pomocnicza funkcja do delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Map helper that runs async fn over items in batches to limit concurrency
async function mapInBatches(items, batchSize, fn, pauseMs = 200) {
  const out = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(fn));
    out.push(...results);
    if (i + batchSize < items.length && pauseMs > 0) {
      await delay(pauseMs);
    }
  }
  return out;
}

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
      const status = error.response?.status;
      const retryAfterHeader = error.response?.headers?.['retry-after'] || error.response?.headers?.['Retry-After'];
      const retryAfter = retryAfterHeader ? parseInt(retryAfterHeader, 10) : 0;

      if (status === 429 && i < retries - 1) {
        // Prefer server-provided Retry-After (seconds) if present, otherwise exponential backoff
        const waitTime = retryAfter > 0 ? retryAfter * 1000 : Math.pow(2, i) * 1000;
        console.log(`    Rate limited, waiting ${waitTime}ms (retry-after=${retryAfter})...`);
        await delay(waitTime);
        continue;
      }
      throw error;
    }
  }
}

// Fetch the lowest sell order platinum for a given item slug (online sellers only if requested)
async function fetchLowestSellPrice(slug, onlineOnly = true) {
  try {
    const ordersData = await fetchDirect(`${API_BASE}/orders/item/${slug}`);
    const orders = ordersData.data || [];

    let sellOrders = orders.filter(o => o.type === 'sell');
    if (onlineOnly) {
      sellOrders = sellOrders.filter(o => o.user && (o.user.status === 'ingame' || o.user.status === 'online'));
    }

    const prices = sellOrders.map(o => o.platinum).filter(p => p > 0);
    return prices.length > 0 ? Math.min(...prices) : null;
  } catch (error) {
    console.error(`Failed to fetch orders for ${slug}:`, error.message || error);
    return null;
  }
}

async function fetchItems() {
  console.log('Fetching items...');
  const data = await fetchDirect(`${API_BASE}/items`);
  
  // Filtruj elementy: bierzemy sety (Warframes, Weapons, Archwing, Companions) + mody z syndykatów
  const items = data.data.filter(item => {
    const tags = item.tags || [];
    const name = item.i18n?.en?.name || '';
    const isSet = name.toLowerCase().includes(' set');

    // Syndicate mods (augment mods)
    const syndicateTags = ['syndicate', 'steel_meridian', 'arbiters_of_hexis', 'cephalon_suda', 
                          'perrin_sequence', 'red_veil', 'new_loka', 'augment'];
    const isSyndicateMod = tags.includes('mod') && syndicateTags.some(tag => tags.includes(tag));
    
    if (isSyndicateMod) return true;

    return isSet && (
      tags.includes('warframe') ||
      tags.includes('weapon') ||
      tags.includes('primary') ||
      tags.includes('secondary') ||
      tags.includes('melee') ||
      tags.includes('archwing') ||
      tags.includes('companion') ||
      tags.includes('sentinel') ||
      tags.includes('kubrow') ||
      tags.includes('kavat')
    );
  });

  console.log(`Found ${items.length} items (sets + syndicate mods)`);
  return items;
}

async function fetchSetPrices(urlName, onlineOnly = true) {
  try {
    // Sprawdź czy to mod (nie ma setu, tylko pojedyncza cena)
    const itemData = await fetchDirect(`${API_BASE}/items/${urlName}`);
    const item = itemData.data;
    const tags = item?.tags || [];
    const isMod = tags.includes('mod');
    
    if (isMod) {
      // Dla modów pobierz tylko pojedynczą cenę
      const price = await fetchLowestSellPrice(urlName, onlineOnly);
      return {
        partPrices: [],
        directSetPrice: price,
        partsTotal: null,
        variant: 'direct',
        timestamp: Date.now(),
        expiresAt: Date.now() + (60 * 60 * 1000), // 1 godzina
        isMod: true
      };
    }
    
    // Pobierz części setu (dla setów)
    const setData = await fetchDirect(`${API_BASE}/items/${urlName}/set`);
    const items = setData.data?.items || [];
    
    // Znajdź części (nie setRoot)
    const parts = items.filter(item => !item.setRoot);
    
    // Pobierz wszystkie zamówienia partiami, żeby nie robić zbyt wielu równoległych requestów
    const partFetcher = async (part) => {
      try {
        const ordersData = await fetchDirect(`${API_BASE}/orders/item/${part.slug}`);
        const orders = ordersData.data || [];

        // Filtruj sell orders
        let sellOrders = orders.filter(o => o.type === 'sell');
        if (onlineOnly) {
          sellOrders = sellOrders.filter(o => o.user?.status === 'ingame' || o.user?.status === 'online');
        }

        const prices = sellOrders.map(o => o.platinum).filter(p => p > 0);
        const minPrice = prices.length > 0 ? Math.min(...prices) : null;

        return {
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: minPrice
        };
      } catch (error) {
        console.error(`Failed to fetch orders for ${part.slug}:`, error.message || error);
        return {
          urlName: part.slug,
          displayName: part.i18n?.en?.name || part.slug,
          price: null
        };
      }
    };

    // Pobierz cenę bezpośrednią dla setu równolegle
    const setOrdersPromise = (async () => {
      try {
        const setOrdersData = await fetchDirect(`${API_BASE}/orders/item/${urlName}`);
        const setOrders = setOrdersData.data || [];

        let sellOrders = setOrders.filter(o => o.type === 'sell');
        if (onlineOnly) {
          sellOrders = sellOrders.filter(o => o.user?.status === 'ingame' || o.user?.status === 'online');
        }

        const prices = sellOrders.map(o => o.platinum).filter(p => p > 0);
        return prices.length > 0 ? Math.min(...prices) : null;
      } catch (error) {
        console.error(`Failed to fetch set orders for ${urlName}:`, error.message || error);
        return null;
      }
    })();

    // Use batching to fetch part prices, limit concurrency (batch size 5)
    const partPrices = await mapInBatches(parts, 5, partFetcher, 250);
    const directSetPrice = await setOrdersPromise;
    
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
    // Run FULL by default (fetch part prices every run)
    const FULL = true;
    if (FULL) console.log('Running in FULL mode: will fetch part prices for each set');
    const items = await fetchItems();
    
    // Wczytaj istniejący cache jeśli istnieje
    const outputPath = path.join(__dirname, 'cache.json');
    let cache = {};
    try {
      if (fs.existsSync(outputPath)) {
        cache = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
        console.log(`📦 Loaded existing cache with ${Object.keys(cache).length} items`);
      }
    } catch (error) {
      console.log('Starting fresh cache...');
    }
    
    console.log(`\nFetching prices for ${items.length} sets...`);
    console.time('Total fetch time');
    
    // Przetwarzaj sekwencyjnie, zapisuj po każdym
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemName = item.i18n?.en?.name || item.slug;
      const cacheKey = `${item.slug}|online-true`;
      
      console.log(`[${i + 1}/${items.length}] ${itemName}`);
      // Always fetch full breakdown now
      const full = await fetchSetPrices(item.slug, true);
      if (full) {
        cache[cacheKey] = {
          partPrices: full.partPrices || [],
          directSetPrice: full.directSetPrice || null,
          partsTotal: typeof full.partsTotal === 'number' ? full.partsTotal : null,
          variant: full.variant || (full.directSetPrice !== null ? 'direct' : 'unknown'),
          timestamp: full.timestamp || Date.now(),
          expiresAt: full.expiresAt || (Date.now() + (60 * 60 * 1000)),
          thumb: item.i18n?.en?.thumb,
          displayName: itemName,
          tags: item.tags || []
        };
      } else {
        // Fallback to minimal if fetchSetPrices failed
        const minPrice = await fetchLowestSellPrice(item.slug, true);
        cache[cacheKey] = {
          partPrices: [],
          directSetPrice: minPrice,
          partsTotal: null,
          variant: minPrice !== null ? 'direct' : 'unknown',
          timestamp: Date.now(),
          expiresAt: Date.now() + (60 * 60 * 1000),
          thumb: item.i18n?.en?.thumb,
          displayName: itemName,
          tags: item.tags || []
        };
      }

      // Zapisz cache po każdym itemie (incremental)
      fs.writeFileSync(outputPath, JSON.stringify(cache, null, 2));
      
      // Krótka pauza między itemami (API rate limit)
      if (i < items.length - 1) {
        await delay(FULL ? 500 : 350);
      }
    }
    
    console.timeEnd('Total fetch time');
    console.log(`\n✅ Cache updated: ${Object.keys(cache).length} items saved to ${outputPath}`);
  } catch (error) {
    console.error('❌ Failed to update cache:', error);
    process.exit(1);
  }
}

main();
