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
| Safari                      | >=10    |
| iOS                         | >=10    |

You can list all supported browsers by running `npx browserslist "last 1 firefoxandroid versions, last 3 chrome versions, last 3 chromeandroid versions, last 3 firefox versions, last 3 opera versions, last 3 edge versions, safari >= 10, ios >= 10"`

To learn more about browser and iOS support at Shopify visit [our vault page](https://vault.shopify.io/pages/1524-Browser-support)

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
