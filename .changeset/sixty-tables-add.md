---
'@shopify/eslint-plugin': major
---

Use `eslint-plugin-import-x` instead of `eslint-plugin-import`. This is faster, while retaing the same features - notably it avoids a large speed degredation when using the no-cycle rule with `eslint-plugin-import`.

Rule names are the same in `eslint-plugin-import-x`, but the plugin name is `import-x` instead of `import`. You will need to change all rules and settings that define or reference `import/THING` to `import-x/THING`. e.g. the rule `import/no-cycle` becomes `import-x/no-cycle` and the setting `import/parsers` becomes `import-x/parsers`. You should check the `eslint-plugin-import-x` documentation to see if the settings for any rules differ from their `eslint-plugin-import` counterparts.

Configuration of resolvers has switched from using `import/resolver` to `import-x/resolver-next`. Any configuration of resolvers shuld be done using the new setting per https://www.npmjs.com/package/eslint-plugin-import-x#resolvers. We now configure `eslint-import-resolver-typescript` as the default resolver for typescript files so you no longer need to configure a resolver unless you need to override the default options.
