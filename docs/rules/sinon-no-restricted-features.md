# Restricts the use of specified sinon features. (sinon-no-restricted-features)

[`sinon`](http://sinonjs.org) offers many of features, some of which you may not want to use in your codebase.

## Rule Details

By default, no properties are restricted.

### Options

This rule takes a single object option. That option allows you to specify any set of the following options:

### `restricted`

This option should be an array that specifies the properties of `sinon` that are restricted. With `{restricted: ['mock', 'clock']}`, the following patterns are considered warnings:

```js
sinon.mock(myObject).expects('myMethod');
sinon.clock.tick(300);
```

The following patterns are not warnings:

```js
sinon.stub(myObject, 'myMethod');
somethingElse.mock();
```

### `aliases`

This option should be an array that specifies other identifiers that are used in place in `sinon` in your codebase. This can be useful if you create a separate global for a sinon sandbox. You must explicitly add `sinon` to this array for it to continue to be flagged. With `{aliases: ['sandbox'], restricted: ['mock']}`, the following patterns are considered warnings:

```js
sandbox.mock(myObject).expects('myMethod');
```

The following patterns are not warnings:

```js
sinon.mock(myObject).expects('myMethod');
somethingElse.mock();
```

### `injected`

This option should be a boolean that specifies whether `sinon` is injected into the context (that is, its properties are available on `this`). With `{injected: true, restricted: ['mock']}`, the following patterns are considered warnings:

```js
sinon.mock(myObject).expects('myMethod');
this.mock(myObject).expects('myMethod');
```

The following patterns are not warnings:

```js
sandbox.mock(myObject).expects('myMethod');
this.stub(myObject, 'myMethod');
somethingElse.mock();
```

## When Not To Use It

If you don’t want to restrict any `sinon` properties, you can safely disable this rule.
