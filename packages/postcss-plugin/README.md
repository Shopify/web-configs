# `@shopify/postcss-plugin`

[![Build Status](https://travis-ci.com/Shopify/web-foundation.svg?branch=master)](https://travis-ci.com/Shopify/web-foundation)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md) [![npm version](https://badge.fury.io/js/%40shopify%2Fpostcss-plugin.svg)](https://badge.fury.io/js/%40shopify%2Fpostcss-plugin.svg)

All of Shopify’s preferred [PostCSS](https://github.com/postcss/postcss) plugins wrapped up in a single, easy-to-use plugin.

## Installation

```bash
yarn add --dev @shopify/postcss-plugin

# or, with npm

npm i @shopify/postcss-plugin --save-dev
```

## Features

This plugin wraps around the following PostCSS transformations:

- [`postcss-calc`](https://github.com/postcss/postcss-calc)
- [`postcss-flexbugs-fixes`](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [`postcss-selector-matches`](https://github.com/postcss/postcss-selector-matches)
- [`postcss-will-change`](https://github.com/postcss/postcss-will-change)
- [`autoprefixer`](https://github.com/postcss/autoprefixer)
- [`postcss-discard-comments`](https://github.com/ben-eb/postcss-discard-comments)

## Options

This plugin accepts a single option, `minimize`. Passing `minimize: true` will turn on CSS minification via [cssnano](https://cssnano.co).
