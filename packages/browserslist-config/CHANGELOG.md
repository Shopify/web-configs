# Changelog

## 3.0.2

### Patch Changes

- [#468](https://github.com/Shopify/web-configs/pull/468) [`21bf8bb`](https://github.com/Shopify/web-configs/commit/21bf8bbb86d819df07893fbcd66eb1b8575eabe7) Thanks [@znja](https://github.com/znja)! - NPM provenance statements

## 3.0.0 - 2021-07-12

### Breaking Change

- Update desktop Safari / iOS Safari minimum supported versions. This brings iOS Safari support inline with the recent updates to Shopify mobile app's minimum supported versions, which now require a minimum version of iOS 13.6. iOS Safari targets `ios >= 13.4` which matches the caniuse target of `ios_saf 13.4-13.7`. Desktop Safari targets `last 3 safari versions` to match other desktop browser support, which matches the caniuse target of `safari 13.1`. [[#274](https://github.com/Shopify/web-configs/pull/274)]

## 2.2.4 - 2020-11-03

- Support the last major version of Firefox on Android in browserlist config. [[#193](https://github.com/Shopify/web-configs/pull/193)]

## 2.2.0 - 2020-03-28

- Support now the last 3 major version of Edge
