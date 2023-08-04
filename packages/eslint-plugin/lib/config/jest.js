module.exports = {
  env: {
    'jest/globals': true,
  },

  plugins: ['jest', 'jest-formatting', '@shopify'],

  rules: {
    //
    // jest
    //

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
    // Disallow interpolation in snapshots to ensure they can be automatically updated.
    'jest/no-interpolation-in-snapshots': 'error',
    // For better failure messages, use `toHaveLength()` to on object lengths.
    'jest/prefer-to-have-length': 'error',
    // For better failure messages, use toBe()` for native value and `toBeNull()`/`toBeUndefined()` to assert on null/undefined values.
    'jest/prefer-to-be': 'error',
    // Ensure `expect()` is called with a single argument and there is an actual expectation made.
    'jest/valid-expect': 'error',
    // Suggest using expect.assertions() OR expect.hasAssertions()
    'jest/prefer-expect-assertions': 'off',
    // Enforce having return statement when testing with promises
    'jest/valid-expect-in-promise': 'error',
    // Enforce valid describe() callback
    'jest/valid-describe-callback': 'error',
    // Have control over test and it usages
    'jest/consistent-test-it': 'error',
    // Use .only and .skip over f and x
    'jest/no-test-prefixes': 'error',
    // Disallow explicitly returning from tests
    'jest/no-test-return-statement': 'error',
    // Enforce lowercase test names
    'jest/prefer-lowercase-title': ['error', {ignore: ['describe']}],
    // Disallow alias methods
    'jest/no-alias-methods': 'error',
    // Disallow setup and teardown hooks
    'jest/no-hooks': 'off',
    // Using a callback in asynchronous tests
    'jest/no-done-callback': 'error',
    // Disallow using toBeTruthy(), toBeFalsy(), expect.resolves
    'jest/no-restricted-matchers': [
      'error',
      {
        toBeTruthy: 'Avoid `toBeTruthy`',
        toBeFalsy: 'Avoid `toBeFalsy`',
        resolves: 'Use `expect(await promise)` instead.',
      },
    ],
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
    // Prevent assertions that are conditional.
    'jest/no-conditional-expect': 'error',
    // Disallow export from test files
    'jest/no-export': 'error',
    // Prevents `expect` statements outside of a `test` or `it` block
    'jest/no-standalone-expect': 'error',
    // Enforce titles don't duplicate the test function name or start with a space
    'jest/valid-title': [
      'error',
      {
        disallowedWords: [
          'correct',
          'appropriate',
          'properly',
          'should',
          'every',
          'descriptive',
        ],
      },
    ],
    // Suggest to have all hooks at top-level before tests
    'jest/prefer-hooks-on-top': 'error',
    // Require top-level describe block
    'jest/require-top-level-describe': 'error',
    // Avoid using deprecated functions
    'jest/no-deprecated-functions': 'error',

    //
    // jest-formatting
    //

    // Require padding around afterAll blocks
    'jest-formatting/padding-around-after-all-blocks': 'error',
    // Require padding around afterEach blocks
    'jest-formatting/padding-around-after-each-blocks': 'error',
    // Require padding around beforeAll blocks
    'jest-formatting/padding-around-before-all-blocks': 'error',
    // Require padding around beforeEach blocks
    'jest-formatting/padding-around-before-each-blocks': 'error',
    // Require padding around describe blocks
    'jest-formatting/padding-around-describe-blocks': 'error',
    // Require padding around test/it blocks
    'jest-formatting/padding-around-test-blocks': 'error',

    //
    // Internal
    //

    // Disallows jest snapshots.
    '@shopify/jest/no-snapshots': 'error',
  },
};
