# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## [Unreleased] -->

## [4.0.0] - 2021-02-24

### Breaking Change

Set `isolatedModules` to be true by default. Sewing-kit is moving away from a `tsc` based compilation process, towards using babel/esbuild only single file transpilation. Prepare consumers for this change by making type-checking identify code that can be problematic with single-file transpilers. [[#214](https://github.com/Shopify/web-configs/pull/214)]

## [3.0.0] - 2020-06-04

### Breaking Change

The Shopify typescript definition for `.scss` and `.css` have changed.

Before: 

```
import * as styles from 'foo.scss';
```

After: 

```
import styles from 'foo.scss';
```

- Updated the `*.scss` and `*.css` types for esmodules [[#165](https://github.com/Shopify/web-configs/pull/165)]

## [2.0.2] - 2020-03-28

- Start of Changelog
- Move the package from [`sewing-kit`](https://github.com/Shopify/sewing-kit).

