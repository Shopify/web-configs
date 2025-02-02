---
'@shopify/eslint-plugin': patch
---

Add `@typescript-eslint/no-unused-expressions` to typescript ruleset

In v46 in, we enabled `no-unused-expressions` in the core js config, then disabled it and replaced it with `@babel/no-unused-expressions` in esnext config. In typescript files we turn off `no-unused-expressions` but left `@babel/no-unused-expressions` enabled - which seems like an oversight given that `@typescript-eslint/no-unused-expressions` existed. In v47.0.0 we removed configuration of `@babel/no-unused-expressions` entirely, which meant that there was no linting of unused-expressions. This change brings back unused expression linting to typescript files.
