# Prevent catch assertions in tests. (jest/no-if)
This rule prevents the use of `expect` inside `catch` blocks.

## Rule Details

Expectations inside a `catch` block can be silently skipped. While Jest provides an `expect.assertions(number)` helper, Shopify rarely uses this feature. Using `toThrow` concisely guarantees that an exception was thrown, and that its contents match expectations.

Examples of **incorrect** code for this rule:

```js
it('foo', () => {
  try {
    foo(); // `foo` may be refactored to not throw exceptions, yet still appears to be tested here.
  } catch (err) {
    expect(err).toMatch(/foo error/);
  }
})

it('bar', async () => {
  try {
    await foo();
  } catch (err) {
    expect(err).toMatch(/foo error/);
  }
})
```

Examples of **correct** code for this rule:

```js
it('foo', () => {
  expect(() => foo()).toThrow(/foo error/);
})

it('bar', async () => {
  await expect(fooPromise).rejects.toThrow(/foo error/);
})
```

## When Not To Use It

If you do not wish to prevent the use of catch expectations in tests, you can safely disable this rule.
