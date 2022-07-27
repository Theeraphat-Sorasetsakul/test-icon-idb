#### Step to deploy
1. Fix the utils path in package.json
2. `npm run build`
3. Use *root/index.html* for each iframe app, then deploy
4. Use URL from step 2 to fix src at *root/8iframe-app/index.html*, then deploy

#### Branches
- `master`: utils with local-cache and idb
- `v6`: same current propose at v6