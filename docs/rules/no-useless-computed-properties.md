# Prevents the usage of unnecessary computed properties. (no-useless-computed-properties)

Computed properties allow you to define methods and properties of an object or class without having to know exact name of the key.

## Rule Details

This rule aims to prevent the use of a computed property when the value being computed is a literal (and could therefore omit the computed property altogether).

The following patterns are considered warnings:

```js
var foo = {
  ['bar']: true,
}

class Foo {
  ['bar']() {}
  static [123]() {}
}
```

The following patterns are not warnings:

```js
var foo = {
  'bar': true,
  baz: true,
  [qux]: true,
  [buzz()]: true,
}
```

## When Not To Use It

If you do not care about unnecessarily computed properties, you can safely disable this rule.

## Further Reading

- [Object initializers on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
