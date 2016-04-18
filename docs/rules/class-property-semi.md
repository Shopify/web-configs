# Requires (or disallows) semicolons for class properties. (class-property-semi)

## Rule Details

This rule takes one argument. If it is `'always'` (default) then it warns when it does not find a semicolon at the end of a class property. If `'never'` then it warns if a semicolon is present.

The following patterns are considered warnings when using the default or explicitly setting the argument to `'always'`:

```js
class Foo {
  bar = true
  static baz = false
}
```

The following patterns are not warnings when using the default or explicitly setting the argument to `'always'`:

```js
class Foo {
  bar = true;
  static baz = false;
}
```

The success/ failure cases are reversed when the argument is explicitly `'never'`.

## When Not To Use It

If you do not wish to enforce semicolons for class properties, then you can safely disable this rule.
