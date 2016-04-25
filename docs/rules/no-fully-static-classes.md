# Prevents the declaration of classes consisting only of static members. (no-fully-static-classes)

## Rule Details

This rule recommends using object literals instead of defining classes consisting only of static members. Fully-static classes are functionally no different from object literals, other than that they can (pointlessly) be instantiated with the `new` keyword.

The following patterns are considered warnings:

```js
class Foo {
  static foo = true;
}

class Bar {
  static foo = false;
  static bar() {};
}
```

The following patterns are not considered warnings:

```js
class Foo {
  foo = true;
  static bar() {}
}

class Bar {
  static foo = true;
  bar() {}
  baz() {}
}

class Baz {}

class Qux extends Buzz {
  static foo = true;
  static bar() {}
}
```

## When Not To Use It

If you do not wish to enforce prevent declarations of fully-static classes, you can safely disable this rule.
