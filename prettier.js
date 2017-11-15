module.exports = {
  extends: [
    './index',
    'prettier-stylelint-formatter/config',
  ],

  // conflicts with prettier formatting
  rules: {
    'scss/double-slash-comment-empty-line-before': null,
    'scss/operator-no-newline-after': null,
  },
};
