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
      'You don’t need to wrap content in a Stack.Item unless you need to customize one of its props.',
  },
];

ruleTester.run('polaris-no-bare-stack-item', rule, {
  valid: [
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack>Content</Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack>Content<Stack.Item fill>More content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Stack} from 'other-module';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack.Item fill>Content</Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
  invalid: [
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack.Item>Content</Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
    {
      code: `
        import * as P from '@shopify/polaris';
        <P.Stack.Item>Content</P.Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors,
    },
  ],
});
