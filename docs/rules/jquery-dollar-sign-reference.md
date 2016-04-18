# Requires that all jQuery objects are assigned to references prefixed with `$`. (jquery-dollar-sign-reference)

Identifying a reference as being a jQuery object makes it immediately obvious what methods are available on that reference.

## Rule Details

This rule aims to ensure that all jQuery references are prefixed with a `$`, and that all references prefixed with a `$` refer only to jQuery objects.

The following patterns are considered warnings:

```js
var foo = $('.bar');
var foo = jQuery('.bar');

var obj = {
  foo: $('.bar');
};

var obj = {};
obj['foo'] = $('.bar');

var foo = $('.bar').addClass('someClass').attr({bar: 'baz'});

var $foo = $.Deferred();
var $foo = 'something else';
var $foo = $('.bar').html(); // actually returns a string
var $foo = $('.bar').attr('someAttr'); // does not return a jQuery object
```

The following patterns are not warnings:

```js
var $foo = $('.bar');

var obj = {
  $foo: $('.bar');
};

var obj = {};
obj['$foo'] = $('.bar');

var $foo = $('.bar').addClass('someClass').attr({bar: 'baz'});
var $foo = something();

var foo = $.Deferred();
var foo = 'something else';
var foo = $('.bar').html();
var foo = $('.bar').attr('someAttr');
```

## When Not To Use It

If you don't use jQuery or you don't care how jQuery references are named, you can safely disable this rule.
