const {RuleTester} = require('eslint');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/polaris-modal-requires-activator-prop');

const ruleTester = new RuleTester();
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {jsx: true},
};

const errors = [
  {
    type: 'JSXElement',
    message:
      "Polaris <Modal /> should have an 'activator' prop to ensure correct keyboard focus handling on close.",
  },
];

ruleTester.run('polaris-modal-requires-activator-prop', rule, {
  valid: [
    {
      code: `
        import {Modal} from '@shopify/polaris';
        <Modal activator={true} />;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
  invalid: [
    {
      code: `
        import {Modal} from '@shopify/polaris';
        <Modal />;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
  ],
});
