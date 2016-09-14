// see http://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  // Require braces in arrow function body
  'arrow-body-style': 'off',
  // Require parens in arrow function arguments
  'arrow-parens': ['warn', 'always'],
  // Require space before/after arrow function's arrow
  'arrow-spacing': ['warn', {before: true, after: true}],
  // Verify super() callings in constructors
  'constructor-super': 'error',
  // Enforce the spacing around the * in generator functions
  'generator-star-spacing': ['warn', 'after'],
  // Disallow modifying variables of class declarations
  'no-class-assign': 'warn',
  // Disallow arrow functions where they could be confused with comparisons
  'no-confusing-arrow': ['error', {allowParens: true}],
  // Disallow modifying variables that are declared using const
  'no-const-assign': 'error',
  // Disallow duplicate name in class members
  'no-dupe-class-members': 'error',
  // Disallow duplicate module imports (disabled, as import/no-duplicates does the same job but better)
  'no-duplicate-imports': 'off',
  // Disallow use of the new operator with the Symbol object
  'no-new-symbol': 'error',
  // Disallow to use this/super before super() calling in constructors.
  'no-this-before-super': 'error',
  // Disallow unnecessary computed property keys in object literals
  'no-useless-computed-key': 'off',
  // Disallow unnecessary constructor
  'no-useless-constructor': 'warn',
  // Disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': 'error',
  // Require let or const instead of var
  'no-var': 'error',
  // Require method and property shorthand syntax for object literals
  'object-shorthand': ['warn', 'always', {avoidQuotes: true}],
  // Suggest using arrow functions as callbacks
  'prefer-arrow-callback': ['error', {allowNamedFunctions: true}],
  // Suggest using of const declaration for variables that are never modified after declared
  'prefer-const': 'warn',
  // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
  'prefer-numeric-literals': 'error',
  // Suggest using the rest parameters instead of arguments
  'prefer-rest-params': 'error',
  // Suggest using the spread operator instead of .apply()
  'prefer-spread': 'error',
  // Suggest using Reflect methods where applicable
  'prefer-reflect': 'off',
  // Suggest using template literals instead of strings concatenation
  'prefer-template': 'warn',
  // Enforce spacing between rest and spread operators and their expressions
  'rest-spread-spacing': ['warn', 'never'],
  // Disallow generator functions that do not have yield
  'require-yield': 'error',
  // Sort import declarations within module
  'sort-imports': 'off',
  // Require symbol descriptions
  'symbol-description': 'warn',
  // Enforce spacing around embedded expressions of template strings
  'template-curly-spacing': ['warn', 'never'],
  // Enforce spacing around the * in yield* expressions
  'yield-star-spacing': ['warn', {before: false, after: true}],
};
