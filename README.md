# images

[![CircleCI](https://circleci.com/gh/Shopify/images.svg?style=shield)](https://circleci.com/gh/Shopify/images)

Tools to help us wrangle images at Shopify.

## Installation

```bash
$ yarn add @shopify/images
```

## API

### `icon-loader.js`

This package exports a loader that is intended to be used with Webpack. It processes icon files into objects that we can use to render our shared Icon component.

### `optimize.js`

This package exports helpers for optimizing images. The following members are exported:

* `svgOptions`: an object containing our recommended options for using SVGO.

## License

MIT, see [LICENSE.md](http://github.com/Shopify/images/blob/master/LICENSE.md) for details.

<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />
