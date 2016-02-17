// see http://eslint.org/docs/rules/#nodejs

module.exports = {
  // enforce return after a callback
  'callback-return': [1, ['callback', 'cb', 'next']],
  // disallow require() outside of the top-level module scope
  'global-require': 0,
  // Enforces error handling in callbacks
  'handle-callback-err': [1, '^.*(e|E)rr(or)?$'],
  // Disallow mixing regular variable and require declarations
  'no-mixed-requires': 0,
  // Disallow use of new operator with the require function
  'no-new-require': 1,
  // Disallow string concatenation with __dirname and __filename
  'no-path-concat': 1,
  // Disallow process.exit()
  'no-process-exit': 1,
  // Restrict usage of specified node imports
  'no-restricted-imports': 0,
  // Restrict usage of specified node modules
  'no-restricted-modules': 0,
  // Disallow use of synchronous methods
  'no-sync': 1,
};
