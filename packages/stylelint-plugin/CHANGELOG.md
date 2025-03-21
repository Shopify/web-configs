# Changelog

## 15.0.2

### Patch Changes

- [#468](https://github.com/Shopify/web-configs/pull/468) [`21bf8bb`](https://github.com/Shopify/web-configs/commit/21bf8bbb86d819df07893fbcd66eb1b8575eabe7) Thanks [@znja](https://github.com/znja)! - NPM provenance statements

## 15.0.0

### Major Changes

- [#438](https://github.com/Shopify/web-configs/pull/438) [`0f7fde2`](https://github.com/Shopify/web-configs/commit/0f7fde2aa5b3cdbb8514566179f108d2f8f16ebb) Thanks [@brendo](https://github.com/brendo)! - Replace deprecated `scss/at-import-partial-extension` rule with `scss/load-partial-extension`.

## 14.0.0

### Major Changes

- [#426](https://github.com/Shopify/web-configs/pull/426) [`f00d08d`](https://github.com/Shopify/web-configs/commit/f00d08df6ce494dd39eaf9dc27eb7518d6c85df0) Thanks [@kyledurand](https://github.com/kyledurand)! - Bumped all dependencies. Dropped support for sylelint@14 and stylelint@15

### Patch Changes

- [#428](https://github.com/Shopify/web-configs/pull/428) [`f8ce1ef`](https://github.com/Shopify/web-configs/commit/f8ce1ef339ec5215eaba0d6cc98f3533ecad9f22) Thanks [@kyledurand](https://github.com/kyledurand)! - Updated deprecated rules

## 13.0.0

### Major Changes

- [#400](https://github.com/Shopify/web-configs/pull/400) [`cbfdb60`](https://github.com/Shopify/web-configs/commit/cbfdb6034d79acc7969bdd7daddf8f136e5eeb4f) Thanks [@BPScott](https://github.com/BPScott)! - Upgrade stylelint plugins to support prettier `3.x`. Drop support for prettier `2.x`.

## 12.0.1

### Patch Changes

- [#375](https://github.com/Shopify/web-configs/pull/375) [`7a0dcd1`](https://github.com/Shopify/web-configs/commit/7a0dcd1d211f3985ae771174268c016ebbb240d9) Thanks [@BPScott](https://github.com/BPScott)! - Don't replace `top`/`right`/`bottom`/`left` declarations with `inset` shorthand as `inset` is only supported in iOS Safari 14.5+

## 12.0.0

### Major Changes

- [#364](https://github.com/Shopify/web-configs/pull/364) [`2283dfe`](https://github.com/Shopify/web-configs/commit/2283dfed0a3ecbe0db7d995e77df308dca623b57) Thanks [@alexandcote](https://github.com/alexandcote)! - Updating our stylelint rules to support stylelint@^15

  - Removing [76 rules](https://stylelint.io/user-guide/rules#deprecated) deprecated rules.
  - Enable a new [`declaration-property-value-no-unknown`](https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-property-value-no-unknown/README.md) rule.
  - Only support `stylelint` >= 15

### Minor Changes

- [#364](https://github.com/Shopify/web-configs/pull/364) [`2283dfe`](https://github.com/Shopify/web-configs/commit/2283dfed0a3ecbe0db7d995e77df308dca623b57) Thanks [@alexandcote](https://github.com/alexandcote)! - Updating `stylelint-scss` to version `^4.4.0`.

  This version support new rules:

  - [`scss/dollar-variable-no-namespaced-assignment`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-no-namespaced-assignment/README.md)
  - [`scss/at-use-no-unnamespaced`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-use-no-unnamespaced/README.md)
  - [`scss/function-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/function-no-unknown/README.md)
  - [`scss/at-import-partial-extension`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-import-partial-extension/README.md)
  - [`scss/at-rule-no-unknown`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md)

### Patch Changes

- [#364](https://github.com/Shopify/web-configs/pull/364) [`2283dfe`](https://github.com/Shopify/web-configs/commit/2283dfed0a3ecbe0db7d995e77df308dca623b57) Thanks [@alexandcote](https://github.com/alexandcote)! - Update `postcss` to version ^8.4.21

- [#364](https://github.com/Shopify/web-configs/pull/364) [`2283dfe`](https://github.com/Shopify/web-configs/commit/2283dfed0a3ecbe0db7d995e77df308dca623b57) Thanks [@alexandcote](https://github.com/alexandcote)! - Updating stylelint-prettier to `^3.0.0`

- [#364](https://github.com/Shopify/web-configs/pull/364) [`2283dfe`](https://github.com/Shopify/web-configs/commit/2283dfed0a3ecbe0db7d995e77df308dca623b57) Thanks [@alexandcote](https://github.com/alexandcote)! - Update `stylelint-order` to version `^6.0.0`

- [#366](https://github.com/Shopify/web-configs/pull/366) [`33f12e4`](https://github.com/Shopify/web-configs/commit/33f12e48ee0e7c95bfa35392ef0d2a9c27329d68) Thanks [@BPScott](https://github.com/BPScott)! - Remove a layer of indirection by specifying rules in `index.js` instead of having that import content from `config/*.js`

## 11.0.1 - 2021-12-07

### Changed

- Added `postcss` as a dependency, as it is requested by `postcss-scss`. [[#311](https://github.com/Shopify/web-configs/pull/311)]

## 11.0.0 - 2021-12-01

### Breaking Change

- Updated peer dependency on `stylelint` to require at least v14.1.0. [[#307](https://github.com/Shopify/web-configs/pull/307)]
- Added override config block to parse `scss` files with `postcss-scss`. [[#307](https://github.com/Shopify/web-configs/pull/307)]
- Updated the minimum version of several stylelint plugins. [[#307](https://github.com/Shopify/web-configs/pull/307)]

| Package                     | Old version | New version |
| --------------------------- | ----------- | ----------- |
| `stylelint-config-prettier` | `^8.0.1"`   | `^9.0.3`    |
| `stylelint-order`           | `^4.0.0`    | `^5.0.0`    |
| `stylelint-prettier`        | `^1.2.0`    | `^2.0.0`    |
| `stylelint-scss`            | `^3.19.0`   | `^4.0.0`    |

### Changed

- Removed dependency on `merge` by replacing usage with object spread. [[#308](https://github.com/Shopify/web-configs/pull/308)]

## 10.2.0 - 2021-09-13

### Changed

- Enabled Stylelint `@forward` and `@use` scss rules

## 10.1.2 - 2021-05-05

### Changed

- Update `merge` to `2.1.1`. [[#244](https://github.com/Shopify/web-configs/pull/244)]

## 10.1.1 - 2020-04-21

### Changed

- Remove `no-invalid-position-at-import-rule` rule as it is not in a currently released version of stylelint. [[#237](https://github.com/Shopify/web-configs/pull/237)]
- Update peer dependency to `>=13.12.0`. [[#237](https://github.com/Shopify/web-configs/pull/237)]

## 10.1.0 - 2021-03-10

### Changed

- Update `stylelint`, `stylelint-prettier`, and `stylelint-scss`. [[#224](https://github.com/Shopify/web-configs/pull/224)]

## 10.0.1 - 2020-10-07

- Update stylelint peer dependency to `>=13.7.0"`

## 10.0.0 - 2020-10-06

### Breaking Change

- Projects will need to use stylelint v13.7.0 or higher
- Stylelint rules have been renamed. `*-blacklist`, `*-requirelist` and `*-whitelist` rules have been replaced in favour of the new `*-disallowed-list`, `*-required-list` and `*-allowed-list` ones.

## 9.0.0 - 2020-06-04

### Breaking Change

The Shopify stylelint rules have been renamed to follow the `@shopify` namespace convention

Before:

```
module.exports = {
  extends: ['@shopify/stylelint-plugin/prettier'],
  rules: {
    'shopify/content-no-strings': true,
  },
};
```

After:

```
module.exports = {
  extends: ['@shopify/stylelint-plugin/prettier'],
  rules: {
    '@shopify/content-no-strings': true,
  },
};
```

## 8.1.0 - 2020-05-12

- Loosen the `selector-class-pattern` rule to allow for hypens in class names. [[#153](https://github.com/Shopify/web-foundation/pull/153)]

## 8.0.0 - 2020-03-28

- Bump `stylelint-config-prettier@^4.0.0` to `stylelint-config-prettier@^8.0.1`
- Bump `stylelint-order@^2.2.1` to `stylelint-order@^4.0.0`
- Bump `stylelint-scss@^3.13.0` to `stylelint-scss@^3.16.0`
- Bump the `stylelint` peerDependencies to `stylelint@>=13.0.0`

🚨Package rename

This package has been renamed from `stylelint-config-shopify` to `@shopify/stylelint-plugin.`. Update any configuration to use this new name.

Before:

```
"stylelint": {
  "extends": ["stylelint-config-shopify/prettier"]
}
```

After:

```
"stylelint": {
  "extends": ["@shopify/stylelint-plugin/prettier"]
}
```

### Changed

- Add jest and bump node to 10.0.0. [[#55](https://github.com/Shopify/stylelint-config-shopify/pull/55]
- Rename "rules" folder - which contains config for existing rules to be "config"; Rename "plugins" folder which contains our custom rule definitions to be "rules". This matches the layout used by eslint-plugin-shopify. [[#56](https://github.com/Shopify/stylelint-config-shopify/pull/56)]

## 7.4.0 - 2019-12-16

### Added

- New Rules. [[#54](https://github.com/Shopify/stylelint-config-shopify/pull/54)]:
  - [`scss/at-if-no-null`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-if-no-null)
  - [`scss/at-each-key-value-single-line`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-each-key-value-single-line)
  - [`scss/at-rule-conditional-no-parentheses`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/at-rule-conditional-no-parentheses)
  - [`scss/dimension-no-non-numeric-values`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/dimension-no-non-numeric-values)
  - [`scss/function-unquote-no-unquoted-strings-inside`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/function-unquote-no-unquoted-strings-inside)
  - [`scss/selector-no-union-class-name`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/selector-no-union-class-name)
  - [`scss/no-duplicate-mixins`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/no-duplicate-mixins)

### Changed

- Bump stylelint-prettier v1.1.2. [[#54](https://github.com/Shopify/stylelint-config-shopify/pull/54)]

## 7.3.0 - 2019-12-14

### Added

- Forbid `display: table` for better Safari + VoiceOver + iOS compatibility. [[#52](https://github.com/Shopify/stylelint-config-shopify/pull/52)]

## 7.2.1 - 2019-04-04

- Fixed an regression where 7.2.0 introduced the need for stylelint 9.9.0 or above. [[#50](https://github.com/Shopify/stylelint-config-shopify/pull/50)]

## 7.2.0 - 2019-04-03

- Allow non-lowercase values in properties such as `font`, `font-family`, `--anything-with-font-in-its-name`, or Sass variables starting with `$polaris` or containing `font`. [[#49](https://github.com/Shopify/stylelint-config-shopify/pull/49)]

## 7.1.0 - 2019-01-07

- Raise `peerDependency` on `stylelint` to 9.4.0 to accomodate the `linebreaks` rule. [[#46](https://github.com/Shopify/stylelint-config-shopify/pull/46)]
- Bump `stylelint-prettier` to v1.0.6 to fix crashes when reading unparsable files. [[#48](https://github.com/Shopify/stylelint-config-shopify/pull/48)]

## 7.0.4 - 2018-10-02

- Bump stylelint-prettier v1.0.3 to avoid a transitive dependency on eslint-plugin-prettier. [[#45](https://github.com/Shopify/stylelint-config-shopify/pull/45)]

## 7.0.3 - 2018-09-27

- Redeploy of `7.0.2` to update `latest` version reference on npm.

## 7.0.2 - 2018-09-13

### Changed

- Disable `scss/no-duplicate-dollar-variables` rule by default. It makes no attempt to understand how Sass's variable scoping works which results in lots of false warnings on completely reasonable code. [[#44](https://github.com/Shopify/stylelint-config-shopify/pull/44)]

## 7.0.1 - 2018-09-12

### Changed

- Updated stylelint-prettier to v1.0.1. [[#42](https://github.com/Shopify/stylelint-config-shopify/pull/42)]

## 7.0.0 - 2018-08-30

### Changed

- **Breaking:** Updated to eslint `v5.4.0`. Consuming projects must be using node [supported](https://eslint.org/docs/user-guide/migrating-to-5.0.0#-nodejs-4-is-no-longer-supported) versions, we recommend `^8.10.0`. See details on the v4 to v5 migration guide [here](https://eslint.org/docs/user-guide/migrating-to-5.0.0). [[#40](https://github.com/Shopify/stylelint-config-shopify/pull/40)]

### Added

- New rules:
  - [linebreaks](https://stylelint.io/user-guide/rules/linebreaks/)
  - [scss/no-dollar-variables](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-dollar-variables/README.md) (disabled)
  - [scss/no-duplicate-dollar-variables](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/no-duplicate-dollar-variables/README.md)

## 6.1.0 - 2018-08-07

- Update dependency: use stylelint-config-prettier v4.0.0. This is identical to v3.3.0 except it moves stylelint to be a peerDependency, which means there is less chance for installing multiple versions of stylelint.

## 6.0.0 - 2018-08-07

- Changed dependency: Use `stylelint-prettier` for prettier integration instead of `prettier-stylelint-formatter`. `stylelint-prettier` is a stylelint plugin that exposes prettier issues as stylelint rule violations. This means you can use `stylelint --fix` to fix formatting issues that prettier raises instead of having to use different executables for showing and autofixing issues.

Migration Suggestions:

- If `stylelint-config-shopify/prettier` is used, please remove `prettier-stylelint-formatter` and update any scripts that referenced it to use run `stylelint --fix '**/*.scss'` to autofix issues.

  ```
  yarn remove prettier-stylelint-formatter
  ```

## 5.1.2 - 2018-07-10

- Changed dependency: Pull the base prettier config from stylelint-config-prettier instead of prettier-stylelint-formatter. It is provided by the prettier organisation and is more up to date than the one provided by prettier-stylelint-formatter
- Increase stylelint minimum version to 9.1.1 so it aligns with the minumum required by stylelint-config-prettier

## 5.1.1 - 2018-07-10

- Added a new custom rule `shopify/content-no-strings` that disallows hard-coded strings as values for the `content` property. This prevents internationalization issues. Keywords are still allowed. The rule is not enabled by default.

The following patterns are considered violations:

```css
.foo::before {
  content: 'bar';
}
```

```css
.foo::before {
  content: open-quote 'Section' counter(section_counter) close-quote;
}
```

The following patterns are _not_ considered violations:

```css
.foo::before {
  content: '';
}
```

```css
.foo::before {
  content: open-quote counter(section_counter) close-quote;
}
```

## 5.1.0 - 2018-07-05

- Use 5.1.1 instead.

## 5.0.1 - 2018-04-06

- Updated dependency: stylelint-css (no breaking changes, only fixes)
- Updated devDependencies: eslint, eslint-plugin-shopify

## 5.0.0 - 2018-02-22

- Dropped support for Node `<8.9`
- Require stylelint `>=9.0` as a peerDependency for projects consuming this config [#25](https://github.com/Shopify/stylelint-config-shopify/pull/25) and [#27](https://github.com/Shopify/stylelint-config-shopify/pull/27))
- Updated dependencies

## 4.0.0 - 2017-11-17

- Replaces [`prettier-stylelint`](https://github.com/hugomrdias/prettier-stylelint) with a [forked](https://github.com/ismail-syed/prettier-stylelint-formatter) version addressing an [issue](https://github.com/hugomrdias/prettier-stylelint/issues/3) [#23](https://github.com/Shopify/stylelint-config-shopify/pull/23)

Migration Suggestions:

- If `stylelint-config-shopify/prettier` is used, please replace `prettier-stylelint` with `prettier-stylelint-formatter`.

  ```
  yarn remove prettier-stylelint && yarn add prettier-stylelint-formatter
  ```

## 3.0.2 - 2017-11-14

- `declaration-block-no-redundant-longhand-properties` now allows longhand `grid` properties, see [#21](https://github.com/Shopify/stylelint-config-shopify/pull/21)

## 3.0.1 - 2017-11-13

- Removed `position: fixed` from the property value blacklist, see [#18](https://github.com/Shopify/stylelint-config-shopify/pull/18)
- Allowed digits in class selector names (e.g. `.rotate180`), see [#17](https://github.com/Shopify/stylelint-config-shopify/pull/17)
- Enforce property grouping, see [#10](https://github.com/Shopify/stylelint-config-shopify/pull/10)
- Turn off `order/order` [#19](https://github.com/Shopify/stylelint-config-shopify/pull/19)

tl;dr:

- Put variables & custom properties at the top (unless anyone feels strongly about this)
- Then come weird props, positioning & box model properties
- All other properties come after
- No specific property order is enforced

The following patterns are _not_ considered warnings:

```scss
.Foo {
  $foo: 'foo';
  position: relative;
  display: block;
  margin: 10px;
  color: $foo;
}

.Foo {
  $foo: 'foo';
  position: relative;
  margin: 10px;
  display: block;
  color: $foo;
}
```

The following patterns are considered warnings:

```scss
.Foo {
  position: relative;
  display: block;
  $foo: 'foo';
  color: $foo;
}

.Foo {
  $foo: 'foo';
  color: $foo;
  position: relative;
  display: block;
}
```

## 2.1.0 - 2017-08-25

### Changed

- `media-feature-name-no-unknown` to ignore `prefers-reduced-motion`
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss) from `1.4.x` to `^2.0.1`
- Replaced deprecated `scss/at-mixin-no-argumentless-call-parentheses` rule with its equivalent `scss/at-mixin-argumentless-call-parentheses`
- Updated `eslint-plugin-shopify` to the latest version, and updated ESLint to the appropriate version

## 2.0.1 - 2017-07-28

### Changed

- Set `selector-max-type` to 1

## 2.0.0 - 2017-07-27

### Added

- New plugin:
  - Added `stylelint-order` which replaces `declaration-block-properties-order`
- New rules:
  - `rule-empty-line-before`
  - `selector-max-universal`
  - `at-rule-semicolon-space-before`
  - `selector-max-attribute`
  - `selector-max-class`
  - `selector-max-combinators`
  - `selector-max-id`
  - `selector-max-type`
  - `function-url-scheme-blacklist` (disabled)
  - `media-feature-name-whitelist` (disabled)
  - `time-min-milliseconds` (disabled)

### Removed

- Deprecated rules:
  - `block-no-single-line`
  - `no-indistinguishable-colors`
  - `declaration-block-no-ignored-properties`
  - `declaration-block-properties-order`
  - `function-url-data-uris`
  - `no-browser-hacks`
  - `no-unsupported-browser-features`
  - `media-feature-no-missing-punctuation`
  - `custom-property-no-outside-root`
  - `root-no-standard-properties`
  - `rule-nested-empty-line-before`
  - `rule-non-nested-empty-line-before`

### Changed

- Properties order for shorthand notation with margin, padding, border styles have been updated to follow:

```
property: <top> <right> <bottom> <left>
```

## 1.0.0 - 2017-05-29

- Initial release
