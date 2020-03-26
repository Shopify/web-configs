# Prefer early returns over full-body conditional wrapping in function declarations. (prefer-early-return)

A function whose entire body is nested under a conditional statement adds unnecessary nesting and makes the code harder to read. An early return often makes the block more readable.

## Rule Details

The following patterns are considered warnings:

```js
function foo() {
  if (a) {
    b();
    c();
  }
}
```

The following patterns are not warnings:

```js
function foo() {
  if (!a) { return; }

  b();
  c();
}

function bar() {
  if (a) {
    b();
    c();
  }

  d();
}

function baz() {
  if (a) {
    b();
    c();
  } else {
    d();
  }
}
```

### Options

This plugin takes one option: an object with a integer `maximumStatements` property. This property specifies the maximum number of statements in the conditional for which a full-function body conditional should be allowed. By default, this value is `1`, so the following will **not** be considered a warning:

```js
function foo() {
  if (a) {
    b();
  }
}
```

Setting `maximumStatements` to `0` will cause the above to be a warning. Setting `maximumStatements` to `2` would cause the following **not** to be considered a warning:

```js
function foo() {
  if (a) {
    b();
    c();
  }
}
```

## When Not To Use It

If you don't care about conditionals that span the entire body of functions, or dislike early returns, you can safely disable this rule.
