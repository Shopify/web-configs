// see https://github.com/sindresorhus/eslint-plugin-ava

module.exports = {
  // Enforce passing correct arguments to assertions.
  'ava/assertion-arguments': 'error',
  // Enforce or disallow assertion messages.
  'ava/assertion-message': 'off',
  // Limit the number of assertions in a test.
  'ava/max-asserts': ['warn', 5],
  // Ensure no test.cb() is used.
  'ava/no-cb-test': 'warn',
  // Ensure that async tests use await
  'ava/no-async-fn-without-await': 'off',
  // Ensure tests do not have duplicate modifiers.
  'ava/no-duplicate-modifiers': 'error',
  // Ensure no tests have the same title.
  'ava/no-identical-title': 'error',
  // Ensure no tests are written in ignored files.
  'ava/no-ignored-test-files': 'error',
  // Ensure t.end() is only called inside test.cb().
  'ava/no-invalid-end': 'error',
  // Ensure no test.only() are present.
  'ava/no-only-test': 'warn',
  // Ensure no tests are nested.
  'ava/no-nested-tests': 'warn',
  // Ensure no assertions are skipped.
  'ava/no-skip-assert': 'error',
  // Ensure no tests are skipped.
  'ava/no-skip-test': 'error',
  // Ensure t.end() is the last statement executed.
  'ava/no-statement-after-end': 'error',
  // Ensure test.todo() is not given an implementation function.
  'ava/no-todo-implementation': 'warn',
  // Ensure no test.todo() is used.
  'ava/no-todo-test': 'warn',
  // Prevent the use of unknown test modifiers.
  'ava/no-unknown-modifiers': 'error',
  // Prefer using async/await instead of returning a Promise.
  'ava/prefer-async-await': 'warn',
  // Allow only use of the asserts that have no power-assert alternative.
  'ava/prefer-power-assert': 'off',
  // Ensure callback tests are explicitly ended.
  'ava/test-ended': 'error',
  // Ensure tests have a title.
  'ava/test-title': 'error',
  // Prevent the incorrect use of t.
  'ava/use-t-well': 'error',
  // Ensure test functions use t as their parameter.
  'ava/use-t': 'warn',
  // Ensure that AVA is imported with test as the variable name.
  'ava/use-test': 'warn',
  // Ensure that t.true()/t.false() are used instead of t.truthy()/t.falsy().
  'ava/use-true-false': 'warn',
};
