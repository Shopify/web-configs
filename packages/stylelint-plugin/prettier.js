module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['./index'],
  rules: {
    'prettier/prettier': true,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      rules: {
        // conflicts with prettier formatting
        'scss/double-slash-comment-empty-line-before': null,
        'scss/operator-no-newline-after': null,
      },
    },
  ],
};
