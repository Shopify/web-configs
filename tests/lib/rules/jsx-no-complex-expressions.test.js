const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/jsx-no-complex-expressions');

const ruleTester = new RuleTester();
const parserOptions = {ecmaVersion: 6, ecmaFeatures: {jsx: true}};
const errors = [
  {
    type: 'JSXExpressionContainer',
  },
];

ruleTester.run('jsx-no-complex-expressions', rule, {
  valid: [
    {code: '<div title={foo} />', parserOptions},
    {code: '<div title={condition && foo} />', parserOptions},
    {code: '<div title={condition && foo || bar} />', parserOptions},
  ],
  invalid: [
    {code: '<div title={condition ? foo : bar} />', parserOptions, errors},
  ],
});
