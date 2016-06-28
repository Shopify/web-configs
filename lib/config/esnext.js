var merge = require('merge');

module.exports = {
  extends: 'plugin:shopify/core',
  parser: 'babel-eslint',

  env: {
    es6: true,
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },

  plugins: [
    'babel',
    'promise',
    'sort-class-members',
    'import',
  ],

  settings: {
    'import/ignore': [
      'node_modules',
      '\\.s?css',
    ],
  },

  rules: merge(
    require('./rules/ecmascript-6'),
    require('./rules/promise'),
    require('./rules/babel'),
    require('./rules/sort-class-members'),
    require('./rules/import'),
    {
      'no-param-reassign': 'warn', // because of default params
    }
  ),
};
