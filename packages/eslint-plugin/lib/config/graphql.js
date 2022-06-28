module.exports = {
  plugins: ['graphql'],

  overrides: [
    {
      parser: '@babel/eslint-parser',
      files: ['*.graphql'],
      rules: {
        'graphql/capitalized-type-name': 'off',
        'graphql/named-operations': ['error', {env: 'literal'}],
        'graphql/no-deprecated-fields': ['error', {env: 'literal'}],
        'graphql/template-strings': ['error', {env: 'literal'}],
        'graphql/required-fields': [
          'error',
          {
            env: 'literal',
            requiredFields: ['id'],
          },
        ],
      },
    },
  ],
};
