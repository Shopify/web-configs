// see http://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  // Enforce spacing inside array brackets
  'array-bracket-spacing': 'off',
  // Disallow or enforce spaces inside of single line blocks
  'block-spacing': ['warn', 'always'],
  // Enforce one true brace style
  'brace-style': ['warn', '1tbs', {allowSingleLine: true}],
  // Require camel case names
  'camelcase': ['warn', {properties: 'always'}],
  // Enforce spacing before and after comma
  'comma-spacing': ['warn', {before: false, after: true}],
  // Enforce one true comma style
  'comma-style': ['warn', 'last'],
  // Require or disallow padding inside computed properties
  'computed-property-spacing': ['warn', 'never'],
  // Enforces consistent naming when capturing the current execution context
  'consistent-this': ['warn', 'self'],
  // Enforce newline at the end of file, with no multiple empty lines
  'eol-last': 'warn',
  // Don't require function expressions to have a name
  'func-names': 'off',
  // Enforces use of function declarations or expressions
  'func-style': ['warn', 'declaration'],
  // Blacklist certain identifiers to prevent them being used
  'id-blacklist': 'off',
  // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
  'id-length': ['warn', {
    min: 2,
    properties: 'always',
    exceptions: ['x', 'y', 'i', 'j', 't', '_', '$'],
  }],
  // Require identifiers to match the provided regular expression
  'id-match': 'off',
  // This option sets a specific tab width for your code
  'indent': ['warn', 2],
  // Specify whether double or single quotes should be used in JSX attributes
  'jsx-quotes': ['warn', 'prefer-double'],
  // Enforces spacing between keys and values in object literal properties
  'key-spacing': ['warn', {beforeColon: false, afterColon: true}],
  // Enforce spacing before and after keywords
  'keyword-spacing': ['warn', {before: true, after: true, overrides: {}}],
  // Disallow mixed "LF" and "CRLF" as linebreaks
  'linebreak-style': 'off',
  // Enforces empty lines around comments
  'lines-around-comment': ['warn', {beforeBlockComment: true}],
  // Specify the maximum depth callbacks can be nested
  'max-nested-callbacks': 'off',
  // Specify the maximum number of statements allowed per line
  'max-statements-per-line': ['warn', {max: 2}],
  // Require a capital letter for constructors
  'new-cap': 'off',
  // Disallow the omission of parentheses when invoking a constructor with no arguments
  'new-parens': 'warn',
  // Allow/disallow an empty newline after var statement
  'newline-after-var': 'off',
  // Require newline before `return` statement
  'newline-before-return': 'off',
  // Enforce newline after each call when chaining the calls
  'newline-per-chained-call': ['warn', {ignoreChainWithDepth: 3}],
  // Disallow use of the Array constructor
  'no-array-constructor': 'error',
  // Disallow use of the continue statement
  'no-continue': 'off',
  // Disallow comments inline after code
  'no-inline-comments': 'off',
  // Disallow if as the only statement in an else block
  'no-lonely-if': 'warn',
  // Disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'warn',
  // Disallow multiple empty lines
  'no-multiple-empty-lines': 'warn',
  // Disallow nested ternary expressions
  'no-nested-ternary': 'warn',
  // Disallow use of the Object constructor
  'no-new-object': 'warn',
  // Disallow space between function identifier and application
  'no-spaced-func': 'warn',
  // Disallow the use of ternary operators
  'no-ternary': 'off',
  // Disallow trailing whitespace at the end of lines
  'no-trailing-spaces': 'warn',
  // Allow dangling underscores in identifiers
  'no-underscore-dangle': 'off',
  // Disallow the use of Boolean literals in conditional expressions
  'no-unneeded-ternary': 'warn',
  // Disallow whitespace before properties
  'no-whitespace-before-property': 'error',
  // Require or disallow padding inside curly braces
  'object-curly-spacing': ['warn', 'never'],
  // Enforce placing object properties on separate lines
  'object-property-newline': 'off',
  // Allow or disallow one variable declaration per function
  'one-var': ['warn', 'never'],
  // Require or disallow an newline around variable declarations
  'one-var-declaration-per-line': ['warn', 'initializations'],
  // Require assignment operator shorthand where possible or prohibit it entirely
  'operator-assignment': ['warn', 'always'],
  // Enforce operators to be placed before or after line breaks
  'operator-linebreak': ['warn', 'after', {overrides: {'?': 'before', ':': 'before'}}],
  // Enforce padding within blocks
  'padded-blocks': 'off',
  // Require quotes around object literal property names
  'quote-props': ['warn', 'as-needed'],
  // Specify whether backticks, double or single quotes should be used
  'quotes': ['warn', 'single', 'avoid-escape'],
  // Enforce spacing before and after semicolons
  'semi-spacing': ['warn', {before: false, after: true}],
  // Require or disallow use of semicolons instead of ASI
  'semi': ['warn', 'always'],
  // Sort import declarations within module
  'sort-imports': 'off',
  // Sort variables within the same declaration block
  'sort-vars': 'off',
  // Require or disallow space before blocks
  'space-before-blocks': ['warn', 'always'],
  // Require or disallow space before function opening parenthesis
  'space-before-function-paren': ['warn', 'never'],
  // Require or disallow spaces inside parentheses
  'space-in-parens': ['warn', 'never'],
  // Require spaces around operators
  'space-infix-ops': 'warn',
  // Require or disallow spaces before/after unary operators (words on by default, nonwords)
  'space-unary-ops': ['warn', {words: true, nonwords: false}],
  // Require or disallow a space immediately following the // or /* in a comment
  'spaced-comment': ['warn', 'always', {markers: ['=']}],
  // Require regex literals to be wrapped in parentheses
  'wrap-regex': 'off',
};
