---
'@shopify/eslint-plugin': major
---

Update required eslint version to `^8.56.0` as required by the newest version of `@typescript-eslint/eslint-plugin`.

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
