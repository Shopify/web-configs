const merge = require('merge');

module.exports = {
  extends: 'plugin:@shopify/core',
  parser: 'babel-eslint',

  env: {
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
  },

  plugins: ['babel', 'promise', 'sort-class-members', 'import'],

  settings: {
    'import/ignore': ['node_modules', '\\.s?css'],
  },

  rules: merge(
    require('./rules/ecmascript-6'),
    require('./rules/promise'),
    require('./rules/babel'),
    require('./rules/sort-class-members'),
    require('./rules/import'),
    {
      // default params
      'no-param-reassign': 'error',
      // Rules override by the Babel plugin
      camelcase: 'off',
      quotes: 'off',
      'no-unused-expressions': 'off',
      'valid-typeof': 'off',
      'new-cap': 'off',
      'no-await-in-loop': 'off',
      'object-curly-spacing': 'off',
      'no-invalid-this': 'off',
    },
  ),
};
