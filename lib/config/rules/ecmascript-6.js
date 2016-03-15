// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  // Require braces in arrow function body
  'arrow-body-style': [2, 'as-needed'],
  // Require parens in arrow function arguments
  'arrow-parens': 0,
  // Require space before/after arrow function's arrow
  'arrow-spacing': [1, {before: true, after: true}],
  // Verify super() callings in constructors
  'constructor-super': 2,
  // Enforce the spacing around the * in generator functions
  'generator-star-spacing': 0,
  // Disallow modifying variables of class declarations
  'no-class-assign': 1,
  // Disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': [2, {allowParens: false}],
  // Disallow modifying variables that are declared using const
  'no-const-assign': 2,
  // Disallow duplicate name in class members
  'no-dupe-class-members': 2,
  // Disallow use of the new operator with the Symbol object
  'no-new-symbol': 2,
  // Disallow to use this/super before super() calling in constructors.
  'no-this-before-super': 2,
  // Disallow unnecessary constructor
  'no-useless-constructor': 1,
  // Require let or const instead of var
  'no-var': 2,
  // Require method and property shorthand syntax for object literals
  'object-shorthand': 0,
  // Suggest using arrow functions as callbacks
  'prefer-arrow-callback': 2,
  // Suggest using of const declaration for variables that are never modified after declared
  'prefer-const': 1,
  // Suggest using the rest parameters instead of arguments
  'prefer-rest-params': 2,
  // Suggest using the spread operator instead of .apply()
  'prefer-spread': 2,
  // Suggest using Reflect methods where applicable
  'prefer-reflect': 0,
  // Suggest using template literals instead of strings concatenation
  'prefer-template': 1,
  // Disallow generator functions that do not have yield
  'require-yield': 2,
  // Enforce spacing around embedded expressions of template strings
  'template-curly-spacing': [1, 'never'],
  // Enforce spacing around the * in yield* expressions
  'yield-star-spacing': [1, {before: false, after: true}],
};
