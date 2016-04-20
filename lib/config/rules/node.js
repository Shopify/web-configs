// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

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

  // Disallow import and export declarations for files that don't exist.
  'node/no-missing-import': 'off',
  // Disallow require()s for files that don't exist.
  'node/no-missing-require': 'error',
  // Disallow import and export declarations for files that are not published.
  'node/no-unpublished-import': 'off',
  // Disallow require()s for files that are not published.
  'node/no-unpublished-require': 'error',
  // Disallow unsupported ECMAScript features on the specified version.
  'node/no-unsupported-features': 'off',
  // Suggest correct usage of shebang.
  'node/shebang': 'error',
};
