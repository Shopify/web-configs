# Disallows jest allMocks methods.

This rule discourages the use of overly broad Jest methods such as `resetAllMocks`, `clearAllMocks`, `restoreAllMocks` and `resetModules`.

## Rule Details

These methods are discouraged because there should be explicit connections to the contents of your test file. Mocks should be reset/cleared/restored individually based on the purpose of your test suite.

The following patterns are considered warnings:

```js
jest.resetAllMocks();
```

```js
jest.clearAllMocks();
```

```js
jest.restoreAllMocks();
```

```js
jest.resetModules();
```

The following patterns are not warnings:

```js
jest.mock();
```

## Further Reading

- [Shopify Jest Best Practices](https://github.com/Shopify/web-foundation/blob/master/Best%20practices/Jest.md#best-practices)
