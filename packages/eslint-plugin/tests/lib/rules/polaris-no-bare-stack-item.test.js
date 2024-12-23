const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/polaris-no-bare-stack-item');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

const errors = [
  {
    type: 'JSXElement',
    message:
      'You don’t need to wrap content in a Stack.Item or LegacyStack.Item unless you need to customize one of its props.',
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
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack>Content</LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack>Content<Stack.Item fill>More content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack>Content<LegacyStack.Item fill>More content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Stack} from 'other-module';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from 'other-module';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack.Item fill>Content</Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack.Item fill>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
  ],
  invalid: [
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack><Stack.Item>Content</Stack.Item></Stack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
    {
      code: `
        import {Stack} from '@shopify/polaris';
        <Stack.Item>Content</Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
    {
      code: `
        import {LegacyStack} from '@shopify/polaris';
        <LegacyStack.Item>Content</LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
    {
      code: `
        import * as P from '@shopify/polaris';
        <P.Stack.Item>Content</P.Stack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
    {
      code: `
        import * as P from '@shopify/polaris';
        <P.LegacyStack.Item>Content</P.LegacyStack.Item>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors,
    },
  ],
});
