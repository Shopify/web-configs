---
'@shopify/eslint-plugin': patch
---

Remove a layer of indirection by specifying rules in `lib/config/*.js` files instead of having them import content from `lib/config/rules/*.js`
