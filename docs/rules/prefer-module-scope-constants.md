# Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope. (prefer-module-scope-constants)

We use screaming snake case variables to denote truly constant data used for other operations in the file. However, we don’t use this naming convention for all constants — only those that are only ever generated once, at module definition. This rule restricts this naming convention to be used only for these types of constants.

## Rule details

Two different errors are flagged by the rule: screaming snake case bindings that are not defined using `const`, and those that do not appear at module scope.

The following patterns are considered warnings:

```js
// these kinds of values should never change
let MY_VALUE = true;

function myFunction() {
  // this is just a regular `const`, use camelcase instead.
  const OTHER_VALUE = false;
}

if (condition()) {
  // same here, just a regular `const`.
  const FINAL_VALUE = true;
}
```

The following patterns are not warnings:

```js
const MY_VALUE = true;

function myFunction() {
  const otherValue = false;
}
```


