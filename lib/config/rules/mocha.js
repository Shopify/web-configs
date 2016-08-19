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
  // Disallow arrow functions as arguments to mocha globals
  'mocha/no-mocha-arrows': 'off',
  // Disallow duplicate uses of a hook at the same level inside a describe
  'mocha/no-sibling-hooks': 'error',
  // Disallow synchronous tests.
  'mocha/no-synchronous-tests': 'off',
  // Match suite descriptions to match a pre-configured regular expression
  'mocha/valid-suite-description': 'off',
  // Match test descriptions to match a pre-configured regular expression
  'mocha/valid-test-description': 'off',
};
