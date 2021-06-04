# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## Unreleased -->

### Changed

- Update `@babel/preset-env`, `@babel/plugin-transform-typescript`, and `@babel/parser` to `7.14.4` [[#256](https://github.com/Shopify/web-configs/pull/256)]

## 24.0.0 - 2021-05-25

### Breaking Change

- Removed `web`, `node`, `react`, and `common` presets for a single `@shopify/babel-preset` import. See [documentation](./README.md) for usage. [[#252](https://github.com/Shopify/web-configs/pull/252)]

### Changed

- Updated `@babel/*` presets and plugins to version `7.14.2` [[#254](https://github.com/Shopify/web-configs/pull/254)]

## 23.6.1 - 2021-05-05

### Changed

- Fix loose warning for `@babel/plugin-proposal-private-methods` [[#245](https://github.com/Shopify/web-configs/pull/245)]

## 23.6.0 - 2021-05-04

### Changed

- Updated `@babel/*` presets and plugins to version `7.14.x` [[#241](https://github.com/Shopify/web-configs/pull/241)]

## 23.5.1 - 2021-04-20

### Changed

- Updated `@babel/core`, `@babel/runtime`, and fixes `@shopify/babel-preset` react settings [[#235](https://github.com/Shopify/web-foundation/pull/235)]

## 23.5.0 - 2021-04-20

### Added

- Created an experimental `common` babel-preset [[#231](https://github.com/Shopify/web-foundation/pull/231)]

### Changed

- Updated `@babel/*` presets and plugins to version `7.13.x` [[#231](https://github.com/Shopify/web-foundation/pull/231)]

## 23.4.1 - 2021-04-16

### Changed

- Updated `@babel/*` presets and plugins to version `7.13.x` [[#222](https://github.com/Shopify/web-foundation/pull/222)]

## 23.4.0 - 2021-03-10

### Changed

- Updated `@babel/*` presets and plugins to version `7.13` [[#219](https://github.com/Shopify/web-foundation/pull/219)]

## 23.3.2 - 2021-02-11

### Changed

- Improved how options are defined in `@shopify/babel-preset/react` [[#209](https://github.com/Shopify/web-configs/pull/209)]

## 23.3.1 - 2021-02-10

### Changed

- Bugfix for disabling `transformReactConstantElements` [[#208](https://github.com/Shopify/web-configs/pull/208)]

## 23.3.0 - 2021-02-10

### Changed

- Updated `@babel/*` presets and plugins to version `7.12` [[#207](https://github.com/Shopify/web-foundation/pull/207)]

### Added

- Added the ability to add `@babel/plugin-transform-runtime` [[#206](https://github.com/Shopify/web-configs/pull/206)]

## 23.2.0 - 2021-02-09

### Added

- Added the ability to disable `@babel/plugin-transform-react-constant-elements` [[#205](https://github.com/Shopify/web-foundation/pull/205)]

## 23.1.1 - 2020-08-26

- Update `@babel/preset-env` and other babel packages to 7.10.4 and enable preset-env's [`bugfixes`](https://babeljs.io/docs/en/babel-preset-env#bugfixes) option [[#172](https://github.com/Shopify/web-foundation/pull/172)]

## 23.1.0 - 2020-05-12

### Changed

- Update `@babel/core`, `@babel/preset-env`, `@babel/plugin-transform-modules-commonjs` to `7.9.6` [[#155](https://github.com/Shopify/web-foundation/pull/155)]

## 23.0.0 - 2020-04-23

### Changed

- Remove `react-hot-loader` since `react-fast-refresh` is now used in sewing-kit [[#145](https://github.com/Shopify/web-foundation/pull/145)]

## 22.0.0 - 2020-03-28

🚨Package rename

This package has been renamed from `babel-preset-shopify` to `@shopify/babel-preset`.

Before:

```
module.exports = {
  presets: [['babel-preset-shopify/...']],
};
```

After:

```
module.exports = {
  presets: [['@shopify/babel-preset/...']],
};
```

## 21.0.0

### Added

- Added support for null coalescing and optional chaining operators [[#48](https://github.com/Shopify/babel-preset-shopify/pull/48)]

### Changed

- Updated `@babel/core`, `@babel/preset-env`, presets, and plugins updated to the latest `7.7.x` versions [[#47](https://github.com/Shopify/babel-preset-shopify/pull/47)]

## 20.1.0 - 2019-09-24

- Pass `browsers` web preset config string directly into babel-preset-env's targets option, so that if it is unset we shall read honor browserslist config in package.json / .browserslistrc

## 20.0.0 - 2019-06-03

- Add `babel-plugin-dynamic-import-node` to the node preset. This was originally added in 19.1.0 then reverted in 19.1.1 as it was a breaking change in some circumstances

## 19.1.1 - 2019-06-03

- Revert Adding `babel-plugin-dynamic-import-node` to the node preset as this may be a breaking change in some circumstances

## 19.1.0 - 2019-05-29

- Added `typescript` option to node and web presets to allow babel to read typescript files when set to true.
- Added `babel-plugin-dynamic-import-node` to the node preset
- Removed `@babel/plugin-proposal-optional-catch-binding` because it is already handled by `@babel/preset-env` if you specify an environment where it is needed.

## 19.0.1 - 2019-05-23

- Added `@babel/plugin-proposal-optional-catch-binding` to `node` and `web` presets

## 19.0.0 - 2019-05-06

- Switched the default `useBuiltIns` option back to `entry`, since it has a smaller bundle impact on large applications

## 18.1.1 - 2019-05-03

- `web` preset now accepts a `useBuiltIn` value (default = `usage`)

## 18.1.0 - 2019-04-22

### Added

- `node` and `web` presets now accept a `corejs` option (default = `2`)

## 18.0.0 - 2019-03-19

### Changed

- `node` and `web` presets now use `useBuiltIns: 'usage'` for including `corejs` polyfills.

## 17.0.1 - 2019-01-09

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


### Chore

- Switch from Circle CI to Travis.

## 16.5.0 - 2018-05-01

### Chore

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

### Changed

- Integrated bugfix from most recent version of `babel-plugin-transform-react-pure-to-component`.

## 16.0.1 - 2017-02-17

### Fixed

- `shopify/web` and `shopify/node` now correctly default the `modules` option to `'commonjs'` instead of `true`.

## 16.0.0 - 2017-02-07

### Added

- `shopify/react` now includes a `hot` option to enable plugins related to hot reloading (`react-hot-loader` and `react-pure-to-component`).
- `shopify/react` now includes plugins in development that add additional information for debugging purposes, and plugins in production that offer some performance optimizations.
- `shopify/web` now accepts an additional option, `browsers` (an array of [`browserslist`](https://github.com/ai/browserslist) strings) which specifies what browsers to transpile for (defaults to the browsers supported by Shopify’s admin).


### Changed

- `shopify/web` and `shopify/node` presets now use [`babel-preset-env`](https://github.com/babel/babel-preset-env) to transpile only the features needed for the target environment.
- Updated all versions of dependend-on plugins and presets.

## 15.0.1

- Initial move from combined `javascript` repo.
