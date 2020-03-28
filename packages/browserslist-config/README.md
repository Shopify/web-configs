# `@shopify/browerslist-config`

[![Build Status](https://travis-ci.com/Shopify/web-foundation.svg?branch=master)](https://travis-ci.com/Shopify/web-foundation)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fbrowserslist-config.svg)](https://badge.fury.io/js/%40shopify%2Fbrowserslist-config.svg)

Shareable [browserslist](https://github.com/ai/browserslist) configuration for Shopify.

## Supported Browsers

| Browser                     | Version |
| --------------------------- | ------- |
| Chrome & Chrome for Android | last 3  |
| Firefox                     | last 3  |
| Opera                       | last 3  |
| Edge                        | last 3  |
| Safari                      | 10      |
| iOS                         | 10      |

[List all supported browsers](https://browserl.ist/?q=last+3+chrome+versions%2C+last+3+chromeandroid+versions%2C+last+3+firefox+versions%2C+last+3+opera+versions%2C+last+2+edge+versions%2C+safari+%3E%3D+10%2C+ios+%3E%3D+10%2C+android+%3E%3D+4.4)

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
