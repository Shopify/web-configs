# Changelog

## Unreleased

### Fixed
* `plugin:shopify/flow` now disables rules checked by Flow's static analyzer. ([#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135))
* `plugin:shopify/prettier` and `plugin:shopify/typescript-prettier` defer missing semicolon rules to a project´s `.prettierrc`. ([#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135))

### Changed
* Namespaced `prefer-pascal-case-enums` and `prefer-singular-enums` under `typescript`. ([#141](https://github.com/Shopify/eslint-plugin-shopify/pull/141))

### Added
* `shopify/prefer-singular-enums` ([#132](https://github.com/Shopify/eslint-plugin-shopify/pull/132))
* `shopify/react-no-multiple-render-methods` ([#134](https://github.com/Shopify/eslint-plugin-shopify/pull/134))

### Fixed
* Updated `strict-component-boundaries` to exclude imports from node_modules([#140](https://github.com/Shopify/eslint-plugin-shopify/pull/140))

## [23.1.0] - 2018-08-02s

### Fixed
* Updated `typescript-eslint-parser` dependency to version 17.0.1 in order to support TypeScript 3. ([#121](https://github.com/Shopify/eslint-plugin-shopify/pull/121))
* Removed default prettier configurations. `plugin:shopify/prettier` and `plugin:shopify/typescript-prettier` now defer Prettier's config to a project's `.prettierrc`. ([#121](https://github.com/Shopify/eslint-plugin-shopify/pull/121))

### Changed
* Included `all` as a vague term for `no-vague-titles` ([#114](https://github.com/Shopify/eslint-plugin-shopify/pull/114))

## [23.0.0] - 2018-07-16
* **Breaking** `eslint-plugin-shopify` will no longer install `prettier` as a dependency. Please ensure you have added `prettier` to your `package.json` if you wish to use it.

### Added
* `shopify/jsx-prefer-fragment-wrappers` ([#94](https://github.com/Shopify/eslint-plugin-shopify/pull/94))
* `shopify/jest/no-vague-titles` ([#93](https://github.com/Shopify/eslint-plugin-shopify/pull/93))
* `shopify/strict-component-boundaries` ([#98](https://github.com/Shopify/eslint-plugin-shopify/pull/98))

### Changed
* **Breaking** Moved prettier to be a peerDependency, this avoids the potential for having multiple versions of prettier in the dependency graph. If you use prettier you will need to ensure you have it installed in your project as eslint-plugin-shopify will no longer install it for you ([#107](https://github.com/Shopify/eslint-plugin-shopify/pull/107))
* **Breaking** Updated `typescript-eslint-parser` to support `typescript@2.9.1` ([#102](https://github.com/Shopify/eslint-plugin-shopify/pull/102))

## [22.1.0] - 2018-06-08

### Fixed
* Updated `eslint-plugin-sort-class-members` dependency to version 1.3.1 in order to support node 10.

### Added
* `shopify/prefer-pascal-case-enums` ([#96](https://github.com/Shopify/eslint-plugin-shopify/pull/96))
* `shopify/react-prefer-private-members` ([#95](https://github.com/Shopify/eslint-plugin-shopify/pull/95))

## [22.0.0]
* Updated dependencies
* Added support for TypeScript 2.8

## [21.0.1] - 2018-04-25
* Fixed the publish config for the package.

## [21.0.0] - 2018-04-25

### Added
* `shopify/jsx-no-hardcoded-content` now accepts a `dom` option that allows specifying attributes on DOM elements and Web Components to be checked for hardcoded content.

### Removed
* **Breaking:** turned off four rules that previously triggered errors in all cases:
  * `shopify/react-type-state` (TypeScript now addresses the issue this rule was meant to catch)
  * `promise/always-return`
  * `react/no-did-mount-set-state`
  * `no-undefined`
* **Breaking:** turned off two rules in specific plugins:
  * `babel/no-invalid-this` (turned off for the `typescript` configs as TypeScript has better mechanisms for unsuring a valid `this` is used)
  * `no-process-env` (turned off for the `webpack` and `node` configs as both targets can benefit from use of `process.env`)

### Fixed
* Fixed an issue where various rules were not correctly resolving paths in `node_modules`.

## [20.0.0] - 2018-03-15
* **Breaking:** the version of TypeScript supported by this plugin is 2.7.x (in line with [typescript-eslint-parser](https://github.com/eslint/typescript-eslint-parser)’s TypeScript support)
* Updated dependencies that support the new ESLint documentation URL metadata. Errors from these plugins are accompanied by a link to the documentation for the broken rule.
* Dependencies are now strictly versioned for tighter control over the exact rules the plugin enforces.

| Package | old | new |
| ------- | --- | --- |
| `eslint-plugin-ava` | `^4.4.0` | `4.5.1` |
| `eslint-plugin-import` | `^2.8.0` | `2.9.0` |
| `eslint-plugin-jest` | `^21.5.0` | `21.14.1` |
| `eslint-plugin-lodash` | `^2.5.0`  | `2.6.1` |
| `eslint-plugin-node` | `^5.2.1`  | `6.0.1` |
| `eslint-plugin-prettier` | `^2.4.0`  | `2.6.0` |
| `eslint-plugin-promise` | `^3.6.0`  | `3.7.0` |
| `eslint-plugin-react` | `^7.5.1`  | `7.7.0` |
| `eslint-plugin-typescript` | `^0.8.1`  | `0.10.0` |

* Added rules:
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
* Updated `import/extensions` due to changes in its implementation: some extensions are explicitly allowed in `import`s: `.svg`, `.png`, `.jpg`, `.ico`, `.css`, `.sass`, `.scss`, `.less`, `.styl`. `.json` is still required as well.
* Chore: updated CircleCI from v1 to v2.

## [19.0.1] - 2018-03-12

### Fixed
* `shopify/jsx-no-hardcoded-content` rule now does not warn on all-whitespace strings as children. This was causing issues with indented JSX content, and is typically not an issue for different locales.

## [19.0.0] - 2018-01-17

### Added
* `shopify/jest` config with [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) rules:
  - `jest/no-disabled-tests` (disabled)
  - `jest/no-focused-tests`
  - `jest/no-identical-title`
  - `jest/no-large-snapshots` (limited to 12 lines)
  - `jest/prefer-to-have-length`
  - `jest/prefer-to-be-null`
  - `jest/prefer-to-be-undefined`
  - `jest/valid-expect`
* Added `shopify/webpack` config
* Added `shopify/polaris` config
* Added `shopify/webpack/no-unnamed-dynamic-imports` rule
* Added `shopify/prefer-module-scope-constants` rule
* Added `shopify/jsx-no-complex-expressions` rule
* Added `shopify/jsx-no-hardcoded-content` rule
* Added `shopify/polaris-no-bare-stack-item` rule
* Added `shopify/polaris-prefer-sectioned-prop` rule
* Added `shopify/react-initialize-state` rule
* Added `shopify/react-type-state` rule
* Added [`implicit-arrow-linebreak`][] rule
* Added [`lines-around-comment`][] rule (as a [special
  rule][lines-around-comment-special]).
* Added [`no-unexpected-multiline`][] rule (as a [special rule][no-unexpected-multiline-special]).
* Added [`flowtype/no-flow-fix-me-comments`](https://github.com/gajus/eslint-plugin-flowtype/blob/677e55c6a0f1dd355268a0f19618cd2696424c53/.README/rules/no-flow-fix-me-comments.md)
* Added [`react/jsx-one-expression-per-line`][]
* Added [`react/destructuring-assignment`][]
* Added [`react/no-access-state-in-setstate`][]
* Added [`react/button-has-type`][]
* Added [`react/jsx-curly-brace-presence`][]
* Added [`typescript/member-naming`](https://github.com/nzakas/eslint-plugin-typescript/tree/master/docs/rules/member-naming.md)
* Added [`typescript/no-array-constructor`](https://github.com/nzakas/eslint-plugin-typescript/tree/master/docs/rules/no-array-constructor.md)
* Added `yarn prettier` script (prettifies source files)

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
* Updated dependencies to their latest versions (full details in [#63](https://github.com/Shopify/eslint-plugin-shopify/pull/63))
* **Breaking:** `node.js` minimum supported node version update to `8.9.4` (LTS).
* **Breaking:** Changed `eslint-config-shopify` codebase to `trailingComma: 'all'` and drop support for Node.js 6
* **Breaking:** Updated prettier to 1.9.2, introducing a change in function parens style (set to `arrowParens: 'always'`):

    ```js
    // Before
    const foo = myArray.map(foo => {});

    // After
    const foo = myArray.map((foo) => {});
    ```

    #### ⚠️ Upgrade path

    Your project config files (`package.json`, `.prettierrc`, `.eslintrc`…)
    may need to be updated like so:

    ```diff
       "singleQuote": true,
       "bracketSpacing": false,
       "trailingComma": "all",
    +  "arrowParens": "always"
    ```
* Prettified source files using the new config

## [18.3.1] - 2017-12-21

### Changed
* Changed `eslint-config-shopify` codebase to follow es5 trailingComma [[#61](https://github.com/Shopify/eslint-plugin-shopify/pull/61)]

## [18.3.0] - 2017-12-18

### Added
* Added `shopify/no-debugger`, which behaves the same as ESLint's `no-debugger` but without a fixer.

## [18.2.0] - 2017-12-04
### Added
* Added a `typescript-prettier` config to run prettier against typescript projects.

## [18.1.0] - 2017-12-01

### Added
* Added a `typescript` and `typescript-react` config [[#54](https://github.com/Shopify/eslint-plugin-shopify/pull/54)]

### Changed
* `plugin:shopify/prettier` will now enforce trailing commas in function parameter calls [[#55](https://github.com/Shopify/eslint-plugin-shopify/pull/55)]
* `comma-dangle` will now enforce multi-line function parameters [[#55](https://github.com/Shopify/eslint-plugin-shopify/pull/55)]
* Removed `plugin:shopify/esnext` as an included extension of the `plugin:shopify/prettier` config. `plugin:shopify/esnext` must now be extended by the consumer to use the `plugin:shopify/prettier`. [[#53](https://github.com/Shopify/eslint-plugin-shopify/pull/53)]

  Example (`package.json`):
  ```
  "eslintConfig": {
    "extends": [
      "plugin:shopify/esnext",
      "plugin:shopify/prettier"
    ]
  }
  ```

## [18.0.0] - 2017-10-31
### Changed
* Turned off `class-methods-use-this`

## [17.2.1] - 2017-10-30
### Changed
* Turned off `babel/semi` rule in prettier config

## [17.2.0] - 2017-10-25
### Added
* Added a prettier config [[#46](https://github.com/Shopify/eslint-plugin-shopify/pull/46)]

Example:
```
"eslintConfig": {
  "extends": [
    "plugin:shopify/prettier"
  ]
}
```

### Changed
* Replace all `warn` with `error` [[#48](https://github.com/Shopify/eslint-plugin-shopify/pull/48)]
* `space-before-function-paren` now uses `asyncArrow` option (eg. `async () => {}`) [[#43](https://github.com/Shopify/eslint-plugin-shopify/pull/43)]
* Enable `padding-line-between-statements` for directives.  [[#44](https://github.com/Shopify/eslint-plugin-shopify/pull/44)]

### Removed
* `lines-around-directive` was deprecated in ESLint `v4.0.0`. [[#44](https://github.com/Shopify/eslint-plugin-shopify/pull/44)]


## [17.1.0] - 2017-09-19

### Added
* New rules ([#41](https://github.com/Shopify/eslint-plugin-shopify/pull/41)):
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
- Updated dependencies ([#41](https://github.com/Shopify/eslint-plugin-shopify/pull/41)):
  - `eslint`
  - `babel-eslint`
  - `eslint-plugin-import`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-node`
  - `eslint-plugin-react`
- `jquery-dollar-sign-reference` no longer flags assignments from `await` expressions

### Removed
- `jsx-a11y/href-no-hash` replaced with `jsx-a11y/anchor-is-valid`

## [17.0.0] - 2017-08-17
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


## [16.0.1] - 2017-05-29
### Changed
- Turned off [`prefer-destructuring`](http://eslint.org/docs/rules/prefer-destructuring) ([#30](https://github.com/Shopify/eslint-plugin-shopify/pull/30))

## [16.0.0] - 2017-05-16
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


## [15.2.0] - 2017-03-06
### Changed
- `eslint` upgrade to `3.17.x`

## [15.1.2] - 2017-02-23
### Fixed
- `jquery-dollar-sign-reference` now checks assignments from `LogicalExpression` / `BinaryExpression`

## [15.1.1] - 2017-01-17
### Added
- Added `eslint-index` package ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))
- Added `rules-status` and `rules-omitted` scripts ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))
- Added new `eslint-plugin-react` rules: `no-array-index-key`, `require-default-props` ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))
- Added new `eslint-plugin-lodash` rules: `import-scope` ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))
- Added new `eslint-plugin-promise` rules: `no-return-wrap`, `no-nesting`, `no-promise-in-callback`, `no-callback-in-promise`, `avoid-new`, `prefer-await-to-then`, `prefer-await-to-callbacks` ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))

### Changed
- Updated `eslint-plugin-flowtype`, `eslint-plugin-lodash`, `eslint-plugin-mocha`, `eslint-plugin-promise`, `eslint-plugin-react` to their latest versions ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))
- Updated `react/prefer-stateless-function` rule to include `ignorePureComponents` flag ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))

### Removed
- Removed `eslint-find-rules` package ([#4](https://github.com/Shopify/eslint-plugin-shopify/pull/4))

# Pre-15.1.1 Changelog

Changes were originally tracked in Shopify's [JavaScript monorepo](https://github.com/Shopify/javascript/blob/f10bf7ddbdae07370cfe7c94617c450257731552/CHANGELOG.md).

[Unreleased]: https://github.com/Shopify/eslint-plugin-shopify/compare/v23.1.0...HEAD
[23.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v23.0.0...v23.1.0
[23.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v22.1.0...v23.0.0
[22.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v22.0.0...v22.1.0
[22.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v21.0.1...v22.0.0
[21.0.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v21.0.0...v21.0.1
[21.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v20.0.0...v21.0.0
[20.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v19.0.1...v20.0.0
[19.0.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v19.0.0...v19.0.1
[19.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v18.3.1...v19.0.0
[18.3.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v18.3.0...v18.3.1
[18.3.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v18.2.0...v18.3.0
[18.2.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v18.1.0...v18.2.0
[18.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v18.0.0...v18.1.0
[18.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v17.2.1...v18.0.0
[17.2.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v17.2.0...v17.2.1
