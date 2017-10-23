// see http://eslint.org/docs/rules/#variables

module.exports = {
  // enforce or disallow variable initializations at definition
  'init-declarations': 'off',
  // Disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 'error',
  // Disallow deletion of variables
  'no-delete-var': 'error',
  // Disallow labels that share a name with a variable
  'no-label-var': 'error',
  // Restrict usage of specified global variables
  'no-restricted-globals': 'error',
  // Disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',
  // Disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',
  // Disallow use of undefined when initializing variables
  'no-undef-init': 'error',
  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 'error',
  // Disallow use of undefined variable
  'no-undefined': 'error',
  // Disallow declaration of variables that are not used in the code
  'no-unused-vars': 'error',
  // Disallow use of variables before they are defined
  'no-use-before-define': ['error', 'nofunc'],
};
