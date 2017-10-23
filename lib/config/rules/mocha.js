// see https://github.com/lo1tuma/eslint-plugin-mocha

module.exports = {
  // Disallow exclusive mocha tests.
  'mocha/no-exclusive-tests': 'error',
  // Disallow skipped mocha tests.
  'mocha/no-skipped-tests': 'error',
  // Disallow pending/unimplemented mocha tests.
  'mocha/no-pending-tests': 'error',
  // Enforces handling of callbacks for async tests.
  'mocha/handle-done-callback': 'error',
  // Disallow global tests.
  'mocha/no-global-tests': 'error',
  // Disallow hooks
  'mocha/no-hooks': 'off',
  // Disallow hooks for a single test or test suite
  'mocha/no-hooks-for-single-case': 'off',
  // Disallow identical titles
  'mocha/no-identical-title': 'error',
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
  // Disallow tests to be nested within other tests
  'mocha/no-nested-tests': 'error',
  // Match suite descriptions to match a pre-configured regular expression
  'mocha/valid-suite-description': 'off',
  // Match test descriptions to match a pre-configured regular expression
  'mocha/valid-test-description': 'off',
  // Limit the number of top-level suites in a single file
  'mocha/max-top-level-suites': ['error', {limit: 1}],
};
