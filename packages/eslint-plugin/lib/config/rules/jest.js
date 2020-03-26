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
  // Disallow alias methods
  'jest/no-alias-methods': 'error',
  // Disallow setup and teardown hooks
  'jest/no-hooks': 'off',
  // Using a callback in asynchronous tests
  'jest/no-test-callback': 'error',
  // Disallow using toBeTruthy() & toBeFalsy()
  'jest/no-truthy-falsy': 'error',
  // Suggest using toBeCalledWith() OR toHaveBeenCalledWith()
  'jest/prefer-called-with': 'off',
  // Suggest using jest.spyOn()
  'jest/prefer-spy-on': 'error',
  // Suggest using toStrictEqual()
  'jest/prefer-strict-equal': 'error',
  // Suggest using toContain()
  'jest/prefer-to-contain': 'error',
  // Suggest using test.todo()
  'jest/prefer-todo': 'error',
  // Require that toThrow() and toThrowError includes a message
  'jest/require-to-throw-message': 'error',
  // Disallow manually importing from `__mocks__`
  'jest/no-mocks-import': 'error',
  // Disallow commented out tests
  'jest/no-commented-out-tests': 'error',
  // Disallow duplicate hooks within a `describe` block
  'jest/no-duplicate-hooks': 'error',
  // Disallow conditional logic
  'jest/no-if': 'error',
  // Prevent assertions in catch blocks.
  'jest/no-try-expect': 'error',
  // Disallow export from test files
  'jest/no-export': 'error',
  // Prevents `expect` statements outside of a `test` or `it` block
  'jest/no-standalone-expect': 'error',
  // Avoid using `expect().resolves`
  'jest/no-expect-resolves': 'error',
  // Enforce titles don't duplicate the test function name or start with a space
  'jest/valid-title': 'error',
  // Suggest to have all hooks at top-level before tests
  'jest/prefer-hooks-on-top': 'error',
  // Require top-level describe block
  'jest/require-top-level-describe': 'error',
};
