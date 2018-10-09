const merge = require('merge');

module.exports = {
  parser: 'babel-eslint',

  env: {
    es6: true,
    node: true,
    mocha: true,
    jquery: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'ava',
    'babel',
    'chai-expect',
    'eslint-comments',
    'flowtype',
    'graphql',
    'import',
    'jest',
    'jsx-a11y',
    'lodash',
    'node',
    'prettier',
    'promise',
    'react',
    'shopify',
    'sort-class-members',
    'typescript',
  ],

  rules: merge(
    require('./rules/best-practices'),
    require('./rules/ecmascript-6'),
    require('./rules/legacy'),
    require('./rules/possible-errors'),
    require('./rules/shopify'),
    require('./rules/strict-mode'),
    require('./rules/stylistic-issues'),
    require('./rules/variables'),

    require('./rules/ava'),
    require('./rules/babel'),
    require('./rules/chai-expect'),
    require('./rules/eslint-comments'),
    require('./rules/flowtype'),
    require('./rules/graphql'),
    require('./rules/import'),
    require('./rules/jest'),
    require('./rules/jsx-a11y'),
    require('./rules/lodash'),
    require('./rules/node'),
    require('./rules/prettier'),
    require('./rules/promise'),
    require('./rules/react'),
    require('./rules/shopify'),
    require('./rules/sort-class-members'),
    require('./rules/typescript'),
    require('./rules/typescript-prettier'),
    require('./rules/typescript-react'),
    require('./rules/webpack'),
  ),
};
