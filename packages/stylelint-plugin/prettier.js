module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['./index', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    // conflicts with prettier formatting
    'scss/double-slash-comment-empty-line-before': null,
    'scss/operator-no-newline-after': null,
  },
};
