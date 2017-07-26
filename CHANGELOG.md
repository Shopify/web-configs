# Changelog

## [Unreleased]

## [2.0.0] - 2017-07-24

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

## [1.0.0] - 2017-05-29
* Initial release
