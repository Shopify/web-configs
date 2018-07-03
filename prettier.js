module.exports = {
  extends: [
    './index',
    'stylelint-config-prettier',
  ],

  // conflicts with prettier formatting
  rules: {
    'scss/double-slash-comment-empty-line-before': null,
    'scss/operator-no-newline-after': null,
  },
};
