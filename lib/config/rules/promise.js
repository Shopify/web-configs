// see https://github.com/xjamundx/eslint-plugin-promise

module.exports = {
  'promise/always-catch': 'off',
  // Ensure that each time a then() is applied to a promise, a catch() is applied as well. Exceptions are made if you are returning that promise.
  'promise/catch-or-return': 'warn',
  // Ensure that inside a then() you make sure to return a new promise or value.
  'promise/always-return': 'error',
  // Enforce standard parameter names for Promise constructors.
  'promise/param-names': 'warn',
  // Ensure that Promise is included fresh in each file instead of relying on the existence of a native promise implementation.
  'promise/no-native': 'off',
};
