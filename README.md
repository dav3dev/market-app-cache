# Warframe Market Price Cache

Automatically updated price cache for Warframe Prime sets, weapons, and archwings.

## What is this?

This repository hosts a JSON cache file (`cache.json`) that contains current market prices for Warframe Prime items. It's updated automatically every hour via GitHub Actions.

## Data Source

- **API**: Warframe Market API v2 (`https://api.warframe.market/v2`)
- **Items**: ~150 Prime sets (Warframes, Weapons, Archwings)
- **Update Frequency**: Every hour
- **Data Includes**:
  - Individual part prices
  - Complete set prices
  - Total parts price
  - Timestamp and expiration

## Usage

Load the cache in your app:

```javascript
const response = await fetch('https://your-username.github.io/warframe-cache/cache.json');
const cache = await response.json();
```

## Cache Structure

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

## Local Development

To generate the cache locally:

```bash
npm install axios
node fetch-prices.js
```

This will create/update `cache.json` with current prices (~3-5 minutes to fetch all items).

## CORS

This repository is configured with GitHub Pages to allow CORS requests. The cache can be loaded from any domain.

## License

Data is sourced from [Warframe Market](https://warframe.market/) API. This cache is provided as-is for community use.
