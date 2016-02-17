// see http://eslint.org/docs/rules/#best-practices

module.exports = {
  // Enforces getter/setter pairs in objects
  'accessor-pairs': 0,
  // Enforces return statements in callbacks of array's methods
  'array-callback-return': 2,
  // Treat var statements as if they were block scoped
  'block-scoped-var': 1,
  // Specify the maximum cyclomatic complexity allowed in a program
  'complexity': 0,
  // Require return statements to either always or never specify values
  'consistent-return': 1,
  // Specify curly brace conventions for all control statements
  'curly': [1, 'all'],
  // Require default case in switch statements
  'default-case': 0,
  // Encourages use of dot notation whenever possible
  'dot-notation': [1, {allowKeywords: true}],
  // Enforces consistent newlines before or after dots
  'dot-location': [1, 'property'],
  // Require the use of === and !==
  'eqeqeq': [2, 'allow-null'],
  // Make sure for-in loops have an if statement
  'guard-for-in': 1,
  // Disallow the use of alert, confirm, and prompt
  'no-alert': 1,
  // disallow lexical declarations in case clauses
  'no-case-declarations': 2,
  // Disallow use of arguments.caller or arguments.callee
  'no-caller': 2,
  // Disallow division operators explicitly at beginning of regular expression
  'no-div-regex': 1,
  // Disallow else after a return in an if
  'no-else-return': 0,
  // Disallow use of empty functions
  'no-empty-function': 1,
  // Disallow use of empty destructuring patterns
  'no-empty-pattern': 2,
  // Disallow comparisons to null without a type-checking operator
  'no-eq-null': 0,
  // Disallow use of eval()
  'no-eval': 2,
  // Disallow adding to native types
  'no-extend-native': 2,
  // Disallow unnecessary function binding
  'no-extra-bind': 1,
  // Disallow unnecessary labels
  'no-extra-label': 2,
  // Disallow fallthrough of case statements
  'no-fallthrough': 2,
  // Disallow the use of leading or trailing decimal points in numeric literals
  'no-floating-decimal': 1,
  // Disallow the type conversions with shorter notations
  'no-implicit-coercion': 1,
  // Disallow var and named functions in global scope
  'no-implicit-globals': 1,
  // Disallow use of eval()-like methods
  'no-implied-eval': 2,
  // Disallow this keywords outside of classes or class-like objects
  'no-invalid-this': 0,
  // Disallow usage of __iterator__ property
  'no-iterator': 2,
  // Disallow use of labeled statements
  'no-labels': 2,
  // Disallow unnecessary nested blocks
  'no-lone-blocks': 1,
  // Disallow creation of functions within loops
  'no-loop-func': 2,
  // Disallow the use of magic numbers
  'no-magic-numbers': 0,
  // Disallow use of multiple spaces
  'no-multi-spaces': 1,
  // Disallow use of multiline strings
  'no-multi-str': 0,
  // Disallow reassignments of native objects
  'no-native-reassign': 2,
  // Disallow use of new operator for Function object
  'no-new-func': 2,
  // Disallows creating new instances of String, Number, and Boolean
  'no-new-wrappers': 2,
  // Disallow use of new operator when not part of the assignment or comparison
  'no-new': 1,
  // Disallow use of octal escape sequences in string literals,
  // such as var foo = "Copyright \251";
  'no-octal-escape': 2,
  // Disallow use of octal literals
  'no-octal': 1,
  // Allow reassignment of function parameters
  'no-param-reassign': 0,
  // Disallow use of process.env
  'no-process-env': 2,
  // Disallow usage of __proto__ property
  'no-proto': 2,
  // Disallow declaring the same variable more than once
  'no-redeclare': 2,
  // Disallow use of assignment in return statement
  'no-return-assign': 2,
  // Disallow use of javascript: urls.,
  'no-script-url': 0,
  // Disallow assignments where both sides are exactly the same
  'no-self-assign': 2,
  // Disallow comparisons where both sides are exactly the same
  'no-self-compare': 2,
  // Disallow use of comma operator
  'no-sequences': 1,
  // Restrict what can be thrown as an exception
  'no-throw-literal': 1,
  // Disallow unmodified conditions of loops
  'no-unmodified-loop-condition': 2,
  // Disallow usage of expressions in statement position
  'no-unused-expressions': 1,
  // Disallow unused labels
  'no-unused-labels': 2,
  // Disallow unnecessary .call() and .apply()
  'no-useless-call': 2,
  // Disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': 1,
  // Disallow use of void operator
  'no-void': 2,
  // Disallow usage of configurable warning terms in comments
  'no-warning-comments': 1,
  // Disallow use of the with statement
  'no-with': 2,
  // Require use of the second argument for parseInt()
  'radix': 2,
  // Requires to declare all vars on top of their containing scope
  'vars-on-top': 0,
  // Require immediate function invocation to be wrapped in parentheses
  'wrap-iife': [1, 'inside'],
  // Require or disallow Yoda conditions
  'yoda': [1, 'never'],
};
