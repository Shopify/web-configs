// see http://eslint.org/docs/rules/#best-practices

module.exports = {
  // Enforces getter/setter pairs in objects
  'accessor-pairs': 'off',
  // Enforces return statements in callbacks of array's methods
  'array-callback-return': 'error',
  // Treat var statements as if they were block scoped
  'block-scoped-var': 'error',
  // Enforce that class methods utilize this
  'class-methods-use-this': 'off',
  // Specify the maximum cyclomatic complexity allowed in a program
  complexity: 'off',
  // Require return statements to either always or never specify values
  'consistent-return': 'error',
  // Specify curly brace conventions for all control statements
  curly: ['error', 'all'],
  // Require default case in switch statements
  'default-case': 'off',
  // Encourages use of dot notation whenever possible
  'dot-notation': ['error', {allowKeywords: true}],
  // Enforces consistent newlines before or after dots
  'dot-location': ['error', 'property'],
  // Require the use of === and !==
  eqeqeq: ['error', 'allow-null'],
  // Make sure for-in loops have an if statement
  'guard-for-in': 'error',
  // Disallow the use of alert, confirm, and prompt
  'no-alert': 'error',
  // disallow lexical declarations in case clauses
  'no-case-declarations': 'error',
  // Disallow use of arguments.caller or arguments.callee
  'no-caller': 'error',
  // Disallow division operators explicitly at beginning of regular expression
  'no-div-regex': 'error',
  // Disallow else after a return in an if
  'no-else-return': 'off',
  // Disallow use of empty functions
  'no-empty-function': 'error',
  // Disallow use of empty destructuring patterns
  'no-empty-pattern': 'error',
  // Disallow comparisons to null without a type-checking operator
  'no-eq-null': 'off',
  // Disallow use of eval()
  'no-eval': 'error',
  // Disallow adding to native types
  'no-extend-native': 'error',
  // Disallow unnecessary function binding
  'no-extra-bind': 'error',
  // Disallow unnecessary labels
  'no-extra-label': 'error',
  // Disallow fallthrough of case statements
  'no-fallthrough': 'error',
  // Disallow the use of leading or trailing decimal points in numeric literals
  'no-floating-decimal': 'error',
  // Disallow reassignments of native objects
  'no-global-assign': 'error',
  // Disallow the type conversions with shorter notations
  'no-implicit-coercion': 'error',
  // Disallow var and named functions in global scope
  'no-implicit-globals': 'error',
  // Disallow use of eval()-like methods
  'no-implied-eval': 'error',
  // Disallow this keywords outside of classes or class-like objects
  'no-invalid-this': 'off',
  // Disallow usage of __iterator__ property
  'no-iterator': 'error',
  // Disallow use of labeled statements
  'no-labels': 'error',
  // Disallow unnecessary nested blocks
  'no-lone-blocks': 'error',
  // Disallow creation of functions within loops
  'no-loop-func': 'error',
  // Disallow the use of magic numbers
  'no-magic-numbers': 'off',
  // Disallow use of multiple spaces
  'no-multi-spaces': 'error',
  // Disallow use of multiline strings
  'no-multi-str': 'off',
  // Disallow use of new operator for Function object
  'no-new-func': 'error',
  // Disallows creating new instances of String, Number, and Boolean
  'no-new-wrappers': 'error',
  // Disallow use of new operator when not part of the assignment or comparison
  'no-new': 'error',
  // Disallow use of octal escape sequences in string literals,
  // such as var foo = "Copyright \251";
  'no-octal-escape': 'error',
  // Disallow use of octal literals
  'no-octal': 'error',
  // Allow reassignment of function parameters
  'no-param-reassign': 'off',
  // Disallow use of process.env
  'no-process-env': 'error',
  // Disallow usage of __proto__ property
  'no-proto': 'error',
  // Disallow declaring the same variable more than once
  'no-redeclare': 'error',
  // Disallow certain object properties
  'no-restricted-properties': 'off',
  // Disallow use of assignment in return statement
  'no-return-assign': 'error',
  // Disallows unnecessary return await
  'no-return-await': 'error',
  // Disallow use of javascript: urls.,
  'no-script-url': 'off',
  // Disallow assignments where both sides are exactly the same
  'no-self-assign': 'error',
  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 'error',
  // Disallow use of comma operator
  'no-sequences': 'error',
  // Restrict what can be thrown as an exception
  'no-throw-literal': 'error',
  // Disallow unmodified conditions of loops
  'no-unmodified-loop-condition': 'error',
  // Disallow usage of expressions in statement position
  'no-unused-expressions': 'error',
  // Disallow unused labels
  'no-unused-labels': 'error',
  // Disallow unnecessary .call() and .apply()
  'no-useless-call': 'error',
  // Disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 'error',
  // Disallow unnecessary usage of escape character
  'no-useless-escape': 'error',
  // Disallow redundant return statements
  'no-useless-return': 'error',
  // Disallow use of void operator
  'no-void': 'error',
  // Disallow usage of configurable warning terms in comments
  'no-warning-comments': 'error',
  // Disallow use of the with statement
  'no-with': 'error',
  // Require using Error objects as Promise rejection reasons
  'prefer-promise-reject-errors': ['error', {allowEmptyReject: true}],
  // Require use of the second argument for parseInt()
  radix: 'error',
  // Disallow async functions which have no await expression
  'require-await': 'error',
  // Requires to declare all vars on top of their containing scope
  'vars-on-top': 'off',
  // Require immediate function invocation to be wrapped in parentheses
  'wrap-iife': ['error', 'inside'],
  // Require or disallow Yoda conditions
  yoda: ['error', 'never'],
};
