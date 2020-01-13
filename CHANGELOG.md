# Changelog

## [34.0.0] - 2019-01-13

- changed `no-vague-titles` rule to catch blacklisted **words** (instead of **sequences**) in the title ([514](https://github.com/Shopify/eslint-plugin-shopify/pull/514))
- removed `jest/no-empty-title` and renamed `jest/require-tothrow-message` to `jest/require-to-throw-message` ([499](https://github.com/Shopify/eslint-plugin-shopify/pull/499))

### New Rules
The followiing new rules were introduced in `eslint@6.7.0`. More information can be found on the [eslint blog](https://eslint.org/blog/2019/11/eslint-v6.7.0-released).
- [`grouped-accessor-pairs`](https://eslint.org/docs/rules/grouped-accessor-pairs)
- [`no-constructor-return`](https://eslint.org/docs/rules/no-constructor-return)
- [`no-dupe-else-if`](https://eslint.org/docs/rules/no-dupe-else-if)
- [`no-setter-return`](https://eslint.org/docs/rules/no-setter-return)
- [`prefer-exponentiation-operator`](https://eslint.org/docs/rules/prefer-exponentiation-operator)

## [33.0.0] - 2019-11-20

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

### New Rules

- `shopify/no-all-mocks-methods` ([#204](https://github.com/Shopify/eslint-plugin-shopify/pull/204))
- `shopify/no-namespace-imports` Prevent namespace import declarations. ([262](https://github.com/Shopify/eslint-plugin-shopify/pull/262))

## [32.0.0] - 2019-11-05

- `jest/valid-title`
- `jest/prefer-hooks-on-top`
- `jest/require-top-level-describe`
- Enforce new-lines between groups import groups ([#409](https://github.com/Shopify/eslint-plugin-shopify/pull/409))

## [31.0.0] - 2019-10-23

### Using `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`

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

### Config Changes

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


### New Rules

- `jest/no-standalone-expect` Prevents `expect` statements outside of a `test` or `it` block ([368](https://github.com/Shopify/eslint-plugin-shopify/pull/368))
- `jest/no-expect-resolves` Avoid using `expect().resolves` ([370](https://github.com/Shopify/eslint-plugin-shopify/pull/370))


## [30.0.1] - 2019-06-24

- bump eslint peer depndency to 6

## [30.0.0] - 2019-06-24

### Changed
- Enabled `jest/no-export` rule ([344](https://github.com/Shopify/eslint-plugin-shopify/pull/344))
- [Major] depreciated `shopify/jest/no-try-expect` in favour of [`jest/no-try-expect`](https://github.com/jest-community/eslint-plugin-jest/pull/) ([331](https://github.com/jest-community/eslint-plugin-jest/pull/331))
- [Major] depreciated `shopify/jest/no-if` in favour of [`jest/no-if`](https://github.com/jest-community/eslint-plugin-jest/pull/293) ([347](https://github.com/Shopify/eslint-plugin-shopify/pull/347))
- [Major] Updated to eslint v6, enabled `no-console` and enabled `no-async-promise-executor` ([330](https://github.com/Shopify/eslint-plugin-shopify/pull/330))
- Enabled `typescript/interface-name-prefix` to prevent `I` prefixes in TypeScript interface names
- Enabled `jest/no-duplicate-hooks` rule ([344](https://github.com/Shopify/eslint-plugin-shopify/pull/344))

### Fixed
- [Patch] Fix `jest/no-if` from falsely reporting if statements inside of functions ([331](https://github.com/Shopify/eslint-plugin-shopify/pull/331))

## [29.0.2] - 2019-06-18

### Changed

- Removed `react/prop-types` in typescript config ([309](https://github.com/Shopify/eslint-plugin-shopify/pull/309))

## [29.0.1] - 2019-06-18

### Changed

- Removed `import/no-namespace` ([308](https://github.com/Shopify/eslint-plugin-shopify/pull/308))

## [29.0.0] - 2019-06-17

### Changed

- added "necessary" to `shopify/jest/no-vague-titles` ([265](https://github.com/Shopify/eslint-plugin-shopify/pull/265))
- `shopify/jest/no-if` now recognizes conditional statements ([298](https://github.com/Shopify/eslint-plugin-shopify/pull/298))

### Added

- New Rules:
  - `jest/no-commented-out-tests` disallows commented out tests.([275](https://github.com/Shopify/eslint-plugin-shopify/pull/275))
  - `jest/no-try-expect` disallows `expect` calls in `catch` blocks ([300](https://github.com/Shopify/eslint-plugin-shopify/pull/300))
  - `node/prefer-promises/dns` and `node/prefer-promises/fs` These rules disallow the callback API in favor of promise API for the dns and fs modules. ([257](https://github.com/Shopify/eslint-plugin-shopify/pull/257))
  - `jest/no-mocks-import` This rule disallows manually importing from `__mocks__` ([246](https://github.com/Shopify/eslint-plugin-shopify/pull/246))
  - `react/state-in-constructor` Enforce state initialization to be in a class property. ([256](https://github.com/Shopify/eslint-plugin-shopify/pull/246))
  - `import/no-namespace` Prevents namespace imports. ([305](https://github.com/Shopify/eslint-plugin-shopify/pull/305))

### Fixed

- `shopify/jest/no-if` ignores if statements nested within block statements ([299](https://github.com/Shopify/eslint-plugin-shopify/pull/299))
- `react-prefer-private-members` from incorrectly reporting the members of a parent class if a React class is defined within its constructor. ([258](https://github.com/Shopify/eslint-plugin-shopify/pull/258))

## [28.0.0] - 2019-04-26

### Changed

* Reverted a previous update from `eslint-plugin-typescript` to `@typescript-eslint/eslint-plugin`. If you have any rules defined under the `@typescript-eslint` namespace, you will need to change those to use the older `typescript` namespace.

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

* `shopify/restrict-full-import` "empty" array pattern (eg: `const [, bar] = foo` errors ([#243](https://github.com/Shopify/eslint-plugin-shopify/pull/243))
* Optimized `shopify/images/no-direct-imports` to be much faster in the common case ([#247](https://github.com/Shopify/eslint-plugin-shopify/pull/247))
* `shopify/react-hooks-strict-return` from crashing when a hook returns undefined ([#251](https://github.com/Shopify/eslint-plugin-shopify/pull/251))

### Added

* updated `eslint-plugin-import` to version `22.4.1` which introduces the [`no-unused-modules`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md) rule.
* updated `eslint-plugin-jest` to version `22.4.1` which introduces the [`no-empty-title`](https://github.com/jest-community/eslint-plugin-jest/commit/c793b7a) rule.
* `shopify/react-hooks-strict-return` Restrict the number of returned items from React hooks. ([#237](https://github.com/Shopify/eslint-plugin-shopify/pull/237))

### Removed

* turned off `node/no-extraneous-require` because it duplicates reported violations from `import/no-extraneous-dependencies` ([#240](https://github.com/Shopify/eslint-plugin-shopify/pull/240)

## [27.0.1] - 2019-04-10

### Changed

* `shopify/jest/no-if` no longer considers if statements in describe blocks as invalid. ([#235](https://github.com/Shopify/eslint-plugin-shopify/pull/235))

### Removed

* turned off `consistent-return` ([#236](https://github.com/Shopify/eslint-plugin-shopify/pull/236)
* turned off `react/jsx-no-bind` ([#239](https://github.com/Shopify/eslint-plugin-shopify/pull/239))
* turned off `babel/camelcase` in typescript config because it overlaps with `@typescript-eslint/camelcase`. ([#238](https://github.com/Shopify/eslint-plugin-shopify/pull/238))
* `shopify/jest/no-if` no longer considers if statements in describe blocks as invalid. ([#235](https://github.com/Shopify/eslint-plugin-shopify/pull/235))

## [27.0.0] - 2019-04-08

### Added

#### Plugin updates and additions ([#233](https://github.com/Shopify/eslint-plugin-shopify/pull/233))

#### Breaking Changes

* `shopify/jquery-dollar-sign-reference` has been removed.
* The `eslint-comments` ruleset has been removed and is now enabled by default as part of core - if you're using `es5`, `esnext`, `react` or `typescript` then you can remove the reference to `eslint-comments`.
* The `ava`, `mocha`, `jquery` and `lodash` rulesets have been removed as these tools are are not commonly used at Shopify.
* The `typescript-react` and `typescript-prettier` rulesets have been removed. Replace `["plugin:shopify/typescript-react"]` with `["plugin:shopify/typescript", "plugin:shopify/react"]` and replace`["plugin:shopify/typescript-prettier"]`  with `["plugin:shopify/prettier"]`
* Updated from `eslint-plugin-typescript` to `@typescript-eslint/eslint-plugin`. If you have any rules defined under the `typescript` namespace, you will need to change those to use the new `@typescript-eslint` namespace.

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

#### New rules

* `shopify/jest/no-if` ([#232](https://github.com/Shopify/eslint-plugin-shopify/pull/232))

Refer to the [Rules of Hooks documentation](https://reactjs.org/docs/hooks-rules.html) to learn more about the following rules.

* `'react-hooks/rules-of-hooks': 'error'`   // Only use Hooks at the top level of a React functional component or from within another custom hook.
* `'react-hooks/exhaustive-deps': 'error'`   // Checks for missing useEffect dependencies


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

| Package |
| ------- |
| eslint-plugin-mocha |
| eslint-plugin-ava |
| eslint-plugin-flowtype |
| eslint-plugin-chai-expect |
| eslint-plugin-lodash |
| eslint-plugin-jquery |

### Changed

* `jest/no-vague-titles` added `every` and `descriptive` as vague words. ([#221](https://github.com/Shopify/eslint-plugin-shopify/pull/221))

## [26.3.0] - 2019-02-21

### Added

* Updated `eslint-plugin-react` and enabled `react/jsx-fragments` rule to prefer using `<>` over `<React.Fragment>` when defining fragments ([#223](https://github.com/Shopify/eslint-plugin-shopify/pull/223))

## [26.2.0] - 2019-02-14

### Added

* `images-no-direct-imports` ([#219](https://github.com/Shopify/eslint-plugin-shopify/pull/219))

## [26.1.2] - 2019-01-02

### Fixed

* `jest/no-vague-titles` no longer flags when the word `call` is used. ([#203](https://github.com/Shopify/eslint-plugin-shopify/pull/203))
* Update `eslint-plugin-prettier` to 3.0.1 so it does not crash when given an unparsable file ([#212](https://github.com/Shopify/eslint-plugin-shopify/pull/212))

### Changed

* `jest/no-vague-titles` added `should` and `properly` to vague rules and new configuration to `allow` words. ([#208](https://github.com/Shopify/eslint-plugin-shopify/pull/208))

## [26.1.1] - 2018-10-31

### Fixed

* `typescript-eslint-parser` pinned at `20.0.0` to avoid [a known issue](https://github.com/eslint/typescript-eslint-parser/issues/535) ([#201](https://github.com/Shopify/eslint-plugin-shopify/pull/201))

## [26.1.0] - 2018-10-30

### Added

* `shopify/no-ancestor-directory-import` ([#149](https://github.com/Shopify/eslint-plugin-shopify/pull/149))

### Fixed

* Set TypeScript parser only on TS files. This makes sure you can extend from the typescript and react configs in either order. Previously you had to make sure typescript came first to avoid using the babel-eslint parser on typescript files. Now we suggest to extend from typescript, and then react to ensure some rules some JSX rules don't get inadventently disabled. ([#200](https://github.com/Shopify/eslint-plugin-shopify/pull/200))

## [26.0.0] - 2018-10-26

### Added

* `shopify/eslint-comments` plugin with [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments) rules:
  - `eslint-comments/disable-enable-pair`,
  - `eslint-comments/no-aggregating-enable`
  - `eslint-comments/no-duplicate-disable`
  - `eslint-comments/no-unlimited-disable`
  - `eslint-comments/no-unused-disable`
  - `eslint-comments/no-unused-enable`
  - `eslint-comments/no-restricted-disable` (disabled)
  - `eslint-comments/no-use` (disabled)

* `shopify/jest/no-snapshots` ([#182](https://github.com/Shopify/eslint-plugin-shopify/pull/182))

### Changed

* Updated `plugin:shopify/prettier`, `plugin:shopify/react`, and `plugin:shopify/typescript` to use `overrides` ([#173](https://github.com/Shopify/eslint-plugin-shopify/pull/173))
* Updated `import/order` rule to enforce ordering of internal, parent and sibling imports ([#189](https://github.com/Shopify/eslint-plugin-shopify/pull/189))
* Updated `func-style` rule to allow arrow functions ([#188](https://github.com/Shopify/eslint-plugin-shopify/pull/188))

### Fixed

* Rolling back `eslint-plugin-graphql` to `2.1.0-0` for multiple schema support ([#195](https://github.com/Shopify/eslint-plugin-shopify/pull/195))

## [25.1.0] - 2018-10-01

### Changed

* Updated `typescript-eslint-parser` dependency to version 19.0.2 to support `typescript-estree`. ([#176](https://github.com/Shopify/eslint-plugin-shopify/pull/176))

## [25.0.1] - 2018-09-25

### Fixed

* Restored `typescript-prettier` config to override `prettier` plugin parser. ([#171](https://github.com/Shopify/eslint-plugin-shopify/pull/171))

## [25.0.0] - 2018-09-25

### Fixed

* Updated `plugin:shopify/prettier` to enable prettier linting. ([#170](https://github.com/Shopify/eslint-plugin-shopify/pull/170))
* `strict-component-boundaries` now consistently uses the resolved path from the app root to perform its checks. This fixes a number of false-positives. ([#160](https://github.com/Shopify/eslint-plugin-shopify/pull/160))

## [24.2.0] - 2018-09-21

### Added

* Added `plugin:shopify/graphql` to module index. ([#168](https://github.com/Shopify/eslint-plugin-shopify/pull/168))

### Fixed

* Updated `no-vague-titles` rule to fix parsing issues in `getMethodName`. ([#167](https://github.com/Shopify/eslint-plugin-shopify/pull/167))

## [24.1.1] - 2018-09-19

* Same as `24.1.0`

## [24.1.0] - 2018-09-19

### Added

* Added `shopify/graphql` config using new `eslint-plugin-graphql` (`2.1.1.`) dependency. ([#165](https://github.com/Shopify/eslint-plugin-shopify/pull/165))

## [24.0.0] - 2018-08-30

### Fixed
* `plugin:shopify/flow` now disables rules checked by Flow's static analyzer. ([#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135))
* `plugin:shopify/prettier` and `plugin:shopify/typescript-prettier` defer missing semicolon rules to a project´s `.prettierrc`. ([#135](https://github.com/Shopify/eslint-plugin-shopify/pull/135))
* Updated `strict-component-boundaries` to exclude fixture imports. ([#117](https://github.com/Shopify/eslint-plugin-shopify/pull/117))
* Updated `strict-component-boundaries` to exclude imports from node_modules. ([#140](https://github.com/Shopify/eslint-plugin-shopify/pull/140))
* Updated `jest/no-vague-titles` to support `.each` syntax. ([#148](https://github.com/Shopify/eslint-plugin-shopify/pull/148))

### Changed
* Namespaced `prefer-pascal-case-enums` and `prefer-singular-enums` under `typescript`. ([#141](https://github.com/Shopify/eslint-plugin-shopify/pull/141))
* **Breaking:** Updated to eslint `v5.4.0`. Consuming projects must be using [supported](https://eslint.org/docs/user-guide/migrating-to-5.0.0#-nodejs-4-is-no-longer-supported) node versions, we recommend `^8.10.0`. See details on the v4 to v5 [migration guide](https://eslint.org/docs/user-guide/migrating-to-5.0.0). ([#151](https://github.com/Shopify/eslint-plugin-shopify/pull/151))

### Added
* `shopify/prefer-singular-enums` ([#132](https://github.com/Shopify/eslint-plugin-shopify/pull/132))
* `shopify/react-no-multiple-render-methods` ([#134](https://github.com/Shopify/eslint-plugin-shopify/pull/134))

* New eslint rules and plugins rules: ([#151](https://github.com/Shopify/eslint-plugin-shopify/pull/151))
  * [`max-classes-per-file`](https://eslint.org/docs/rules/max-classes-per-file) (disabled)
  * [`no-self-assign`](https://eslint.org/docs/rules/no-self-assign)
  * [`require-unicode-regexp`](https://eslint.org/docs/rules/require-unicode-regexp) (disabled)
  * [`no-async-promise-executor`](https://eslint.org/docs/rules/no-async-promise-executor)
  * [`no-misleading-character-class`](https://eslint.org/docs/rules/no-misleading-character-class)
  * [`require-atomic-updates`](https://eslint.org/docs/rules/require-atomic-updates)
  * [`lines-between-class-members`](https://eslint.org/docs/rules/lines-between-class-members)
  * [`max-lines-per-function`](https://eslint.org/docs/rules/max-lines-per-function) (disabled)
  * [`multiline-comment-style`](https://eslint.org/docs/rules/multiline-comment-style) (disabled)
  * [`prefer-object-spread`](https://eslint.org/docs/rules/prefer-object-spread)
  * [`import/no-self-import`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md)
  * [`import/no-cycle`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md)
  * [`import/no-relative-parent-imports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md)
  * [`jest/expect-expect`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md)
  * [`jest/no-jasmine-globals`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md)
  * [`jest/prefer-inline-snapshots`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md) (disabled)
  * [`jest/no-test-return-statement`](https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md)
  * [`node/prefer-global/buffer`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md)
  * [`node/prefer-global/console`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md)
  * [`node/prefer-global/process`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md0)
  * [`node/prefer-global/url-search-params`](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/prefer-global/url-search-params.js)
  * [`node/prefer-global/url`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md)
  * [`node/no-unsupported-features/es-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md) (disabled)
  * [`node/no-unsupported-features/es-syntax`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md) (disabled)
  * [`node/no-unsupported-features/node-builtins`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md)
  * [`react/no-unsafe`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md)
  * [`react/jsx-props-no-multi-spaces`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md)
  * [`typescript/no-inferrable-types`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-inferrable-types.md)
  * [`typescript/no-var-requires`](https://github.com/nzakas/eslint-plugin-typescript/blob/master/docs/rules/no-var-requires.md)


## [23.1.0] - 2018-08-02

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

[Unreleased]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.3.0...HEAD
[26.3.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.2.0...v26.3.0
[26.2.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.1.2...v26.2.0
[26.1.2]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.1.1...v26.1.2
[26.1.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.1.0...v26.1.1
[26.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v26.0.0...v26.1.0
[26.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v25.1.0...v26.0.0
[25.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v25.0.1...v25.1.0
[25.0.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v25.0.0...v25.0.1
[25.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v24.2.0...v25.0.0
[24.2.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v24.1.1...v24.2.0
[24.1.1]: https://github.com/Shopify/eslint-plugin-shopify/compare/v24.1.0...v24.1.1
[24.1.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v24.0.0...v24.1.0
[24.0.0]: https://github.com/Shopify/eslint-plugin-shopify/compare/v23.1.0...v24.0.0
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
