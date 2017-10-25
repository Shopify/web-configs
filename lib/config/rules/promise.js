// see https://github.com/xjamundx/eslint-plugin-promise

module.exports = {
  // Promise Rules

  'promise/always-catch': 'off',
  // Ensure that each time a then() is applied to a promise, a catch() is applied as well. Exceptions are made if you are returning that promise.
  'promise/catch-or-return': 'error',
  // Avoid wrapping values in Promise.resolve or Promise.reject when not needed
  'promise/no-return-wrap': 'error',
  // Ensure that inside a then() you make sure to return a new promise or value.
  'promise/always-return': 'error',
  // Enforce standard parameter names for Promise constructors.
  'promise/param-names': 'error',
  // Ensure that Promise is included fresh in each file instead of relying on the existence of a native promise implementation.
  'promise/no-native': 'off',
  // Avoid nested .then() or .catch() statements
  'promise/no-nesting': 'error',
  // Avoid using promises inside of callbacks
  'promise/no-promise-in-callback': 'off',
  // Avoid calling cb() inside of a then() (use nodeify instead)
  'promise/no-callback-in-promise': 'off',
  // Avoid creating new promises outside of utility libs (use pify instead)
  'promise/avoid-new': 'off',

  // Async/Await Rules

  // Prefer await to then() for reading Promise values
  'promise/prefer-await-to-then': 'off',
  // Prefer async/await to the callback pattern
  'promise/prefer-await-to-callbacks': 'off',
};
