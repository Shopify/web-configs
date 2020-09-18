# `@shopify/prettier-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fprettier-config.svg)](https://badge.fury.io/js/%40shopify%2Fprettier-config.svg)  [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/prettier-config.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/prettier-config.svg)

Shared prettier configuration

## Installation

```bash
$ yarn add --dev @shopify/prettier-config
```

## Usage
Shopify’s shared prettier config comes bundled in `@shopify/prettier-config`. To enable these rules, add a `prettier` property in your `package.json` and reference this shared config as follows:
```
"prettier": "@shopify/prettier-config"
```
Previously, rules had been defined directly in a `.prettierrc` or `package.json` 

Any previous `.prettierrc` should be removed in favour of the shared config.
