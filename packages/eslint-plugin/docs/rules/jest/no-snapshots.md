# Disallows jest snapshots. (no-snapshots)

Jest’s snapshot feature allows you to assert that a value has not changed from a stored value in a previous test. The matchers `toMatchSnapshot`, `toMatchInlineSnapshot`, `toThrowErrorMatchingSnapshot` and `toThrowErrorMatchingInlineSnapshot` will generate snapshots when used inside test blocks.

## Rule Details

Using snapshots will often result in poorly documented, difficult to debug tests that encourage writing a single test to cover a broad area of functionality when seperate, more specific tests would be preferred. This rule aims to prevent the use of jest snapshots.

The following patterns are considered warnings:

```js
expect(doWork()).toMatchSnapshot();
```

```js
expect(doWork()).toMatchInlineSnapshot();
```

```js
expect(doWork()).toThrowErrorMatchingSnapshot();
```

```js
expect(doWork()).toThrowErrorMatchingInlineSnapshot();
```

The following patterns are not warnings:

```js
expect(doWork()).toHaveProperty('foo', 'bar');
```

## When Not To Use It

If you do not wish to prevent the use of jest snapshots, you can safely disable this rule.

## Further Reading

- [Shopify Jest Best Practices](https://github.com/Shopify/web-foundation/blob/master/Best%20practices/Jest.md#best-practices)
