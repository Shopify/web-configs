# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2020-05-14

### Changed

- Explicitly set default for `"arrowParens": "always"`.  Although it is a default for prettier as of v2.0, it was `avoid` in prior versions.  Specifying it explicitly here will result in the same config, not matter which version of prettier used.

## [1.0.0] - 2020-05-12

### Added

- Created `@shopify/prettier-config` package ([#152](https://github.com/Shopify/web-configs/pull/152))
