# `@shopify/browserslist-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40shopify%2Fbrowserslist-config.svg)

Shareable [browserslist](https://github.com/ai/browserslist) configuration for Shopify.

## Supported Browsers

| Browser                     | Version |
| --------------------------- | ------- |
| Chrome & Chrome for Android | last 3  |
| Firefox                     | last 3  |
| Opera                       | last 3  |
| Edge                        | last 3  |
| Safari                      | last 3  |
| iOS                         | >= 13.4 |

You can list all supported browsers by running `npx browserslist "last 1 firefoxandroid versions, last 3 chrome versions, last 3 chromeandroid versions, last 3 firefox versions, last 3 opera versions, last 3 edge versions, last 3 safari versions, ios >= 13.4"`

Shopify employees can learn more by visiting the [browser support Vault page](https://vault.shopify.io/pages/1524-Browser-support)

## Installation

Install the module.

```shell
$ yarn add @shopify/browserslist-config
```

## Usage

### package.json

```json
{
  "browserslist": ["extends @shopify/browserslist-config"]
}
```
