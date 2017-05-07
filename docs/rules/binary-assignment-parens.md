# Requires (or disallows) assignments of binary, boolean-producing expressions to be wrapped in parentheses. (binary-assignment-parens)

## Rule Details

This rule aims to ensure consistency in how assignment of binary expressions (specifically those that generate booleans) are treated with respect to parentheses. By default, this rule forces all such expressions (including those nested in logical expressions) to be wrapped in parentheses to remove ambiguity caused by many `=` operators in a single line of code.

The following patterns are considered warnings when using the default or explicitly setting the argument to `"always"`:

```js
var foo = 'foo' === 'baz';
var bar = 'foo' !== 'bar' && foo >= 10;

var baz;
baz = 12 < 15 || 12 < 16 || 12 < 17;
```

The following patterns are not warnings:

```js
var foo = ('foo' === 'baz');
var bar = ('foo' !== 'bar') && (foo >= 10);

var baz;
baz = (12 < 15) || (12 < 16) || (12 < 17);

var qux = (foo != bar) || bar;
```

The success/ failure cases are reversed when the argument is explicitly `"never"`.

## When Not To Use It

If you do not wish to enforce the use or disuse of parentheses around binary assignment expressions, then you can safely disable this rule.
