const nodePlugin = require('eslint-plugin-node');

module.exports = [
  {
    languageOptions: {
      globals: {
        node: true,
      },
    },

    plugins: {
      node: nodePlugin,
    },

    rules: {
      // Those rules will be remove with ESLint 7.0. We use the one from
      // the node package, they can be remove when we move to eslint 7.0.
      'callback-return': 'off',
      'global-require': 'off',
      'handle-callback-err': 'off',
      'no-mixed-requires': 'off',
      'no-new-require': 'off',
      'no-path-concat': 'off',
      'no-process-exit': 'off',
      'no-restricted-import': 'off',
      'no-restricted-modules': 'off',
      'no-sync': 'off',
      // Enforce return after a callback
      'node/callback-return': ['error', ['callback', 'cb', 'next']],
      // Disallow require() outside of the top-level module scope
      'node/global-require': 'off',
      // Enforces error handling in callbacks
      'node/handle-callback-err': ['error', '^.*(e|E)rr(or)?$'],
      // Disallow use of the Buffer() constructor
      'no-buffer-constructor': 'error',
      // Disallow mixing regular variable and require declarations
      'node/no-mixed-requires': 'off',
      // Disallow use of new operator with the require function
      'node/no-new-require': 'error',
      // Disallow string concatenation with __dirname and __filename
      'node/no-path-concat': 'error',
      // Disallow process.exit()
      'node/no-process-exit': 'off',
      // Restrict usage of specified node imports
      'node/no-restricted-import': 'off',
      // Restrict usage of specified node modules
      'node/no-restricted-require': 'off',
      // Disallow use of synchronous methods
      'node/no-sync': 'off',
      // Disallow import declarations of extraneous packages
      // defer to import/no-extraneous-dependencies
      'node/no-extraneous-import': 'off',
      // Disallow require() expressions of extraneous packages
      // defer to import/no-extraneous-dependencies
      'node/no-extraneous-require': 'off',
      // Enforce either module.exports or exports.
      'node/exports-style': ['error', 'module.exports'],
      // enforce either Buffer or require("buffer").Buffer
      'node/prefer-global/buffer': 'error',
      //	enforce either console or require("console")
      'node/prefer-global/console': 'error',
      // enforce either process or require("process")
      'node/prefer-global/process': 'error',
      // enforce either TextDecoder or require("util").TextDecoder
      'node/prefer-global/text-decoder': 'error',
      // enforce either TextEncoder or require("util").TextEncoder
      'node/prefer-global/text-encoder': 'error',
      // enforce either URLSearchParams or require("url").URLSearchParams
      'node/prefer-global/url-search-params': 'error',
      // enforce either URL or require("url").URL
      'node/prefer-global/url': 'error',
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
      // disallow unsupported ECMAScript built-ins on the specified version
      'node/no-unsupported-features/es-builtins': 'off',
      // disallow unsupported ECMAScript syntax on the specified version
      'node/no-unsupported-features/es-syntax': 'off',
      // disallow unsupported Node.js built-in APIs on the specified version
      'node/no-unsupported-features/node-builtins': 'error',
      // If you turn this rule on, ESLint comes to address process.exit() as throw in code path analysis.
      'node/process-exit-as-throw': 'off',
      // Suggest correct usage of shebang.
      'node/shebang': 'error',
      // disallows callback API in favor of promise API for dns module
      'node/prefer-promises/dns': 'error',
      // disallows callback API in favor of promise API for fs module
      'node/prefer-promises/fs': 'error',
      // disallow the assignment to `exports`
      'node/no-exports-assign': 'error',
      // Ensures the Node.js error-first callback pattern is followed
      'node/no-callback-literal': 'error',

      'no-process-env': 'off',
      'no-console': 'off',
    },
  },
];
