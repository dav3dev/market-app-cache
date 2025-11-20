# Warframe Market Price Cache

Automatically updated price cache for Warframe Prime sets, weapons, and archwings.

## What is this?

This repository hosts a JSON cache file (`cache.json`) that contains current market prices for Warframe Prime items. It's updated automatically every hour via GitHub Actions.

## Data Source

- **API**: Warframe Market API v2
- **Items**: All Prime sets (Warframes, Weapons, Archwings)
- **Update Frequency**: Every hour (automatic via GitHub Actions)
- **Data Includes**:
  - Individual part prices (lowest online seller)
  - Complete set prices (lowest online seller)
  - Total parts price
  - Timestamp and expiration

## Usage

Load the cache in your app:

```javascript
const response = await fetch('https://dav3dev.github.io/market-app-cache/cache.json');
const cache = await response.json();
```

## Cache Structure

Each item is keyed by `{slug}|online-true` format:

```json
{
  "limbo_prime_set|online-true": {
    "partPrices": [
      { "urlName": "limbo_prime_blueprint", "displayName": "Limbo Prime Blueprint", "price": 15 },
      { "urlName": "limbo_prime_chassis", "displayName": "Limbo Prime Chassis", "price": 10 }
    ],
    "directSetPrice": 45,
    "partsTotal": 50,
    "variant": "direct",
    "timestamp": 1700000000000,
    "expiresAt": 1700003600000
  }
}
```

**Fields:**
- `partPrices[]` - Array of individual parts with their prices
- `directSetPrice` - Lowest price for buying the complete set
- `partsTotal` - Sum of individual part prices
- `variant` - Either `"direct"` (buying set is cheaper) or `"parts"` (buying parts is cheaper)
- `timestamp` - When the data was fetched (milliseconds)
- `expiresAt` - Cache expiration time (1 hour after fetch)

## Features

- ✅ Automatic hourly updates via GitHub Actions
- ✅ Incremental cache updates (saves progress after each item)
- ✅ Rate limiting and retry logic for API stability
- ✅ CORS-enabled via GitHub Pages
- ✅ Only shows prices from online/in-game sellers

## Local Development

To generate the cache locally:

```bash
npm install axios
node fetch-prices.js
```

The script will:
1. Load existing cache (if available)
2. Fetch current prices from Warframe Market API
3. Save progress incrementally after each item
4. Complete in ~20-30 minutes (depends on API rate limits)

## Automation

GitHub Actions workflow runs every hour:
- Fetches latest prices from Warframe Market API
- Updates `cache.json`
- Commits and pushes changes
- Deploys to GitHub Pages automatically

## CORS

This repository is configured with GitHub Pages to allow CORS requests. The cache can be loaded from any domain without proxy.

## License

Data is sourced from [Warframe Market](https://warframe.market/) API. This cache is provided as-is for community use.
