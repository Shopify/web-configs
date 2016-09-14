// see https://github.com/lo1tuma/eslint-plugin-mocha

module.exports = {
  // Disallow exclusive mocha tests.
  'mocha/no-exclusive-tests': 'warn',
  // Disallow skipped mocha tests.
  'mocha/no-skipped-tests': 'error',
  // Disallow pending/unimplemented mocha tests.
  'mocha/no-pending-tests': 'warn',
  // Enforces handling of callbacks for async tests.
  'mocha/handle-done-callback': 'warn',
  // Disallow global tests.
  'mocha/no-global-tests': 'error',
  // Disallow hooks
  'mocha/no-hooks': 'off',
  // Disallow hooks for a single test or test suite
  'mocha/no-hooks-for-single-case': 'off',
  // Disallow identical titles
  'mocha/no-identical-title': 'warn',
  // Disallow arrow functions as arguments to mocha globals
  'mocha/no-mocha-arrows': 'off',
  // Disallow returning in a test or hook function that uses a callback
  'mocha/no-return-and-callback': 'error',
  // Disallow duplicate uses of a hook at the same level inside a describe
  'mocha/no-sibling-hooks': 'error',
  // Disallow top-level hooks
  'mocha/no-top-level-hooks': 'error',
  // Disallow synchronous tests.
  'mocha/no-synchronous-tests': 'off',
  // Match suite descriptions to match a pre-configured regular expression
  'mocha/valid-suite-description': 'off',
  // Match test descriptions to match a pre-configured regular expression
  'mocha/valid-test-description': 'off',
};
