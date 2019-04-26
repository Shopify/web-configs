const merge = require('merge');

module.exports = {
  extends: 'plugin:shopify/esnext',

  plugins: ['typescript'],

  settings: {
    'import/parsers': {
      'typescript-eslint-parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },

  overrides: [
    {
      parser: 'typescript-eslint-parser',
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
      },
      files: ['*.ts', '*.tsx'],
      rules: merge(require('./rules/typescript'), {
        // TypeScript provides a better mechanism (explicit `this` type)
        // for ensuring proper `this` usage in functions not assigned to
        // object properties.
        'babel/no-invalid-this': 'off',
      }),
    },
  ],
};
