// see http://eslint.org/docs/rules/#variables

module.exports = {
  // enforce or disallow variable initializations at definition
  'init-declarations': 0,
  // Disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 2,
  // Disallow deletion of variables
  'no-delete-var': 2,
  // Disallow labels that share a name with a variable
  'no-label-var': 2,
  // Disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 2,
  // Disallow declaration of variables already declared in the outer scope
  'no-shadow': 2,
  // Disallow use of undefined when initializing variables
  'no-undef-init': 2,
  // Disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 2,
  // Disallow use of undefined variable
  'no-undefined': 2,
  // Disallow declaration of variables that are not used in the code
  'no-unused-vars': 1,
  // Disallow use of variables before they are defined
  'no-use-before-define': [2, 'nofunc'],
};
