const {RuleTester} = require('eslint');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/polaris-no-bare-stack-item');

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
      'You don’t need to wrap content in a LegacyStack.Item unless you need to customize one of its props.',
  },
];

ruleTester.run('polaris-no-bare-stack-item', rule, {
  valid: [
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack>Content</LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack>Content<LegacyStack.Item fill>More content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {LegacyStack} from 'other-module';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack.Item fill>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
  invalid: [
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack.Item>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
    {
      code: `
        import * as P from '@shopify/polaris';
        <P.LegacyStack.Item>Content</P.LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
  ],
});
