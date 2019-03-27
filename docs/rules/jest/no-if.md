# Prevent if statements in tests. (jest/no-if)
This rule prevents the use of if statements in tests.

## Rule Details

If statments in tests is usually an indication that a test is attempting to cover too much, and are at risk of not testing the logic they intend to. Each branch of code executing within an if statement will likely be better served by a test devoted to it.

Examples of **incorrect** code for this rule:

```js
it('foo', () => {
  if('bar') {
    // an if statement here is invalid
    // you are probably testing too much
  }
})

```

Examples of **correct** code for this rule:

```js
it('foo', () => {
  // only test the 'foo' case
})

it('bar', () => {
  // test the 'bar' case separately
})
```

## When Not To Use It

If you do not wish to prevent the use of if statements in tests, you can safely disable this rule.
