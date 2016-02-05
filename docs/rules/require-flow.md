# Requires (or disallows) @flow declarations be present at the top of each file. (require-flow)

[Flow](http://flowtype.org/) is a static type checker designed by Facebook. It is highly recommended that you use this on all JavaScript project.

## Rule Details

This rule takes one argument. If it is `"always"` (default) then it warns when it does not find a flow declaration (`/* @flow */`) at the top of a file. If `"explicit"` it accepts either `@flow` or `@noflow`. If `"never"` then it warns if a flow declaration is present.

The following patterns are considered warnings when using the default or explicitly setting the argument to `"always"` or `"explicit"`:

```javascript
function noFlow(...args) { return 'sorry!'; }
```

The following patterns are not warnings when using the default or explicitly setting the argument to `"always"`:

```javascript
/* @flow */

function iHaveTheFlow(...args: Array<any>): string { return 'awesome!'; }
```

The success/ failure cases are reversed when the argument is explicitly `"never"`.

Additionally, the following patterns are not warnings when explicitly setting the argument to `"explicit"`:

```javascript
/* @noflow */

function iHaveTheFlow(...args: Array<any>): string { return 'awesome!'; }
```

## When Not To Use It

If you do not wish to enforce the use or disuse of Flow for all files, then you can safely disable this rule.
