# Changelog

## [Unreleased]

* Updated [stylelint-scss](https://github.com/kristerkari/stylelint-scss) from `1.4.x` to `^2.0.1`
* Replaced deprecated `scss/at-mixin-no-argumentless-call-parentheses` rule with its equivalent `scss/at-mixin-argumentless-call-parentheses`
* Updated `eslint-plugin-shopify` to the latest version, and updated ESLint to the appropriate version
* Updates `media-feature-name-no-unknown` to ignore `prefers-reduced-motion`

## [2.0.1] - 2017-07-28

### Changed
* Set `selector-max-type` to 1

## [2.0.0] - 2017-07-27

### Added

* New plugin:
  * Added `stylelint-order` which replaces `declaration-block-properties-order`

* New rules:
  * `rule-empty-line-before`
  * `selector-max-universal`
  * `at-rule-semicolon-space-before`
  * `selector-max-attribute`
  * `selector-max-class`
  * `selector-max-combinators`
  * `selector-max-id`
  * `selector-max-type`
  * `function-url-scheme-blacklist` (disabled)
  * `media-feature-name-whitelist` (disabled)
  * `time-min-milliseconds` (disabled)

### Removed

* Deprecated rules:
  * `block-no-single-line`
  * `no-indistinguishable-colors`
  * `declaration-block-no-ignored-properties`
  * `declaration-block-properties-order`
  * `function-url-data-uris`
  * `no-browser-hacks`
  * `no-unsupported-browser-features`
  * `media-feature-no-missing-punctuation`
  * `custom-property-no-outside-root`
  * `root-no-standard-properties`
  * `rule-nested-empty-line-before`
  * `rule-non-nested-empty-line-before`


### Changed

* Properties order for shorthand notation with margin, padding, border styles have been updated to follow:
```
property: <top> <right> <bottom> <left>
```

## 1.0.0 - 2017-05-29
* Initial release


[Unreleased]: https://github.com/Shopify/stylelint-config-shopify/compare/v2.0.1...HEAD
[2.0.1]: https://github.com/Shopify/stylelint-config-shopify/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/Shopify/stylelint-config-shopify/compare/v1.0.0...v2.0.0
