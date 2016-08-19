// see http://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Disallow or enforce trailing commas
  'comma-dangle': ['warn', 'always-multiline'],
  // Disallow assignment in conditional expressions
  'no-cond-assign': 'error',
  // Disallow use of console
  'no-console': 'warn',
  // Disallow use of constant expressions in conditions
  'no-constant-condition': ['warn', {checkLoops: false}],
  // Disallow control characters in regular expressions
  'no-control-regex': 'error',
  // Disallow use of debugger
  'no-debugger': 'warn',
  // Disallow duplicate arguments in functions
  'no-dupe-args': 'error',
  // Disallow duplicate keys when creating object literals
  'no-dupe-keys': 'error',
  // Disallow a duplicate case label.
  'no-duplicate-case': 'error',
  // Disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 'error',
  // Disallow empty statements
  'no-empty': 'warn',
  // Disallow assigning to the exception in a catch block
  'no-ex-assign': 'error',
  // Disallow double-negation boolean casts in a boolean context
  'no-extra-boolean-cast': 'warn',
  // Disallow unnecessary parentheses
  'no-extra-parens': 'off',
  // Disallow unnecessary semicolons
  'no-extra-semi': 'warn',
  // Disallow overwriting functions written as function declarations
  'no-func-assign': 'warn',
  // Disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'warn',
  // Disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',
  // Disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'warn',
  // Disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 'error',
  // Disallow use of Object.prototypes builtins directly
  'no-prototype-builtins': 'off',
  // Disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 'warn',
  // Disallow sparse arrays
  'no-sparse-arrays': 'warn',
  // Disallow template literal placeholder syntax in regular strings
  'no-template-curly-in-string': 'error',
  // Disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 'error',
  // Disallow control flow statements in finally blocks
  'no-unsafe-finally': 'error',
  // Disallow negation of the left operand of an in expression
  'no-unsafe-negation': 'warn',
  // Disallow comparisons with the value NaN
  'use-isnan': 'error',
  // Ensure JSDoc comments are valid
  'valid-jsdoc': 'off',
  // Ensure that the results of typeof are compared against a valid string
  'valid-typeof': 'error',
  // Avoid code that looks like two expressions but is actually one
  'no-unexpected-multiline': 'warn',
};
