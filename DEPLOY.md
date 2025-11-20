# Deploy Instructions for Warframe Cache

## Step 1: Create Public Cache Repository

1. **Create new GitHub repository:**
   - Repository name: `market-app-cache`
   - Visibility: **Public** ✅
   - Initialize: No README (we already have files)

2. **Push cache folder to GitHub:**
   ```bash
   cd "f:/Google Drive/AutoHotkey/Nowy folder/warframe-cache"
   git init
   git add .
   git commit -m "Initial cache repository"
   git branch -M main
   git remote add origin https://github.com/dav3dev/market-app-cache.git
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. Click **Save**
5. Wait ~1 minute for deployment

Your cache will be available at:
```
https://dav3dev.github.io/market-app-cache/cache.json
```

## Step 3: Enable GitHub Actions

1. Go to repository **Actions** tab
2. Click **"I understand my workflows, go ahead and enable them"**
3. Go to **Actions** → **Update Price Cache** → **Enable workflow**

## Step 4: First Cache Update

**Option A - Manual trigger:**
1. Go to **Actions** → **Update Price Cache**
2. Click **Run workflow** → **Run workflow**
3. Wait ~3-5 minutes for completion
4. Check if `cache.json` was updated (commit message: "Update price cache")

**Option B - Local generation:**
```bash
cd warframe-cache
npm install
npm run update
git add cache.json
git commit -m "Initial cache generation"
git push
```

## Step 5: Update Frontend URL

Frontend is already configured to use:
```
https://dav3dev.github.io/market-app-cache/cache.json
```

No changes needed in `market-app/src/App.jsx`.

## Verification

1. **Test cache URL in browser:**
   - Open `https://dav3dev.github.io/market-app-cache/cache.json`
   - Should see JSON with prices

2. **Test frontend:**
   ```bash
   cd market-app
   npm run dev
   ```
   - Open browser console
   - Look for: `✅ Loaded XXX cached prices from cache repository`

## Maintenance

- **Automatic updates:** Every hour via GitHub Actions
- **Manual update:** Actions → Update Price Cache → Run workflow
- **Monitor:** Check Actions tab for workflow runs
- **Rate limits:** GitHub Actions has 2000 minutes/month free (more than enough)

## Troubleshooting

**Cache not loading:**
- Check CORS: GitHub Pages allows all origins by default
- Verify URL in browser (should return JSON)
- Check browser console for errors

**GitHub Actions failing:**
- Check Actions tab for error logs
- Common issue: Rate limiting from Warframe Market API (wait and retry)

**Cache outdated:**
- Manually trigger workflow
- Check cron schedule in `.github/workflows/update-cache.yml`
