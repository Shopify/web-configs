module.exports = {
  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    ...require('./rules/prettier'),
    // rules to disable to prefer prettier
    '@babel/semi': 'off',
    '@babel/object-curly-spacing': 'off',
    '@shopify/class-property-semi': 'off',
    '@shopify/binary-assignment-parens': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',

    // Special rule for 'no-unexpected-multiline'
    // https://github.com/prettier/eslint-config-prettier/blob/5399175c37466747aae9d407021dffec2c169c8b/README.md#no-unexpected-multiline
    'no-unexpected-multiline': 'error',
  },

  overrides: [
    {
      // disable prettier processing of graphql files
      // eslint-plugin-graphql is required to process graphql files, but it also
      // suppresses all lint violations except its own, which results in a
      // wasteful no-op.
      files: ['*.graphql', '*.gql'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: require('./rules/prettier-typescript'),
    },
  ],
};
