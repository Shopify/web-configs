// see http://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Disallow or enforce trailing commas
  'comma-dangle': [1, 'always-multiline'],
  // Disallow assignment in conditional expressions
  'no-cond-assign': 2,
  // Disallow use of console
  'no-console': 1,
  // Disallow use of constant expressions in conditions
  'no-constant-condition': 1,
  // Disallow control characters in regular expressions
  'no-control-regex': 2,
  // Disallow use of debugger
  'no-debugger': 1,
  // Disallow duplicate arguments in functions
  'no-dupe-args': 2,
  // Disallow duplicate keys when creating object literals
  'no-dupe-keys': 2,
  // Disallow a duplicate case label.
  'no-duplicate-case': 2,
  // Disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 2,
  // Disallow empty statements
  'no-empty': 1,
  // Disallow assigning to the exception in a catch block
  'no-ex-assign': 2,
  // Disallow double-negation boolean casts in a boolean context
  'no-extra-boolean-cast': 1,
  // Disallow unnecessary parentheses
  'no-extra-parens': 0,
  // Disallow unnecessary semicolons
  'no-extra-semi': 1,
  // Disallow overwriting functions written as function declarations
  'no-func-assign': 1,
  // Disallow function or variable declarations in nested blocks
  'no-inner-declarations': 1,
  // Disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 2,
  // Disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 1,
  // Disallow negation of the left operand of an in expression
  'no-negated-in-lhs': 1,
  // Disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 2,
  // Disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 1,
  // Disallow sparse arrays
  'no-sparse-arrays': 1,
  // Disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 2,
  // Disallow comparisons with the value NaN
  'use-isnan': 2,
  // Ensure JSDoc comments are valid
  'valid-jsdoc': 0,
  // Ensure that the results of typeof are compared against a valid string
  'valid-typeof': 2,
  // Avoid code that looks like two expressions but is actually one
  'no-unexpected-multiline': 1,
};
