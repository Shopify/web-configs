// see http://eslint.org/docs/rules/#nodejs

module.exports = {
  // enforce return after a callback
  'callback-return': ['warn', ['callback', 'cb', 'next']],
  // disallow require() outside of the top-level module scope
  'global-require': 'off',
  // Enforces error handling in callbacks
  'handle-callback-err': ['warn', '^.*(e|E)rr(or)?$'],
  // Disallow mixing regular variable and require declarations
  'no-mixed-requires': 'off',
  // Disallow use of new operator with the require function
  'no-new-require': 'warn',
  // Disallow string concatenation with __dirname and __filename
  'no-path-concat': 'warn',
  // Disallow process.exit()
  'no-process-exit': 'warn',
  // Restrict usage of specified node imports
  'no-restricted-imports': 'off',
  // Restrict usage of specified node modules
  'no-restricted-modules': 'off',
  // Disallow use of synchronous methods
  'no-sync': 'warn',
};
