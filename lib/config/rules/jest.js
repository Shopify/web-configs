// see https://github.com/sindresorhus/eslint-plugin-ava

module.exports = {
  // Disallow all forms of skipped tests (`.skip`, prepending `x` to test helpers, empty function bodies, `pending()` calls.)
  'jest/no-disabled-tests': 'error',
  // Disallow disabling tests via appending `.only` or prepending `f` to test helpers.
  'jest/no-focused-tests': 'error',
  // Make it easier to find failing tests by preventing duplicate test names in a suite.
  'jest/no-identical-title': 'error',
  // Limited snapshot sizes to keep snapshops manageable and reviewable.
  'jest/no-large-snapshots': ['error', {maxSize: 12}],
  // For better failure messages, use `toHaveLength()` to on object lengths.
  'jest/prefer-to-have-length': 'error',
  // For better failure messages, use `toBeNull()` to assert on null values.
  'jest/prefer-to-be-null': 'error',
  // For better failure messages, use `toBeUndefined()` to assert on undefined values.
  'jest/prefer-to-be-undefined': 'error',
  // Ensure `expect()` is called with a single argument and there is an actual expectation made.
  'jest/valid-expect': 'error',
};
