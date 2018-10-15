// see https://github.com/jest-community/eslint-plugin-jest

module.exports = {
  // Enforce assertion to be made in a test body
  'jest/expect-expect': 'error',
  // Disallow all forms of skipped tests (`.skip`, prepending `x` to test helpers, empty function bodies, `pending()` calls.)
  'jest/no-disabled-tests': 'error',
  // Disallow disabling tests via appending `.only` or prepending `f` to test helpers.
  'jest/no-focused-tests': 'error',
  // Make it easier to find failing tests by preventing duplicate test names in a suite.
  'jest/no-identical-title': 'error',
  // Disallow Jasmine globals
  'jest/no-jasmine-globals': 'error',
  // Limited snapshot sizes to keep snapshops manageable and reviewable.
  'jest/no-large-snapshots': ['error', {maxSize: 12}],
  // For better failure messages, use `toHaveLength()` to on object lengths.
  'jest/prefer-to-have-length': 'error',
  // Suggest using toMatchInlineSnapshot()
  'jest/prefer-inline-snapshots': 'off',
  // For better failure messages, use `toBeNull()` to assert on null values.
  'jest/prefer-to-be-null': 'error',
  // For better failure messages, use `toBeUndefined()` to assert on undefined values.
  'jest/prefer-to-be-undefined': 'error',
  // Ensure `expect()` is called with a single argument and there is an actual expectation made.
  'jest/valid-expect': 'error',
  // Suggest using expect.assertions() OR expect.hasAssertions()
  'jest/prefer-expect-assertions': 'off',
  // Enforce having return statement when testing with promises
  'jest/valid-expect-in-promise': 'error',
  // Enforce valid describe() callback
  'jest/valid-describe': 'error',
  // Have control over test and it usages
  'jest/consistent-test-it': 'error',
  // Use .only and .skip over f and x
  'jest/no-test-prefixes': 'error',
  // Disallow explicitly returning from tests
  'jest/no-test-return-statement': 'error',
  // Enforce lowercase test names
  'jest/lowercase-name': ['error', {ignore: ['describe']}],
  // Disallow importing Jest
  'jest/no-jest-import': 'error',
  // Disallow vague words in test statements.
  'shopify/jest/no-vague-titles': 'error',
  // Disallows jest snapshots.
  'shopify/jest/no-snapshots': 'error',
};
