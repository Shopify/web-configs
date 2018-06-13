# Disallow useless wrapping elements in favour of fragment shorthand in JSX. (jsx-prefer-fragment-wrappers)

It is common in React for a component to return multiple elements. React Fragments provide a way to wrap a list of child nodes without adding an extra div to the DOM.

## Rule Details

This rule prevents the use of additional wrapping elements and enforces the use of React Fragments instead.

Examples of **incorrect** code for this rule:

```js
render() {
  return (
    <div>
      <ChildA />
      <ChildB />
      <ChildC />
    </div>
  );
}
```

Examples of **correct** code for this rule:

```js
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
```

## When Not To Use It

If you do not wish to enforce the use of React Fragments, you can safely disable this rule.
