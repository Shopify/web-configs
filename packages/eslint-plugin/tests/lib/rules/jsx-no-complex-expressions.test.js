const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/jsx-no-complex-expressions');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

const errors = [
  {
    type: 'JSXExpressionContainer',
    message:
      'Don’t use conditional expressions inside JSX; they generally make your component harder to read. Instead, break that expression out into its own variable, and include the variable in JSX.',
  },
];

ruleTester.run('jsx-no-complex-expressions', rule, {
  valid: [
    {code: '<div title={foo} />'},
    {code: '<div title={condition && foo} />'},
    {code: '<div title={condition && foo || bar} />'},
  ],
  invalid: [{code: '<div title={condition ? foo : bar} />', errors}],
});
