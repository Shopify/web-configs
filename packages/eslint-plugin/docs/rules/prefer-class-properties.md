# Prefer class properties to assignment of literals in constructors. (prefer-class-properties)

Class properties allow you to set initial values for instance properties, instead of setting these in the constructor of a class.

## Rule Details

This rule takes one argument. If it is `'always'` (default) then it warns when it finds an assignment to `this` in a class constructor that could instead be a class property. If set to `'never'`, it will warn when any class properties are found.

The following assignments are all considered warnings when using the default or explicitly setting the argument to `'always'`:

```js
class Foo {
  constructor() {
    this.bar = 'bar';
    this.baz = 123;
    this.qux = {
      foo: 'bar',
      baz: [1, 2, 3];
    };
  }
}
```

The following assignments are not warnings when using the default or explicitly setting the argument to `'always'`:

```js
class Foo {
  constructor(baz) {
    this.baz = baz;
    this.qux = this.initialize();
  }
}
```

The following are considered warnings when setting the argument to `'never'`:

```js
class Foo {
  baz = 123;
  qux = something();
}
```

## When Not To Use It

If you do not care how literal instance members are assigned, you can safely disable this rule.

## Further Reading

- [Class properties proposal](https://github.com/jeffmo/es-class-fields-and-static-properties)
