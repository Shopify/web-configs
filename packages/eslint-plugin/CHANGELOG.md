# Changelog

## 49.0.0

### Major Changes

- [#473](https://github.com/Shopify/web-configs/pull/473) [`9d51688`](https://github.com/Shopify/web-configs/commit/9d51688051d2efe7af73d24e177b942370857b43) Thanks [@BPScott](https://github.com/BPScott)! - Update minimum eslint version to v9.27.0.

  When updating, you must also update the version of eslint installed as a sibling of `@shopify/eslint-plugin` to be at least v9.27.0.

## 48.0.2

### Patch Changes

- [#468](https://github.com/Shopify/web-configs/pull/468) [`21bf8bb`](https://github.com/Shopify/web-configs/commit/21bf8bbb86d819df07893fbcd66eb1b8575eabe7) Thanks [@znja](https://github.com/znja)! - NPM provenance statements

## 48.0.0

### Major Changes

- [#465](https://github.com/Shopify/web-configs/pull/465) [`66fb520`](https://github.com/Shopify/web-configs/commit/66fb520e9b5e02a21a7a13528756ac78de7d01fe) Thanks [@PhilippeCollin](https://github.com/PhilippeCollin)! - Add no-context-menu eslint rule

## 47.0.1

### Patch Changes

- [#461](https://github.com/Shopify/web-configs/pull/461) [`b1b449c`](https://github.com/Shopify/web-configs/commit/b1b449c86acf8cd3578d47f5ff76b94ae4b20aaf) Thanks [@BPScott](https://github.com/BPScott)! - Add `@typescript-eslint/no-unused-expressions` to typescript ruleset

  In v46 in, we enabled `no-unused-expressions` in the core js config, then disabled it and replaced it with `@babel/no-unused-expressions` in esnext config. In typescript files we turn off `no-unused-expressions` but left `@babel/no-unused-expressions` enabled - which seems like an oversight given that `@typescript-eslint/no-unused-expressions` existed. In v47.0.0 we removed configuration of `@babel/no-unused-expressions` entirely, which meant that there was no linting of unused-expressions. This change brings back unused expression linting to typescript files.

## 47.0.0

### Major Changes

- [#444](https://github.com/Shopify/web-configs/pull/444) [`75fe8da`](https://github.com/Shopify/web-configs/commit/75fe8daf5479a00349c3048bae62d0131ec6a0e2) Thanks [@BPScott](https://github.com/BPScott)! - Replace `eslint-plugin-node` with `eslint-plugin-n`

- [#445](https://github.com/Shopify/web-configs/pull/445) [`f1e02bc`](https://github.com/Shopify/web-configs/commit/f1e02bc1d0d11517ebb9bc8bf6e8c519d7f3dce4) Thanks [@BPScott](https://github.com/BPScott)! - Update plugin dependencies

  - `eslint-plugin-import`: `^2.29.0`to `^2.31.0`
  - `eslint-plugin-jest`: `^28.5.0`to `^28.9.0`
  - `eslint-plugin-jsx-a11y`: `6.8.0` to `6.10.2`
  - `eslint-plugin-prettier`: `^5.1.3`to`^5.2.1`
  - `eslint-plugin-promise`: `^6.1.1`to`^7.2.1`
  - `eslint-plugin-react`: `^7.34.1`to`^7.37.2`
  - `eslint-plugin-react-hooks`: `^4.6.2`to`^5.1.0`
  - `eslint-plugin-sort-class-members`: `^1.20.0` to `^1.21.0`

- [#457](https://github.com/Shopify/web-configs/pull/457) [`ef24642`](https://github.com/Shopify/web-configs/commit/ef24642d5d221aaf1fd3852e4cc12b19ce9b6ce0) Thanks [@BPScott](https://github.com/BPScott)! - Update typescript-eslint from `^7.9.0` to `^8.18.0`. Replace usage of the `@typescript-eslint/eslint-plugin` and `@typescript-eslint/eslint-parser` packages with using the new `typescript-eslint` package. See migration information at https://typescript-eslint.io/blog/announcing-typescript-eslint-v8.

  The `@typescript-eslint/ban-types` rule has been removed and replaced with `@typescript-eslint/no-empty-object-type` and `@typescript-eslint/no-wrapper-object-types`. `@typescript-eslint/no-require-imports` is now enabled.

- [#455](https://github.com/Shopify/web-configs/pull/455) [`e347da8`](https://github.com/Shopify/web-configs/commit/e347da821d4fc26a5113763be3b5662bf8081e79) Thanks [@BPScott](https://github.com/BPScott)! - Remove configuration of deprecated formatting rules.

  Per https://eslint.org/blog/2023/10/deprecating-formatting-rules/ and https://typescript-eslint.io/blog/deprecating-formatting-rules several formatting related rules have been deprecated from `eslint` core and `typescript-eslint` and moved into `@stylistic/eslint-plugin`. These rules are removed in typescript-eslint v8 (released) and probably eslint v10 (unreleased).

  To prepare for future updates we are removing our configuration of these rules. We recommend that you use Prettier (https://prettier.io/) for formatting considerations - either by running it in parallel with ESLint or as part of ESLint through using `eslint-plugin-prettier` via the `prettier` config provided by `@shopify/eslint-plugin`. If you do not wish to use Prettier, then we suggest you configure rules from `@stylistic/eslint-plugin` (https://eslint.style/packages/default).

  Note that if you already use the `prettier` config then this removal will have no effect as all these rules were already turned off.

  Configuration for the following rules in the `es5`, `esnext` and `typescript` configs have been removed:

  From `typescript-eslint`:

  - @typescript-eslint/brace-style
  - @typescript-eslint/func-call-spacing
  - @typescript-eslint/indent
  - @typescript-eslint/keyword-spacing
  - @typescript-eslint/member-delimiter-style
  - @typescript-eslint/no-extra-parens
  - @typescript-eslint/quotes
  - @typescript-eslint/semi
  - @typescript-eslint/space-infix-ops
  - @typescript-eslint/type-annotation-spacing

  From ESLint core:

  - array-bracket-spacing
  - arrow-parens
  - arrow-spacing
  - block-spacing
  - brace-style
  - comma-dangle
  - comma-spacing
  - comma-style
  - computed-property-spacing
  - dot-location
  - eol-last
  - func-call-spacing
  - function-paren-newline
  - generator-star-spacing
  - indent-legacy
  - jsx-quotes
  - key-spacing
  - keyword-spacing
  - lines-around-comment
  - lines-between-class-members
  - max-statements-per-line
  - new-parens
  - newline-per-chained-call
  - no-confusing-arrow
  - no-extra-semi
  - no-floating-decimal
  - no-mixed-operators
  - no-mixed-spaces-and-tabs
  - no-multi-spaces
  - no-multiple-empty-lines
  - no-tabs
  - no-trailing-spaces
  - no-whitespace-before-property
  - object-curly-spacing
  - one-var-declaration-per-line
  - operator-linebreak
  - padding-line-between-statements
  - quote-props
  - quotes
  - rest-spread-spacing
  - semi
  - semi-spacing
  - semi-style
  - space-before-blocks
  - space-before-function-paren
  - space-in-parens
  - space-infix-ops
  - space-unary-ops
  - spaced-comment
  - switch-colon-spacing
  - template-curly-spacing
  - template-tag-spacing
  - wrap-iife
  - yield-star-spacing

  We retain configuration for the following rules for the moment - even though they are depreated - as prettier does not have opinions about whitespace in these cases:

  - lines-between-class-members
  - padding-line-between-statements
  - spaced-comment

- [#450](https://github.com/Shopify/web-configs/pull/450) [`9c5e826`](https://github.com/Shopify/web-configs/commit/9c5e8263672d4c241cdea58e9c688094ecd8475f) Thanks [@BPScott](https://github.com/BPScott)! - Remove Babel parser and plugin.

  The Babel plugin and parser are only useful when authoring JavaScript that uses syntax that has not yet reached stage 4 of the standardisation process.

  We do not wish to encourage the usage of non-standard syntax in `.js` files as a default supported behaviour.

  If you wish to continue to use non-standard syntax in `.js` files then you should add and configure `@babel/eslint-parser` and `@babel/eslint-plugin` yourself.

  - ESLint v8's `semi` and `no-invalid-this` rules provide the behaviour that `@babel/semi`, `@babel/no-invalid-this` were introduced to solve, and thus the babel versions of these rules are no longer requried.
  - `@babel/new-cap` exists to handle the non-standard decorator syntax.
  - `@babel/object-curly-spacing` exists to handle non-standard `export x from "mod"` syntax.
  - `@babel/no-unused-expressions` exists to handle non-standard "do expressions".

  Remove all mentions of `@babel/*` rules in your eslint config unless you configure the babel plugin yourself.

### Minor Changes

- [#460](https://github.com/Shopify/web-configs/pull/460) [`108c1cd`](https://github.com/Shopify/web-configs/commit/108c1cd91e96652577da6c6f738be78a8e27026c) Thanks [@BPScott](https://github.com/BPScott)! - Fix false positives for `prefer-module-scope-constants` rule in `*.cjs` files

- [#453](https://github.com/Shopify/web-configs/pull/453) [`a38a7ea`](https://github.com/Shopify/web-configs/commit/a38a7ea004bd83481bef4c8df683ecb5222bf8a8) Thanks [@BPScott](https://github.com/BPScott)! - Replace usage of deprecated `superTypeParameters` with `superTypeArguments`

- [#451](https://github.com/Shopify/web-configs/pull/451) [`8606071`](https://github.com/Shopify/web-configs/commit/860607150911ba57bedcbc16a0e52e909b049934) Thanks [@BPScott](https://github.com/BPScott)! - Use the "latest" ecmaVersion when parsing

- [#454](https://github.com/Shopify/web-configs/pull/454) [`4cfd24c`](https://github.com/Shopify/web-configs/commit/4cfd24cc01929af243b99d1011d6e808a53d7999) Thanks [@BPScott](https://github.com/BPScott)! - Stop disabling rules that existed because we used their babel counterparts

- [#442](https://github.com/Shopify/web-configs/pull/442) [`9931668`](https://github.com/Shopify/web-configs/commit/9931668a48147e8e4b7388ba62b5848a131f1c7d) Thanks [@BPScott](https://github.com/BPScott)! - Replace usage of deprecated APIs that will be removed in ESLint v9

## 46.0.0

### Major Changes

- [#433](https://github.com/Shopify/web-configs/pull/433) [`f09362b`](https://github.com/Shopify/web-configs/commit/f09362b9c7dcb84f1366fb6e1e7f252ffcbf72e1) Thanks [@ryanwilsonperkin](https://github.com/ryanwilsonperkin)! - Switching to Eslint flat config format for v9

## 45.0.0

### Major Changes

- [#420](https://github.com/Shopify/web-configs/pull/420) [`32e249f`](https://github.com/Shopify/web-configs/commit/32e249fa6688ae4053eaac1b8f1a524ebad555e8) Thanks [@BPScott](https://github.com/BPScott)! - Update required eslint version to `^8.56.0` as required by the newest version of `@typescript-eslint/eslint-plugin`.

  Update required node version to `18.20.0` as required by the newest version of `@typescript-eslint/eslint-plugin`.

  The `jest/no-if` rule has been removed and replaced with `jest/no-conditional-in-test`.

  The `unicode-bom` rule is no longer turned off if you enable the prettier ruleset per `eslint-config-prettier`, prettier preserves the bom value if it is present and does not add one if missing.

  Update eslint plugins to new versions:

  - `@typescript-eslint/eslint-plugin`: `^6.2.1` -> `^7.9.0` **MAJOR**
  - `eslint-config-prettier`: `^8.10.0` -> `^9.1.0` **MAJOR**
  - `eslint-plugin-jest`: `^27.2.3` => `^28.5.0` **MAJOR**
  - `eslint-plugin-jsx-ally`: `^6.7.1` => `^6.8.0`
  - `eslint-plugin-prettier`: `^5.0.0` => `^5.1.3`
  - `eslint-plugin-react`: `^7.33.1` => `^7.34.1`
  - `eslint-plugin-react-hooks`: `^4.6.0` => `^4.6.2`
  - `eslint-plugin-sort-class-members`: `^1.18.0` => `^1.20.0`

  See package changelogs for breaking change information:

  - [`@typescript-eslint/eslint-plugin` breaking changes](https://typescript-eslint.io/blog/announcing-typescript-eslint-v7/)
  - [`@eslint-plugin-jest` breaking changes](https://github.com/jest-community/eslint-plugin-jest/releases/tag/v28.0.0)
  - [`eslint-config-prettier` breaking changes](https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-900-2023-08-05)

## 44.0.0

### Major Changes

- [#409](https://github.com/Shopify/web-configs/pull/409) [`4fd9e99`](https://github.com/Shopify/web-configs/commit/4fd9e991d2d94252210890c8f6af06902099cac4) Thanks [@jas7457](https://github.com/jas7457)! - Change the @typescript-eslint/consistent-indexed-object-style rule to use default error settings, aka Record over index signature

## 43.0.0

### Major Changes

- [#397](https://github.com/Shopify/web-configs/pull/397) [`3895e25`](https://github.com/Shopify/web-configs/commit/3895e25e62939d67082bb24dac3bd4604908b80e) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - Upgrade eslint plugins to support prettier `3.x`. Drop support for prettier `2.x`.

- [#399](https://github.com/Shopify/web-configs/pull/399) [`b602765`](https://github.com/Shopify/web-configs/commit/b6027656af2898b054077be81bc419863a437346) Thanks [@m4thieulavoie](https://github.com/m4thieulavoie)! - upgrade @typescript-eslint and eslint plugins and drop support for node 14

## 42.1.0

### Minor Changes

- [#371](https://github.com/Shopify/web-configs/pull/371) [`3e31042`](https://github.com/Shopify/web-configs/commit/3e310423bdc8cf130ec6c6a3992193e52de3b387) Thanks [@laurkim](https://github.com/laurkim)! - Updated component URLs for polaris.shopify.com and updated `polaris-no-bare-stack-item` to support `LegacyStack` and `polaris-prefer-sectioned-prop` to support `LegacyCard`'

## 42.0.3

### Patch Changes

- [#356](https://github.com/Shopify/web-configs/pull/356) [`0b52b9e`](https://github.com/Shopify/web-configs/commit/0b52b9eb87e1e847f7408b9fb2a61b5beaefbb5c) Thanks [@marvinhagemeister](https://github.com/marvinhagemeister)! - Speedup polaris linting rules by about 12% via caching already resolved files.

## 42.0.2

### Patch Changes

- [#350](https://github.com/Shopify/web-configs/pull/350) [`06e1245`](https://github.com/Shopify/web-configs/commit/06e1245e4e55e9d01bb20c66ec57cadd94252873) Thanks [@marvinhagemeister](https://github.com/marvinhagemeister)! - Update the `eslint-plugin-import` to the latest version which contains significant performance improvements for module resolution.

## 42.0.1

### Patch Changes

- [#341](https://github.com/Shopify/web-configs/pull/341) [`8cbfc69`](https://github.com/Shopify/web-configs/commit/8cbfc695d60956e2a702aa1434deae3ace62f63e) Thanks [@BPScott](https://github.com/BPScott)! - Update `eslint-plugin-prettier` to `v4.1.0`, to automatically skip trying to run prettier over graphql files. Remove the explicit override for disabling prettier in graphql files, as it will cause eslint's "work out what extensions need linting" logic to try to parse graphql files. Add `{overrides: {files: ['*.graphql', '*.gql'], rules: {'prettier/prettier': 'off'}}}` to your eslint config if want to disable running the prettier rule over graphql files entirely.

## 42.0.0

### Major Changes

- [#340](https://github.com/Shopify/web-configs/pull/340) [`af6fccc`](https://github.com/Shopify/web-configs/commit/af6fccc7457dd1eca2755e2d1f35cd81f4ff2f30) Thanks [@BPScott](https://github.com/BPScott)! - Remove the `@shopify/eslint-plugin/graphql` config and the dependency on `eslint-plugin-graphql` as it is outdated and unsupported. If you used the graphql config then you should migrate to [`@graphql-eslint/eslint-plugin`](https://www.npmjs.com/package/@graphql-eslint/eslint-plugin). We no longer provide recommended graphql config as it has a large install footprint and we do not want to push that onto consumers that do not use graphql.

### Patch Changes

- [#338](https://github.com/Shopify/web-configs/pull/338) [`d8c61cc`](https://github.com/Shopify/web-configs/commit/d8c61cc4dac9bc33058b3069c9b8070fdb370e12) Thanks [@BPScott](https://github.com/BPScott)! - Remove a layer of indirection by specifying rules in `lib/config/*.js` files instead of having them import content from `lib/config/rules/*.js`

## 41.3.1

### Patch Changes

- [#334](https://github.com/Shopify/web-configs/pull/334) [`9f159d4`](https://github.com/Shopify/web-configs/commit/9f159d44562cb80560bba4fac90cdf8fb59daa33) Thanks [@BPScott](https://github.com/BPScott)! - Update package descriptions. No code changes.

## 41.3.0 - 2022-05-30

### Changed

- Update `eslint-plugin-react` dependency to `^7.30.0`. Fix breakages by no longer reaching into `eslint-plugin-react`'s internals. [[#332](https://github.com/Shopify/web-configs/pull/332)]

## 41.2.1 - 2022-04-04

### Changed

- Allow usage of `q` variable in `id-length` rule [[#329](https://github.com/Shopify/web-configs/pull/329)]

## 41.2.0 - 2022-03-07

### Changed

- Fixed conflicting dependency on `eslint` by upgrading `eslint-plugin-promise` to `6.0.0`. [[#325](https://github.com/Shopify/web-configs/pull/325)]

## 41.1.0 - 2022-02-01

### Changed

- Removed `lines-around-comment` rule, let prettier handle formatting of comments. [[#319](https://github.com/Shopify/web-configs/pull/319)]

## 41.0.1 - 2021-12-02

### Changed

- Set [`requireConfigFile: false`](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser#additional-parser-configuration) so that js files can be parsed using `@babel/eslint-parser` in projects that lack a babel config file. [[#310](https://github.com/Shopify/web-configs/pull/310)]

## 41.0.0 - 2021-12-01

### Breaking Change

- Updated peer dependency on `eslint` to require at least v8.3.0. [[#305](https://github.com/Shopify/web-configs/pull/305)]
- Replaced usage of the long-deprecated `babel-eslint` and `eslint-plugin-babel` with `@babel/eslint-parser` and `@babel/eslint-plugin`. [[#305](https://github.com/Shopify/web-configs/pull/305)]
- Updated the minimum version of several eslint plugins. [[#305](https://github.com/Shopify/web-configs/pull/305)]

| Package                            | Old version | New version |
| ---------------------------------- | ----------- | ----------- |
| `typescript-eslint/eslint-plugin`  | `^4.28.2`   | `^5.4.0`    |
| `typescript-eslint/parser`         | `^4.28.2`   | `^5.4.0`    |
| `eslint-plugin-import`             | `^2.23.4`   | `^2.25.3`   |
| `eslint-plugin-jest`               | `^24.3.6`   | `^25.3.0`   |
| `eslint-plugin-jest-formatting`    | `^3.0.0`    | `^3.1.0`    |
| `eslint-plugin-jsx-a11y`           | `^6.4.1`    | `^6.5.0`    |
| `eslint-plugin-prettier`           | `^3.4.0`    | `^4.0.0`    |
| `eslint-plugin-promise`            | `^5.1.0`    | `^5.1.1`    |
| `eslint-plugin-react`              | `^7.24.0`   | `^7.27.1`   |
| `eslint-plugin-react-hooks`        | `^4.2.0`    | `^4.3.0`    |
| `eslint-plugin-sort-class-members` | `^1.11.0`   | `^1.14.0`   |

### Changed

- Update env and ecmaVersion to '2021' in `esnext` and`typescript` presets to support modern language features. [[#296](https://github.com/Shopify/web-configs/pull/296), [#304](https://github.com/Shopify/web-configs/pull/304)]
- Remove configuring `parserOptions` from the `jest` preset as this handled by the the es5/esnext/typescript presets. [[#304](https://github.com/Shopify/web-configs/pull/304)]
- Removed dependency on `merge` by replacing usage with object spread. [[#308](https://github.com/Shopify/web-configs/pull/308)]

## 40.5.0 - 2021-11-18

### Changed

- Loosen semver restrictions on `eslint` plugins. [[#297](https://github.com/Shopify/web-configs/pull/297)]

## 40.4.0 - 2021-07-12

### Changed

- Update `eslint` and plugin dependencies. [[#272](https://github.com/Shopify/web-configs/pull/272)]

## 40.3.0 - 2021-06-30

### Changed

- Removed `jsx-a11y/autocomplete-valid` rule for `eslint-plugin`. [[#264](https://github.com/Shopify/web-configs/pull/264)]
- Add `react-require-autocomplete` lint rule to `@shopify/eslint-plugin`. [[#251](https://github.com/Shopify/web-configs/pull/251)]

## 40.2.3 - 2021-05-10

### Changed

- Fix conflicting `@typescript-eslint/naming-convention` rules. [[#247](https://github.com/Shopify/web-configs/pull/247)]

## 40.2.2 - 2021-05-05

### Changed

- Update `merge` to `2.1.1`. [[#244](https://github.com/Shopify/web-configs/pull/244)]

## 40.2.1 - 2021-04-16

### Changed

- Fixed a conflict between Prettier and rules `*/object-curly-spacing`. [[#227](https://github.com/Shopify/web-configs/pull/227)]

## 40.2.0 - 2021-04-16

### Changed

- Added `jsx-a11y/autocomplete-valid` rule for `eslint-plugin`. [[#217](https://github.com/Shopify/web-configs/pull/218)]
- Updated `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to version `4.20.0`. [[#223](https://github.com/Shopify/web-foundation/pull/223)]

## 40.1.0 - 2021-02-24

### Changed

- Include jest formatting in `@shopify/eslint-plugin` ruleset. [[#213](https://github.com/Shopify/web-configs/pull/213)]

## 40.0.1 - 2021-02-12

### Changed

- Fix incompatibility between `@typescript-eslint/array-type` and `@typescript-eslint/ban-types`. [[#212](https://github.com/Shopify/web-configs/pull/212)]

## 40.0.0 - 2021-02-12

### Changed

- Updated `eslint-plugin` test to prepare for `eslint@7` upgrade. [[#211](https://github.com/Shopify/web-configs/pull/211)]

### Breaking Change

- Updated `eslint-plugin` plugins and removed support for `eslint@6`. [[#194](https://github.com/Shopify/web-foundation/pull/194)]

| Package                            | Old version | New version |
| ---------------------------------- | ----------- | ----------- |
| `eslint-config-prettier`           | `6.14.0`    | `7.2.0`     |
| `eslint-plugin-jest-formatting`    | `2.0.0`     | `2.0.1`     |
| `eslint-plugin-promise`            | `4.2.1`     | `4.3.1`     |
| `eslint-plugin-jest`               | `24.1.0`    | `24.1.3`    |
| `eslint-plugin-react`              | `7.21.5`    | `7.22.0`    |
| `eslint-plugin-sort-class-members` | `1.8.0`     | `1.9.0`     |
| `@typescript-eslint/eslint-plugin` | `4.1.0`     | `4.15.0`    |
| `@typescript-eslint/parser`        | `4.1.0`     | `4.15.0`    |
| `change-case`                      | `4.1.0`     | `4.1.2`     |

## 39.0.4 - 2021-01-13

### Changed

- Updated TypeScript naming rules to ensure type name start with a "T" and interface names don't start with an "I". [[#198](https://github.com/Shopify/web-configs/pull/198)]
- Updated `eslint-config-prettier` dependency to v3.3.0. [[#202](https://github.com/Shopify/web-configs/pull/202)]

## 39.0.3 - 2020-11-17

### Fixed

- Fixed a syntax error in `peerDependencies` to allow eslint@^7.0.0. [[#196](https://github.com/Shopify/web-configs/pull/196)]

## 39.0.2 - 2020-11-03

### Fixed

- Add support for CommonJS in `prefer-module-scope-constants`. [[#195](https://github.com/Shopify/web-configs/pull/195)]

### Changed

- Updated `eslint-plugin` plugins. [[#194](https://github.com/Shopify/web-foundation/pull/194)]

| Package                     | Old version | New version |
| --------------------------- | ----------- | ----------- |
| `eslint-config-prettier`    | `6.11.0`    | `6.14.0`    |
| `eslint-plugin-jsx-a11y`    | `6.3.1`     | `6.4.1`     |
| `eslint-plugin-import`      | `2.22.0`    | `2.22.1`    |
| `eslint-plugin-jest`        | `24.0.0`    | `24.1.0`    |
| `eslint-plugin-react`       | `7.20.6`    | `7.21.5`    |
| `eslint-plugin-react-hooks` | `4.1.1`     | `4.1.2`     |

## 39.0.0 - 2020-09-17

### Breaking Change

- Added `id` field to `graphql/required-fields` rule. [[#166](https://github.com/Shopify/web-foundation/pull/166)]

#### Updated Plugins

| Package                            | Old version | New version |
| ---------------------------------- | ----------- | ----------- |
| `@typescript-eslint/eslint-plugin` | `3.9.1`     | `4.1.0`     |
| `@typescript-eslint/parser`        | `3.9.1`     | `4.1.0`     |
| `eslint-plugin-babel`              | `5.3.0`     | `5.3.1`     |
| `eslint-plugin-eslint-comments`    | `3.1.2`     | `3.2.0`     |
| `eslint-plugin-graphql`            | `3.1.1`     | `4.0.0`     |
| `eslint-plugin-jest`               | `23.13.0`   | `24.0.0`    |
| `eslint-plugin-jsx-a11y`           | `6.2.3`     | `6.3.1`     |
| `eslint-plugin-node`               | `3.1.3`     | `3.1.4`     |
| `eslint-plugin-react`              | `7.20.0`    | `7.20.6`    |
| `eslint-plugin-react-hooks`        | `4.0.2`     | `4.1.1`     |
| `eslint-plugin-sort-class-members` | `1.7.0`     | `1.8.0`     |

## 38.0.0

### Added

- Created a new rule, `@shopify/typescript/prefer-build-client-schema`. [[#176](https://github.com/Shopify/web-foundation/pull/176)]

### Breaking Change

- Dropping `eslint-plugin-typescript` and upgrading `@typescript-eslint/eslint-plugin` from `2.33.0` to `3.9.1`. The update brings breaking changes from [the version 3 release of `@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v3.0.0).

- Removal of `@typescript-eslint/class-name-casing` and `@typescript-eslint/camelcase` for `@typescript-eslint/naming-convention`. Please update your ignore statements.

- Removal of `@typescript-eslint/ban-ts-ignore` for `@typescript-eslint/ban-ts-comment`. Please update your ignore statements.

## 37.0.0 - 2020-05-19

### Added

The following new rules were introduced. More information can be found. [[#157](https://github.com/Shopify/web-foundation/pull/157)]

- [`react/jsx-no-script-url`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md)

Facebook improved the `eslint-plugin-react-hooks` plugin. We may have to update the dependencies of some hooks.

#### Updated Plugins

| Package                            | Old version | New version |
| ---------------------------------- | ----------- | ----------- |
| `@typescript-eslint/eslint-plugin` | `2.25.0`    | `2.33.0`    |
| `@typescript-eslint/parser`        | `2.25.0`    | `2.33.0`    |
| `babel-eslint`                     | `10.0.3`    | `10.1.0`    |
| `change-case`                      | `4.0.1`     | `4.1.1`     |
| `eslint-config-prettier`           | `6.7.0`     | `6.11.0`    |
| `eslint-module-utils`              | `2.5.0`     | `2.6.0`     |
| `eslint-plugin-graphql`            | `3.1.0`     | `3.1.1`     |
| `eslint-plugin-import`             | `2.19.1`    | `2.20.2`    |
| `eslint-plugin-jest`               | `23.7.0`    | `23.13.0`   |
| `eslint-plugin-node`               | `10.0.0`    | `11.1.0`    |
| `eslint-plugin-prettier`           | `3.1.2`     | `3.1.3`     |
| `eslint-plugin-react`              | `7.17.0`    | `7.20.0`    |
| `eslint-plugin-react-hooks`        | `2.3.0`     | `4.0.2`     |
| `eslint-plugin-sort-class-members` | `1.6.0`     | `1.7.0`     |
| `merge`                            | `1.2.1`     | `1.2.1`     |
| `pkg-dir`                          | `4.2.0`     | `4.2.0`     |

## 36.1.0 - 2020-05-05

- adding `allow` and `maxDepth` options to `strict-component-boundaries` rule. [[#150](https://github.com/Shopify/web-foundation/pull/150)]

## 36.0.1 - 2020-03-28

- Fix an bug with '@shopify/react-no-multiple-render-methods'.

## 36.0.0 - 2020-03-28

### Breaking Change

🚨Package rename

This package has been renamed from `eslint-plugin-shopify` to `@shopify/eslint-plugin`. You must update you eslint config to account for the new name, when referencing the plugin and individual rules.

Before:

```
plugins: ['shopify'],
extends: ['plugin:shopify/'],
rules: {
  'shopify/...': 'off',
}
```

After:

```
plugins: ['@shopify'],
extends: ['plugin:@shopify/...'],
rules: {
  '@shopify/...': 'off',
}
```

## 35.1.0 - 2020-03-23

- Update `@typescript-eslint/eslint-plugin` and `@typescript-eslint/parser` to 2.25.0, to support new syntax introduced in Typescript 3.8. [[#523](https://github.com/Shopify/eslint-plugin-shopify/pull/523)]

## 35.0.0 - 2020-02-14

- remove `no-vague-titles` because the rule was adopted into `eslint-plugin-jest`'s `valid-title` rule. See [the `valid-title` documentation](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md#disallowedwords)
- Fixed an issue with `typescript/prefer-pascal-case-enum` when you had enum with key as string. [[#517](https://github.com/Shopify/eslint-plugin-shopify/pull/517)]

## 34.0.1 - 2019-01-13

- fix enabled graphql rules by specifying `env: 'literal'`. [[#514](https://github.com/Shopify/eslint-plugin-shopify/pull/518)]

## 34.0.0 - 2019-01-13

- changed `no-vague-titles` rule to catch blacklisted **words** (instead of **sequences**) in the title. [[#514](https://github.com/Shopify/eslint-plugin-shopify/pull/514)]
- removed `jest/no-empty-title` and renamed `jest/require-tothrow-message` to `jest/require-to-throw-message`. [[#499](https://github.com/Shopify/eslint-plugin-shopify/pull/499)]

### Added

The followiing new rules were introduced in `eslint@6.7.0`. More information can be found on the [eslint blog](https://eslint.org/blog/2019/11/eslint-v6.7.0-released).

- [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)
- [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)
- [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if)
- [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)
- [`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator)

## 33.0.0 - 2019-11-20

### Breaking Change

- The `graphql` configs have been pushed to an `override` for files matching a `.graphql` extension. This will allow this config to chain together with other parser-setting configs without changing the parser value. Consider the following config:

```
// .eslintrc
{
  extends: [
    "plugin:shopify/typescript",
    "plugin:shopify/graphql"
  ]
}
```

**Before this change** the final parser becomes `babel-eslint` for all files. This will cause errors when parsing TypeScript files even though we are extending the typescript config :( You could workaround this by moving the `plugin:shopify/graphql` first in the extends array or lint GraphQL files in a seperate script.

**After this change** Final parser is `babel-eslint` for only `.graphql` files while `@typescript-eslint/parser` is set for all `.ts` and `.tsx` files. This should not cause any parser-related errors :)

### Added

- `shopify/no-all-mocks-methods`. [[#204](https://github.com/Shopify/eslint-plugin-shopify/pull/204)]
- `shopify/no-namespace-imports` Prevent namespace import declarations. [[#262](https://github.com/Shopify/eslint-plugin-shopify/pull/262)]

## 32.0.0 - 2019-11-05

- `jest/valid-title`
- `jest/prefer-hooks-on-top`
- `jest/require-top-level-describe`
- Enforce new-lines between groups import groups. [[#409](https://github.com/Shopify/eslint-plugin-shopify/pull/409)]

## 31.0.0 - 2019-10-23

### Breaking Change

- **Breaking Change** Updated from `eslint-plugin-typescript` to `@typescript-eslint/eslint-plugin`. If you have any rules defined under the typescript namespace, you will need to change those to use the new `@typescript-eslint` namespace.

For example:

```json
"rules": {
  "typescript/restrict-plus-operands": "error"
}
```

Will become:

```json
"rules": {
  "@typescript-eslint/restrict-plus-operands": "error"
}
```

- **Breaking Change** The `plugin:shopify/react` is no longer a core config and must augment one of the `plugin:shopify/typescript` or `plugin:shopify/esnext` configs. See examples below

_Example config for react without typescript projects:_

```json
{
  "extends": [
    "plugin:shopify/esnext",
    "plugin:shopify/react"
    // ...other configs
  ]
}
```

_Example config for react with typescript projects:_

```json
{
  "extends": [
    "plugin:shopify/typescript",
    "plugin:shopify/react"
    // ...other configs
  ]
}
```

- **Note** If using the `plugin:shopify/typescript-type-checking` augmented config, you must specify a path to your tsconfig.json file in the "project" property of "parserOptions"

### Added

- `jest/no-standalone-expect` Prevents `expect` statements outside of a `test` or `it` block. [[#368](https://github.com/Shopify/eslint-plugin-shopify/pull/368)]
- `jest/no-expect-resolves` Avoid using `expect().resolves`. [[#370](https://github.com/Shopify/eslint-plugin-shopify/pull/370)]

## 30.0.1 - 2019-06-24

- bump eslint peer depndency to 6

## 30.0.0 - 2019-06-24

### Changed

- Enabled `jest/no-export` rule. [[#344](https://github.com/Shopify/eslint-plugin-shopify/pull/344)]
- [Major] depreciated `shopify/jest/no-try-expect` in favour of [`jest/no-try-expect`](https://github.com/jest-community/eslint-plugin-jest/pull/). [[#331](https://github.com/jest-community/eslint-plugin-jest/pull/331)]
- [Major] depreciated `shopify/jest/no-if` in favour of [`jest/no-if`](https://github.com/jest-community/eslint-plugin-jest/pull/293). [[#347](https://github.com/Shopify/eslint-plugin-shopify/pull/347)]
- [Major] Updated to eslint v6, enabled `no-console` and enabled `no-async-promise-executor`. [[#330](https://github.com/Shopify/eslint-plugin-shopify/pull/330)]
- Enabled `typescript/interface-name-prefix` to prevent `I` prefixes in TypeScript interface names
- Enabled `jest/no-duplicate-hooks` rule. [[#344](https://github.com/Shopify/eslint-plugin-shopify/pull/344)]

### Fixed

- [Patch] Fix `jest/no-if` from falsely reporting if statements inside of functions. [[#331](https://github.com/Shopify/eslint-plugin-shopify/pull/331)]

## 29.0.2 - 2019-06-18

### Changed

- Removed `react/prop-types` in typescript config. [[#309](https://github.com/Shopify/eslint-plugin-shopify/pull/309)]

## 29.0.1 - 2019-06-18

### Changed

- Removed `import/no-namespace`. [[#308](https://github.com/Shopify/eslint-plugin-shopify/pull/308)]

## 29.0.0 - 2019-06-17

### Changed

- added "necessary" to `shopify/jest/no-vague-titles`. [[#265](https://github.com/Shopify/eslint-plugin-shopify/pull/265)]
- `shopify/jest/no-if` now recognizes conditional statements. [[#298](https://github.com/Shopify/eslint-plugin-shopify/pull/298)]

### Added

- New Rules:
  - `jest/no-commented-out-tests` disallows commented out tests. [[#275](https://github.com/Shopify/eslint-plugin-shopify/pull/275)]
  - `jest/no-try-expect` disallows `expect` calls in `catch` blocks. [[#300](https://github.com/Shopify/eslint-plugin-shopify/pull/300)]
  - `node/prefer-promises/dns` and `node/prefer-promises/fs` These rules disallow the callback API in favor of promise API for the dns and fs modules. [[#257](https://github.com/Shopify/eslint-plugin-shopify/pull/257)]
  - `jest/no-mocks-import` This rule disallows manually importing from `__mocks__`. [[#246](https://github.com/Shopify/eslint-plugin-shopify/pull/246)]
  - `react/state-in-constructor` Enforce state initialization to be in a class property. [[#256](https://github.com/Shopify/eslint-plugin-shopify/pull/246)]
  - `import/no-namespace` Prevents namespace imports. [[#305](https://github.com/Shopify/eslint-plugin-shopify/pull/305)]

### Fixed

- `shopify/jest/no-if` ignores if statements nested within block statements. [[#299](https://github.com/Shopify/eslint-plugin-shopify/pull/299)]
- `react-prefer-private-members` from incorrectly reporting the members of a parent class if a React class is defined within its constructor. [[#258](https://github.com/Shopify/eslint-plugin-shopify/pull/258)]

## 28.0.0 - 2019-04-26

### Changed

- Reverted a previous update from `eslint-plugin-typescript` to `@typescript-eslint/eslint-plugin`. If you have any rules defined under the `@typescript-eslint` namespace, you will need to change those to use the older `typescript` namespace.

  For example:

  ```json
  "rules": {
    "@typescript-eslint/restrict-plus-operands": "error"
  }
  ```

  Will become:

  ```json
  "rules": {
    "typescript/restrict-plus-operands": "error"
  }
  ```

**Note:** This is a temporary work-around to resolve a bug in prettier-eslint and will attempt the typescript updates again when resolved.

### Fixed

- `shopify/restrict-full-import` "empty" array pattern (eg: `const [, bar] = foo` errors. [[#243](https://github.com/Shopify/eslint-plugin-shopify/pull/243)]
- Optimized `shopify/images/no-direct-imports` to be much faster in the common case. [[#247](https://github.com/Shopify/eslint-plugin-shopify/pull/247)]
- `shopify/react-hooks-strict-return` from crashing when a hook returns undefined. [[#251](https://github.com/Shopify/eslint-plugin-shopify/pull/251)]

### Added

- updated `eslint-plugin-import` to version `22.4.1` which introduces the [`no-unused-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md) rule.
- updated `eslint-plugin-jest` to version `22.4.1` which introduces the [`no-empty-title`](https://github.com/jest-community/eslint-plugin-jest/commit/c793b7a) rule.
- `shopify/react-hooks-strict-return` Restrict the number of returned items from React hooks. [[#237](https://github.com/Shopify/eslint-plugin-shopify/pull/237)]

### Removed

- turned off `node/no-extraneous-require` because it duplicates reported violations from `import/no-extraneous-dependencies`. [[#240](https://github.com/Shopify/eslint-plugin-shopify/pull/240)]

## 27.0.1 - 2019-04-10

### Changed

- `shopify/jest/no-if` no longer considers if statements in describe blocks as invalid. [[#235](https://github.com/Shopify/eslint-plugin-shopify/pull/235)]

### Removed

- turned off `consistent-return`. [[#236](https://github.com/Shopify/eslint-plugin-shopify/pull/236)]
- turned off `react/jsx-no-bind`. [[#239](https://github.com/Shopify/eslint-plugin-shopify/pull/239)]
- turned off `babel/camelcase` in typescript config because it overlaps with `@typescript-eslint/camelcase`. [[#238](https://github.com/Shopify/eslint-plugin-shopify/pull/238)]
- `shopify/jest/no-if` no longer considers if statements in describe blocks as invalid. [[#235](https://github.com/Shopify/eslint-plugin-shopify/pull/235)]

## 27.0.0 - 2019-04-08

### Added

#### Plugin updates and additions. [[#233](https://github.com/Shopify/eslint-plugin-shopify/pull/233)]

#### Breaking Changes

- `shopify/jquery-dollar-sign-reference` has been removed.
- The `eslint-comments` ruleset has been removed and is now enabled by default as part of core - if you're using `es5`, `esnext`, `react` or `typescript` then you can remove the reference to `eslint-comments`.
- The `ava`, `mocha`, `jquery` and `lodash` rulesets have been removed as these tools are are not commonly used at Shopify.
- The `typescript-react` and `typescript-prettier` rulesets have been removed. Replace `["plugin:shopify/typescript-react"]` with `["plugin:shopify/typescript", "plugin:shopify/react"]` and replace`["plugin:shopify/typescript-prettier"]` with `["plugin:shopify/prettier"]`
- Updated from `eslint-plugin-typescript` to `@typescript-eslint/eslint-plugin`. If you have any rules defined under the `typescript` namespace, you will need to change those to use the new `@typescript-eslint` namespace.

  For example:

  ```json
  "rules": {
    "typescript/restrict-plus-operands": "error"
  }
  ```

  Will become:

  ```json
  "rules": {
    "@typescript-eslint/restrict-plus-operands": "error"
  }
  ```

  More information on this change can be found [in this eslint blog post](https://eslint.org/blog/2019/01/future-typescript-eslint]).

#### Added

- `shopify/jest/no-if`. [[#232](https://github.com/Shopify/eslint-plugin-shopify/pull/232)]

Refer to the [Rules of Hooks documentation](https://reactjs.org/docs/hooks-rules.html) to learn more about the following rules.

- `'react-hooks/rules-of-hooks': 'error'` // Only use Hooks at the top level of a React functional component or from within another custom hook.
- `'react-hooks/exhaustive-deps': 'error'` // Checks for missing useEffect dependencies

#### Updated Plugins

| Package                            | Old version | New version |
| ---------------------------------- | ----------- | ----------- |
| `eslint-plugin-sort-class-members` | `1.3.1`     | `1.4.0`     |
| `eslint-plugin-promise`            | `4.0.0`     | `4.0.1`     |
| `eslint-plugin-node`               | `7.0.1`     | `8.0.1`     |
| `eslint-plugin-jsx-a11y`           | `6.1.1"`    | `6.2.1`     |
| `eslint-plugin-jest`               | `21.22.0`   | `21.23.0`   |
| `eslint-plugin-import`             | `2.14.0`    | `2.16.0`    |
| `eslint-plugin-graphql`            | `2.1.0-0`   | `3.0.3`     |
| `eslint-plugin-eslint-comments`    | `3.0.1`     | `3.1.1`     |
| `eslint-plugin-babel`              | `5.1.0`     | `5.3.0`     |
| `eslint-plugin-utils`              | `2.1.0`     | `2.3.0`     |

#### Added Plugins

| Package                          | Version |
| -------------------------------- | ------- |
| eslint-plugin-react-hooks        | 1.5.0   |
| @typescript-eslint/eslint-plugin | 1.5.0   |
| "@typescript-eslint/parser       | 1.5.0   |
| babel-eslint                     | 10.0.1  |

#### Removed Plugins

| Package                   |
| ------------------------- |
| eslint-plugin-mocha       |
| eslint-plugin-ava         |
| eslint-plugin-flowtype    |
| eslint-plugin-chai-expect |
| eslint-plugin-lodash      |
| eslint-plugin-jquery      |

### Changed

- `jest/no-vague-titles` added `every` and `descriptive` as vague words. [[#221](https://github.com/Shopify/eslint-plugin-shopify/pull/221)]

## 26.3.0 - 2019-02-21

### Added

- Updated `eslint-plugin-react` and enabled `react/jsx-fragments` rule to prefer using `<>` over `<React.Fragment>` when defining fragments. [[#223](https://github.com/Shopify/eslint-plugin-shopify/pull/223)]

## 26.2.0 - 2019-02-14

### Added

- `images-no-direct-imports`. [[#219](https://github.com/Shopify/eslint-plugin-shopify/pull/219)]

## 26.1.2 - 2019-01-02

### Fixed

- `jest/no-vague-titles` no longer flags when the word `call` is used. [[#203](https://github.com/Shopify/eslint-plugin-shopify/pull/203)]
- Update `eslint-plugin-prettier` to 3.0.1 so it does not crash when given an unparsable file. [[#212](https://github.com/Shopify/eslint-plugin-shopify/pull/212)]

### Changed

- `jest/no-vague-titles` added `should` and `properly` to vague rules and new configuration to `allow` words. [[#208](https://github.com/Shopify/eslint-plugin-shopify/pull/208)]

## 26.1.1 - 2018-10-31

### Fixed

- `typescript-eslint-parser` pinned at `20.0.0` to avoid [a known issue](https://github.com/eslint/typescript-eslint-parser/issues/535). [[#201](https://github.com/Shopify/eslint-plugin-shopify/pull/201)]

## 26.1.0 - 2018-10-30

### Added

- `shopify/no-ancestor-directory-import`. [[#149](https://github.com/Shopify/eslint-plugin-shopify/pull/149)]

### Fixed

- Set TypeScript parser only on TS files. This makes sure you can extend from the typescript and react configs in either order. Previously you had to make sure typescript came first to avoid using the babel-eslint parser on typescript files. Now we suggest to extend from typescript, and then react to ensure some rules some JSX rules don't get inadventently disabled. [[#200](https://github.com/Shopify/eslint-plugin-shopify/pull/200)]

## 26.0.0 - 2018-10-26

### Added

- `shopify/eslint-comments` plugin with [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments) rules:

  - `eslint-comments/disable-enable-pair`,
  - `eslint-comments/no-aggregating-enable`
  - `eslint-comments/no-duplicate-disable`
  - `eslint-comments/no-unlimited-disable`
  - `eslint-comments/no-unused-disable`
  - `eslint-comments/no-unused-enable`
  - `eslint-comments/no-restricted-disable` (disabled)
  - `eslint-comments/no-use` (disabled)

- `shopify/jest/no-snapshots`. [[#182](https://github.com/Shopify/eslint-plugin-shopify/pull/182)]

### Changed

- Updated `plugin:shopify/prettier`, `plugin:shopify/react`, and `plugin:shopify/typescript` to use `overrides`. [[#173](https://github.com/Shopify/eslint-plugin-shopify/pull/173)]
- Updated `import/order` rule to enforce ordering of internal, parent and sibling imports. [[#189](https://github.com/Shopify/eslint-plugin-shopify/pull/189)]
- Updated `func-style` rule to allow arrow functions. [[#188](https://github.com/Shopify/eslint-plugin-shopify/pull/188)]

### Fixed

- Rolling back `eslint-plugin-graphql` to `2.1.0-0` for multiple schema support. [[#195](https://github.com/Shopify/eslint-plugin-shopify/pull/195)]

## 25.1.0 - 2018-10-01

### Changed

- Updated `typescript-eslint-parser` dependency to version 19.0.2 to support `typescript-estree`. [[#176](https://github.com/Shopify/eslint-plugin-shopify/pull/176)]

## 25.0.1 - 2018-09-25

### Fixed

- Restored `typescript-prettier` config to override `prettier` plugin parser. [[#171](https://github.com/Shopify/eslint-plugin-shopify/pull/171)]

## 25.0.0 - 2018-09-25

### Fixed

- Updated `plugin:shopify/prettier` to enable prettier linting. [[#170](https://github.com/Shopify/eslint-plugin-shopify/pull/170)]
- `strict-component-boundaries` now consistently uses the resolved path from the app root to perform its checks. This fixes a number of false-positives. [[#160](https://github.com/Shopify/eslint-plugin-shopify/pull/160)]

## 24.2.0 - 2018-09-21

### Added

- Added `plugin:shopify/graphql` to module index. [[#168](https://github.com/Shopify/eslint-plugin-shopify/pull/168)]

### Fixed

- Updated `no-vague-titles` rule to fix parsing issues in `getMethodName`. [[#167](https://github.com/Shopify/eslint-plugin-shopify/pull/167)]

## 24.1.1 - 2018-09-19

- Same as `24.1.0`

## 24.1.0 - 2018-09-19

### Added

- Added `shopify/graphql` config using new `eslint-plugin-graphql` (`2.1.1.`) dependency. [[#165](https://github.com/Shopify/eslint-plugin-shopify/pull/165)]

## 24.0.0 - 2018-08-30

### Fixed

- `plugin:shopify/flow` now disables rules checked by Flow's static analyzer. [[#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135)]
- `plugin:shopify/prettier` and `plugin:shopify/typescript-prettier` defer missing semicolon rules to a project´s `.prettierrc`. [[#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135)]
- Updated `strict-component-boundaries` to exclude fixture imports. [[#117](https://github.com/Shopify/eslint-plugin-shopify/pull/117)]
- Updated `strict-component-boundaries` to exclude imports from node_modules. [[#140](https://github.com/Shopify/eslint-plugin-shopify/pull/140)]
- Updated `jest/no-vague-titles` to support `.each` syntax. [[#148](https://github.com/Shopify/eslint-plugin-shopify/pull/148)]

### Changed

- Namespaced `prefer-pascal-case-enums` and `prefer-singular-enums` under `typescript`. [[#141](https://github.com/Shopify/eslint-plugin-shopify/pull/141)]
- **Breaking:** Updated to eslint `v5.4.0`. Consuming projects must be using [supported](https://eslint.org/docs/user-guide/migrating-to-5.0.0#-nodejs-4-is-no-longer-supported) node versions, we recommend `^8.10.0`. See details on the v4 to v5 [migration guide](https://eslint.org/docs/user-guide/migrating-to-5.0.0). [[#151](https://github.com/Shopify/eslint-plugin-shopify/pull/151)]

### Added

- `shopify/prefer-singular-enums`. [[#132](https://github.com/Shopify/eslint-plugin-shopify/pull/132)]
- `shopify/react-no-multiple-render-methods`. [[#134](https://github.com/Shopify/eslint-plugin-shopify/pull/134)]

- New eslint rules and plugins rules. [[#151](https://github.com/Shopify/eslint-plugin-shopify/pull/151)]
  - [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file) (disabled)
  - [`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)
  - [`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp) (disabled)
  - [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)
  - [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)
  - [`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)
  - [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)
  - [`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function) (disabled)
  - [`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style) (disabled)
  - [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)
  - [`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
  - [`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
  - [`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md)
  - [`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)
  - [`jest/no-jasmine-globals`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md)
  - [`jest/prefer-inline-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md) (disabled)
  - [`jest/no-test-return-statement`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md)
  - [`node/prefer-global/buffer`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md)
  - [`node/prefer-global/console`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md)
  - [`node/prefer-global/process`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md0)
  - [`node/prefer-global/url-search-params`](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/prefer-global/url-search-params.js)
  - [`node/prefer-global/url`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md)
  - [`node/no-unsupported-features/es-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md) (disabled)
  - [`node/no-unsupported-features/es-syntax`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md) (disabled)
  - [`node/no-unsupported-features/node-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md)
  - [`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)
  - [`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)
  - [`typescript/no-inferrable-types`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-inferrable-types.md)
  - [`typescript/no-var-requires`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-var-requires.md)

## 23.1.0 - 2018-08-02

### Fixed

- Updated `typescript-eslint-parser` dependency to version 17.0.1 in order to support TypeScript 3. [[#121](https://github.com/Shopify/eslint-plugin-shopify/pull/121)]
- Removed default prettier configurations. `plugin:shopify/prettier` and `plugin:shopify/typescript-prettier` now defer Prettier's config to a project's `.prettierrc`. [[#121](https://github.com/Shopify/eslint-plugin-shopify/pull/121)]

### Changed

- Included `all` as a vague term for `no-vague-titles`. [[#114](https://github.com/Shopify/eslint-plugin-shopify/pull/114)]

## 23.0.0 - 2018-07-16

- **Breaking** `eslint-plugin-shopify` will no longer install `prettier` as a dependency. Please ensure you have added `prettier` to your `package.json` if you wish to use it.

### Added

- `shopify/jsx-prefer-fragment-wrappers`. [[#94](https://github.com/Shopify/eslint-plugin-shopify/pull/94)]
- `shopify/jest/no-vague-titles`. [[#93](https://github.com/Shopify/eslint-plugin-shopify/pull/93)]
- `shopify/strict-component-boundaries`. [[#98](https://github.com/Shopify/eslint-plugin-shopify/pull/98)]

### Changed

- **Breaking** Moved prettier to be a peerDependency, this avoids the potential for having multiple versions of prettier in the dependency graph. If you use prettier you will need to ensure you have it installed in your project as eslint-plugin-shopify will no longer install it for you. [[#107](https://github.com/Shopify/eslint-plugin-shopify/pull/107)]
- **Breaking** Updated `typescript-eslint-parser` to support `typescript@2.9.1`. [[#102](https://github.com/Shopify/eslint-plugin-shopify/pull/102)]

## 22.1.0 - 2018-06-08

### Fixed

- Updated `eslint-plugin-sort-class-members` dependency to version 1.3.1 in order to support node 10.

### Added

- `shopify/prefer-pascal-case-enums`. [[#96](https://github.com/Shopify/eslint-plugin-shopify/pull/96)]
- `shopify/react-prefer-private-members`. [[#95](https://github.com/Shopify/eslint-plugin-shopify/pull/95)]

## 22.0.0

- Updated dependencies
- Added support for TypeScript 2.8

## 21.0.1 - 2018-04-25

- Fixed the publish config for the package.

## 21.0.0 - 2018-04-25

### Added

- `shopify/jsx-no-hardcoded-content` now accepts a `dom` option that allows specifying attributes on DOM elements and Web Components to be checked for hardcoded content.

### Removed

- **Breaking:** turned off four rules that previously triggered errors in all cases:
  - `shopify/react-type-state` (TypeScript now addresses the issue this rule was meant to catch)
  - `promise/always-return`
  - `react/no-did-mount-set-state`
  - `no-undefined`
- **Breaking:** turned off two rules in specific plugins:
  - `babel/no-invalid-this` (turned off for the `typescript` configs as TypeScript has better mechanisms for unsuring a valid `this` is used)
  - `no-process-env` (turned off for the `webpack` and `node` configs as both targets can benefit from use of `process.env`)

### Fixed

- Fixed an issue where various rules were not correctly resolving paths in `node_modules`.

## 20.0.0 - 2018-03-15

- **Breaking:** the version of TypeScript supported by this plugin is 2.7.x (in line with [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser)’s TypeScript support)
- Updated dependencies that support the new ESLint documentation URL metadata. Errors from these plugins are accompanied by a link to the documentation for the broken rule.
- Dependencies are now strictly versioned for tighter control over the exact rules the plugin enforces.

| Package                    | old       | new       |
| -------------------------- | --------- | --------- |
| `eslint-plugin-ava`        | `^4.4.0`  | `4.5.1`   |
| `eslint-plugin-import`     | `^2.8.0`  | `2.9.0`   |
| `eslint-plugin-jest`       | `^21.5.0` | `21.14.1` |
| `eslint-plugin-lodash`     | `^2.5.0`  | `2.6.1`   |
| `eslint-plugin-node`       | `^5.2.1`  | `6.0.1`   |
| `eslint-plugin-prettier`   | `^2.4.0`  | `2.6.0`   |
| `eslint-plugin-promise`    | `^3.6.0`  | `3.7.0`   |
| `eslint-plugin-react`      | `^7.5.1`  | `7.7.0`   |
| `eslint-plugin-typescript` | `^0.8.1`  | `0.10.0`  |

- Added rules:
  - [`react/forbid-dom-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md) (disabled)
  - [`react/jsx-child-element-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md) **error**
  - [`react/jsx-max-depth`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md) (disabled)
  - [`react/jsx-sort-default-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md) (disabled)
  - [`react/no-this-in-sfc`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md) **error**
  - [`import/group-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md) (disabled)
  - [`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md) **error**
  - [`import/no-default-export`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md) (disabled)
  - [`import/no-useless-path-segments`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md) **error**
  - [`jest/prefer-expect-assertions`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md) (disabled)
  - [`jest/valid-expect-in-promise`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md) **error**
  - [`jest/valid-describe`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md) **error**
  - [`jest/consistent-test-it`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md) **error**
  - [`jest/no-test-prefixes`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md) **error**
  - [`jest/lowercase-name`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md) (disabled)
  - [`jest/no-jest-import`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md) **error**
  - [`promise/valid-params`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/valid-params.md) **error**
  - [`promise/no-new-statics`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/no-new-statics.md) (disabled)
  - [`typescript/explicit-function-return-type`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/explicit-function-return-type.md) (disabled)
  - [`typescript/no-non-null-assertion`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-non-null-assertion.md) **error**
- Updated `import/extensions` due to changes in its implementation: some extensions are explicitly allowed in `import`s: `.svg`, `.png`, `.jpg`, `.ico`, `.css`, `.sass`, `.scss`, `.less`, `.styl`. `.json` is still required as well.
- Chore: updated CircleCI from v1 to v2.

## 19.0.1 - 2018-03-12

### Fixed

- `shopify/jsx-no-hardcoded-content` rule now does not warn on all-whitespace strings as children. This was causing issues with indented JSX content, and is typically not an issue for different locales.

## 19.0.0 - 2018-01-17

### Added

- `shopify/jest` config with [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) rules:
  - `jest/no-disabled-tests` (disabled)
  - `jest/no-focused-tests`
  - `jest/no-identical-title`
  - `jest/no-large-snapshots` (limited to 12 lines)
  - `jest/prefer-to-have-length`
  - `jest/prefer-to-be-null`
  - `jest/prefer-to-be-undefined`
  - `jest/valid-expect`
- Added `shopify/webpack` config
- Added `shopify/polaris` config
- Added `shopify/webpack/no-unnamed-dynamic-imports` rule
- Added `shopify/prefer-module-scope-constants` rule
- Added `shopify/jsx-no-complex-expressions` rule
- Added `shopify/jsx-no-hardcoded-content` rule
- Added `shopify/polaris-no-bare-stack-item` rule
- Added `shopify/polaris-prefer-sectioned-prop` rule
- Added `shopify/react-initialize-state` rule
- Added `shopify/react-type-state` rule
- Added [`implicit-arrow-linebreak`][] rule
- Added [`lines-around-comment`][] rule (as a [special
  rule][lines-around-comment-special]).
- Added [`no-unexpected-multiline`][] rule (as a [special rule][no-unexpected-multiline-special]).
- Added [`flowtype/no-flow-fix-me-comments`](https://github.com/gajus/eslint-plugin-flowtype/blob/677e55c6a0f1dd355268a0f19618cd2696424c53/.README/rules/no-flow-fix-me-comments.md)
- Added [`react/jsx-one-expression-per-line`][]
- Added [`react/destructuring-assignment`][]
- Added [`react/no-access-state-in-setstate`][]
- Added [`react/button-has-type`][]
- Added [`react/jsx-curly-brace-presence`][]
- Added [`typescript/member-naming`](https://github.com/nzakas/eslint-plugin-typescript/tree/master/docs/rules/member-naming.md)
- Added [`typescript/no-array-constructor`](https://github.com/nzakas/eslint-plugin-typescript/tree/master/docs/rules/no-array-constructor.md)
- Added `yarn prettier` script (prettifies source files)

[`implicit-arrow-linebreak`]: https://eslint.org/docs/rules/implicit-arrow-linebreak
[lines-around-comment-special]: https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#lines-around-comment
[`lines-around-comment`]: https://eslint.org/docs/rules/lines-around-comment
[no-unexpected-multiline-special]: https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
[`no-unexpected-multiline`]: https://eslint.org/docs/rules/no-unexpected-multiline
[`react/jsx-one-expression-per-line`]: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
[`react/destructuring-assignment`]: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
[`react/no-access-state-in-setstate`]: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md
[`react/button-has-type`]: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md
[`react/jsx-curly-brace-presence`]: https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md

### Changed

- Updated dependencies to their latest versions (full details in [#63](https://github.com/Shopify/eslint-plugin-shopify/pull/63))
- **Breaking:** `node.js` minimum supported node version update to `8.9.4` (LTS).
- **Breaking:** Changed `eslint-config-shopify` codebase to `trailingComma: 'all'` and drop support for Node.js 6
- **Breaking:** Updated prettier to 1.9.2, introducing a change in function parens style (set to `arrowParens: 'always'`):

  ```js
  // Before
  const foo = myArray.map((foo) => {});

  // After
  const foo = myArray.map((foo) => {});
  ```

  ⚠️ Upgrade path:

  Your project config files (`package.json`, `.prettierrc`, `.eslintrc`…)
  may need to be updated like so:

  ```diff
     "singleQuote": true,
     "bracketSpacing": false,
     "trailingComma": "all",
  +  "arrowParens": "always"
  ```

- Prettified source files using the new config

## 18.3.1 - 2017-12-21

### Changed

- Changed `eslint-config-shopify` codebase to follow es5 trailingComma. [[#61](https://github.com/Shopify/eslint-plugin-shopify/pull/61)]

## 18.3.0 - 2017-12-18

### Added

- Added `shopify/no-debugger`, which behaves the same as ESLint's `no-debugger` but without a fixer.

## 18.2.0 - 2017-12-04

### Added

- Added a `typescript-prettier` config to run prettier against typescript projects.

## 18.1.0 - 2017-12-01

### Added

- Added a `typescript` and `typescript-react` config. [[#54](https://github.com/Shopify/eslint-plugin-shopify/pull/54)]

### Changed

- `plugin:shopify/prettier` will now enforce trailing commas in function parameter calls. [[#55](https://github.com/Shopify/eslint-plugin-shopify/pull/55)]
- `comma-dangle` will now enforce multi-line function parameters. [[#55](https://github.com/Shopify/eslint-plugin-shopify/pull/55)]
- Removed `plugin:shopify/esnext` as an included extension of the `plugin:shopify/prettier` config. `plugin:shopify/esnext` must now be extended by the consumer to use the `plugin:shopify/prettier`. [[#53](https://github.com/Shopify/eslint-plugin-shopify/pull/53)]

  Example (`package.json`):

  ```
  "eslintConfig": {
    "extends": [
      "plugin:shopify/esnext",
      "plugin:shopify/prettier"
    ]
  }
  ```

## 18.0.0 - 2017-10-31

### Changed

- Turned off `class-methods-use-this`

## 17.2.1 - 2017-10-30

### Changed

- Turned off `babel/semi` rule in prettier config

## 17.2.0 - 2017-10-25

### Added

- Added a prettier config. [[#46](https://github.com/Shopify/eslint-plugin-shopify/pull/46)]

Example:

```
"eslintConfig": {
  "extends": [
    "plugin:shopify/prettier"
  ]
}
```

### Changed

- Replace all `warn` with `error`. [[#48](https://github.com/Shopify/eslint-plugin-shopify/pull/48)]
- `space-before-function-paren` now uses `asyncArrow` option (eg. `async () => {}`). [[#43](https://github.com/Shopify/eslint-plugin-shopify/pull/43)]
- Enable `padding-line-between-statements` for directives. [[#44](https://github.com/Shopify/eslint-plugin-shopify/pull/44)]

### Removed

- `lines-around-directive` was deprecated in ESLint `v4.0.0`. [[#44](https://github.com/Shopify/eslint-plugin-shopify/pull/44)]

## 17.1.0 - 2017-09-19

### Added

- New rules. [[#41](https://github.com/Shopify/eslint-plugin-shopify/pull/41)]:
  - `import/no-anonymous-default-export`
  - `jsx-a11y/anchor-is-valid`
  - `no-buffer-constructor`
  - `node/no-extraneous-import` (disabled)
  - `node/no-extraneous-require`
  - `for-direction`
  - `getter-return`
  - `react/boolean-prop-naming` (disabled)
  - `react/default-props-match-prop-types`
  - `react/no-redundant-should-component-update`
  - `react/no-typos`
  - `react/no-unused-state`
  - `react/jsx-closing-tag-location`
  - `array-bracket-newline` (disabled)
  - `array-element-newline` (disabled)
  - `function-paren-newline`
  - `padding-line-between-statements` (disabled)
  - `semi-style`
  - `switch-colon-spacing`

### Changed

- Updated dependencies. [[#41](https://github.com/Shopify/eslint-plugin-shopify/pull/41)]:
  - `eslint`
  - `babel-eslint`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-node`
  - `eslint-plugin-react`
- `jquery-dollar-sign-reference` no longer flags assignments from `await` expressions

### Removed

- `jsx-a11y/href-no-hash` replaced with `jsx-a11y/anchor-is-valid`

## 17.0.0 - 2017-08-17

### Changed

- `eslint` upgrade to `4.3.0`
- `node.js` minimum supported node version update to `6.11.1` (LTS).
- Update dependencies:
  - `eslint-plugin-ava`: `^4.2.0` → `^4.2.1`.
  - `eslint-plugin-babel`: `^4.1.1` → `^4.1.2`.
  - `eslint-plugin-lodash`: `^2.4.2` → `^2.4.4`.
  - `eslint-plugin-mocha`: `^4.9.0` → `^4.11.0`.
  - `eslint-plugin-node`: `^4.2.2` → `^4.2.3`.
  - `eslint-plugin-react`: `^7.0.0` → `^7.0.1`.

## 16.0.1 - 2017-05-29

### Changed

- Turned off [`prefer-destructuring`](http://eslint.org/docs/rules/prefer-destructuring). [[#30](https://github.com/Shopify/eslint-plugin-shopify/pull/30)]

## 16.0.0 - 2017-05-16

### Added

- New rule: [`babel/semi`](https://github.com/babel/eslint-plugin-babel/releases/tag/v4.1.0)
- New rule: [`flowtype/no-types-missing-file-annotation`](https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-types-missing-file-annotation)
- New rule: [`jsx-a11y/accessible-emoji`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md)
- New rule: [`jsx-a11y/alt-text`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)
- New rule: [`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md)
- New rule: [`jsx-a11y/iframe-has-title`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md)
- New rule: [`jsx-a11y/interactive-supports-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md)
- New rule: [`jsx-a11y/media-has-caption`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md) (disabled)
- New rule: [`jsx-a11y/no-autofocus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md)
- New rule: [`jsx-a11y/no-distracting-elements`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md)
- New rule: [`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md) (disabled)
- New rule: [`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md)
- New rule: [`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md)
- New rule: [`jsx-a11y/no-noninteractive-tabindex`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md)
- New rule: [`jsx-a11y/no-redundant-roles`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md)
- New rule: [`lodash/prefer-some`](https://github.com/wix/eslint-plugin-lodash/blob/master/docs/rules/prefer-some.md)
- New rule: [`react/forbid-elements`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md) (disabled)
- New rule: [`react/forbid-foreign-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md)
- New rule: [`react/no-will-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md)
- New rule: [`react/void-dom-elements-no-children`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md)
- New rule: [`no-await-in-loop`](http://eslint.org/docs/rules/no-await-in-loop)
- New rule: [`prefer-promise-reject-errors`](http://eslint.org/docs/rules/prefer-promise-reject-errors)
- New rule: [`require-await`](http://eslint.org/docs/rules/require-await)
- New rule: [`prefer-destructuring`](http://eslint.org/docs/rules/prefer-destructuring)
- New rule: [`no-compare-neg-zero`](http://eslint.org/docs/rules/no-compare-neg-zero)
- New rule: [`capitalized-comments`](http://eslint.org/docs/rules/capitalized-comments) (disabled)
- New rule: [`no-multi-assign`](http://eslint.org/docs/rules/no-multi-assign)
- New rule: [`nonblock-statement-body-position`](http://eslint.org/docs/rules/nonblock-statement-body-position) (disabled)
- New rule: [`template-tag-spacing`](http://eslint.org/docs/rules/template-tag-spacing)

### Removed

- Deprecated: [`babel/no-await-in-loop`](https://github.com/babel/eslint-plugin-babel/releases/tag/v4.1.1)
- Deprecated: [`jsx-a11y/img-has-alt`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md#500--2017-05-05)
- Deprecated: [`jsx-a11y/onclick-has-focus`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md#500--2017-05-05)
- Deprecated: [`jsx-a11y/onclick-has-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/CHANGELOG.md#500--2017-05-05)
- Deprecated: [`jsx-a11y/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/CHANGELOG.md#700---2017-05-06)

## 15.2.0 - 2017-03-06

### Changed

- `eslint` upgrade to `3.17.x`

## 15.1.2 - 2017-02-23

### Fixed

- `jquery-dollar-sign-reference` now checks assignments from `LogicalExpression` / `BinaryExpression`

## 15.1.1 - 2017-01-17

### Added

- Added `eslint-index` package. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]
- Added `rules-status` and `rules-omitted` scripts. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]
- Added new `eslint-plugin-react` rules: `no-array-index-key`, `require-default-props`. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]
- Added new `eslint-plugin-lodash` rules: `import-scope`. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]
- Added new `eslint-plugin-promise` rules: `no-return-wrap`, `no-nesting`, `no-promise-in-callback`, `no-callback-in-promise`, `avoid-new`, `prefer-await-to-then`, `prefer-await-to-callbacks`. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]

### Changed

- Updated `eslint-plugin-flowtype`, `eslint-plugin-lodash`, `eslint-plugin-mocha`, `eslint-plugin-promise`, `eslint-plugin-react` to their latest versions. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]
- Updated `react/prefer-stateless-function` rule to include `ignorePureComponents` flag. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]

### Removed

- Removed `eslint-find-rules` package. [[#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4)]

## 15.1.0

Changes were originally tracked in Shopify's [JavaScript monorepo](https://github.com/Shopify/javascript/blob/f10bf7ddbdae07370cfe7c94617c450257731552/CHANGELOG.md).
