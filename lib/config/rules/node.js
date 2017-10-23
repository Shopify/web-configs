// see http://eslint.org/docs/rules/#nodejs and https://github.com/mysticatea/eslint-plugin-node

module.exports = {
  // enforce return after a callback
  'callback-return': ['error', ['callback', 'cb', 'next']],
  // disallow require() outside of the top-level module scope
  'global-require': 'off',
  // Enforces error handling in callbacks
  'handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],
  // disallow use of the Buffer() constructor
  'no-buffer-constructor': 'error',
  // Disallow mixing regular variable and require declarations
  'no-mixed-requires': 'off',
  // Disallow use of new operator with the require function
  'no-new-require': 'error',
  // Disallow string concatenation with __dirname and __filename
  'no-path-concat': 'error',
  // Disallow process.exit()
  'no-process-exit': 'off',
  // Restrict usage of specified node imports
  'no-restricted-imports': 'off',
  // Restrict usage of specified node modules
  'no-restricted-modules': 'off',
  // Disallow use of synchronous methods
  'no-sync': 'off',
  // disallow import declarations of extraneous packages
  // defer to import/no-extraneous-dependencies
  'node/no-extraneous-import': 'off',
  // disallow require() expressions of extraneous packages
  'node/no-extraneous-require': 'error',
  // Enforce either module.exports or exports.
  'node/exports-style': ['error', 'module.exports'],
  // Disallow deprecated API.
  'node/no-deprecated-api': 'error',
  // Disallow import and export declarations for files that don't exist.
  'node/no-missing-import': 'off',
  // Disallow require()s for files that don't exist.
  'node/no-missing-require': 'off',
  // Disallow import and export declarations for files that are not published.
  'node/no-unpublished-import': 'off',
  // Disallow bin files that npm ignores.
  'node/no-unpublished-bin': 'error',
  // Disallow require()s for files that are not published.
  'node/no-unpublished-require': 'off',
  // Disallow unsupported ECMAScript features on the specified version.
  'node/no-unsupported-features': 'off',
  // If you turn this rule on, ESLint comes to address process.exit() as throw in code path analysis.
  'node/process-exit-as-throw': 'off',
  // Suggest correct usage of shebang.
  'node/shebang': 'error',
};
