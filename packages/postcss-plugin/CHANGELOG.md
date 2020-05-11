# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->

## [3.0.0] - 2020-03-28

🚨Package rename

This package has been renamed from `postcss-shopify` to `@shopify/postcss-plugin.`. Update any configuration to use this new name

Before:

```
module.exports = {
  plugins: {
    'postcss-shopify',
  },
};
```

After:

```
module.exports = {
  plugins: {
    '@shopify/postcss-plugin',
  },
};
```

## [2.2.1] - 2019-01-17

- Removed a potentially buggy transform from the `minimize`-based preset

## [2.2.0] - 2018-11-26

- Added the `minimize` option to optionally enable `cssnano`.

## [2.1.0] - 2018-11-22

- Updated to the latest version of all dependencies.

## [2.0.0] - 2018-08-30

Breaking change: updated dependencies to use PostCSS 7.0.

- Updated autoprefixer: `^6.7.6` -> `9.1.3` ([changelog](https://github.com/postcss/autoprefixer/blob/master/CHANGELOG.md))
- Updated postcss: `^5.2.15` -> `7.0.2` ([changelog](https://github.com/postcss/postcss/blob/master/CHANGELOG.md))
- Updated postcss-calc": `^5.3.1` -> `^6.0.1` ([changelog](https://github.com/postcss/postcss-calc/blob/master/CHANGELOG.md))
- Updated postcss-flexbugs-fixes: `^2.1.0` -> `4.1.0` ([changelog](https://github.com/luisrudge/postcss-flexbugs-fixes/blob/master/CHANGELOG.md))
- Updated postcss-discard-comments: `^2.0.4` -> `4.0.0` ([changelog](https://github.com/cssnano/cssnano/blob/master/packages/postcss-discard-comments/CHANGELOG.md))
- Updated postcss-selector-matches: `^2.0.5` -> `^3.0.1` ([changelog](https://github.com/postcss/postcss-selector-matches/blob/master/CHANGELOG.md))
- Updated postcss-will-change: `^1.1.0` -> `^2.0.0` ([changelog](https://github.com/postcss/postcss-will-change/blob/master/CHANGELOG.md))

## [1.0.1] - 2018-01-17

- Discard comments in the last processing step, allowing to use comments such as `/* autoprefixer: off */` ([#2](https://github.com/Shopify/postcss-shopify/pull/2))

## [1.0.0] - 2017-03-05

- Initial release

[Unreleased]: https://github.com/Shopify/postcss-shopify/compare/v2.0.0...master
[2.0.0]: https://github.com/Shopify/postcss-shopify/compare/v1.0.1...v2.0.0
[1.0.1]: https://github.com/Shopify/postcss-shopify/compare/v1.0.0...v1.0.1
