# Changelog

<!-- ## Unreleased -->

### Fixed

- Honor the `envName` defined in your babel config.

## 17.0.0 - 2019-01-03

### Changed

- All presets now only work with Babel version 7 or greater.
- `browsers` are no longer hardcoded to those supported by Shopify’s admin for the purposes of the `shopify/web` preset. You must provide a [browserslist](https://github.com/browserslist/browserslist)-compatible configuration within your project, which will be used automatically when running Babel with this preset. Projects can use [`@shopify/browserslist-config`](https://github.com/Shopify/browserslist-config) to get the same support as Shopify’s admin.
- The `shopify/web` preset no longer includes plugins for Stage 3 features. The only non-standard features included in this preset are class properties and dynamic imports.


### Removed

- Removed `shopify/flow` preset since it is no longer used by most projects at Shopify.

### Added

- The `shopify/react` preset now accepts a `pragmaFrag` option for specifying the component to use in JSX fragment expressions.

## 16.7.0 - 2018-12-18

### Changed

- Removed `babel-plugin-transform-react-pure-to-component`.

## 16.6.0 - 2018-10-11

### Changed

- Updated several babel plugin dependencies:
  - `babel-plugin-transform-inline-environment-variables` 0.1.1 => 0.4.3
  - `babel-plugin-transform-object-rest-spread` 6.23.0 => 6.26.0
  - `babel-preset-env` 1.5.2 => 1.7.0.


### Internals

- Switch from Circle CI to Travis.

## 16.5.0 - 2018-05-01

### Internals

- Added `publishConfig` to fix deployments.

## 16.4.0 - 2018-05-01

### Added

- `shopify/react` preset now accepts an additional option, `pragma`. Defaults to `React.createElement`.

## 16.3.0 - 2018-03-14

### Added

- `shopify/web` and `shopify/node` now accept an additional option, `debug`. When passed, this enables `babel-preset-env`'s debugging to show why transforms are being included in a project. Defaults to `false` (current behaviour).

## 16.2.0 - 2017-08-23

### Added
- Added `babel-plugin-syntax-dynamic-import` to the web config.

## 16.1.0 - 2017-06-08

### Added

- Added a Babel plugin to remove `testID` props in non-test environments.

## 16.0.2 - 2017-02-18

### Updated

- Integrated bugfix from most recent version of `babel-plugin-transform-react-pure-to-component`.

## 16.0.1 - 2017-02-17

### Fixed

- `shopify/web` and `shopify/node` now correctly default the `modules` option to `'commonjs'` instead of `true`.

## 16.0.0 - 2017-02-07

### Added

- `shopify/react` now includes a `hot` option to enable plugins related to hot reloading (`react-hot-loader` and `react-pure-to-component`).
- `shopify/react` now includes plugins in development that add additional information for debugging purposes, and plugins in production that offer some performance optimizations.
- `shopify/web` now accepts an additional option, `browsers` (an array of [`browserslist`](https://github.com/ai/browserslist) strings) which specifies what browsers to transpile for (defaults to the browsers supported by Shopify’s admin).


### Updated

- `shopify/web` and `shopify/node` presets now use [`babel-preset-env`](https://github.com/babel/babel-preset-env) to transpile only the features needed for the target environment.
- Updated all versions of dependend-on plugins and presets.

## 15.0.1

- Initial move from combined `javascript` repo.
