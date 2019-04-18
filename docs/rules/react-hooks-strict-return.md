# Restrict the number of returned items from React hooks. (react-hooks-strict-return)

Where possible, return two or fewer values from a hook, and return them in a tuple, like `React.useState` (if you have no choice but to return more than three values, return them as a single object instead).

## Rule Details

Examples of **incorrect** code for this rule:


```ts
function useFoo() {
  const bar = 'bar';
  const baz = 'baz';
  const qux = 'qux'
  return [bar, baz, qux];
}
```

Examples of **correct** code for this rule:

```ts
function useFoo() {
  const bar = 'bar';
  const baz = 'baz';
  return [bar, baz];
}
```

```ts
function useFoo() {
  return {
    bar: 'bar',
    baz: 'baz',
    qux: 'qux',
  };
}
```

## When Not To Use It

If you do not want to enforce a stict return style from React hooks, you can safely disable this rule.
