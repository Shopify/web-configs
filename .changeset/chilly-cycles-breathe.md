---
'@shopify/eslint-plugin': patch
---

Update `eslint-plugin-prettier` to `v4.1.0`, to automatically skip trying to run prettier over graphql files. Remove the explicit override for disabling prettier in graphql files, as it will cause eslint's "work out what extensions need linting" logic to try to parse graphql files. Add `{overrides: {files: ['*.graphql', '*.gql'], rules: {'prettier/prettier': 'off'}}}` to your eslint config if want to disable running the prettier rule over graphql files entirely.
