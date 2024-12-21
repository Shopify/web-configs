---
'@shopify/eslint-plugin': major
---

Remove configuring deprecated formatting rules.

Per https://eslint.org/blog/2023/10/deprecating-formatting-rules/ and https://typescript-eslint.io/blog/deprecating-formatting-rules several formatting related rules have been deprecated from `eslint` core and `typescript-eslint` and moved into `@stylistic/eslint-plugin`. These rules will be removed in eslint v10 (unreleased) and typescript-eslint v8 (released).

To prepare for future updates we are removing our configuration of these rules. We recommend that you use Prettier (https://prettier.io/) for formatting considerations via the `prettier` config. If you do not wish to use Prettier, then we suggest you use the stylistic rules from `@stylistic/eslint-plugin` (https://eslint.style/packages/js).
