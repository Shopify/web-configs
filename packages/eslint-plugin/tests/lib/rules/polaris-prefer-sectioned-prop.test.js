const {RuleTester} = require('eslint');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/polaris-prefer-sectioned-prop');

const ruleTester = new RuleTester();
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {jsx: true},
};

function errorsFor(component) {
  return [
    {
      type: 'JSXElement',
      message: `Use the \`sectioned\` prop on ${component} instead of wrapping all its contents in a ${component}.Section`,
    },
  ];
}

ruleTester.run('polaris-prefer-sectioned-prop', rule, {
  valid: [
    {
      code: `
        import {Card} from '@shopify/other';
        <Card><Card.Section /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {OtherComponent} from '@shopify/polaris';
        <OtherComponent><OtherComponent.Section /></OtherComponent>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card />;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card>Content</Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section subdued /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section {...props} /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Other /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section /><Card.Section /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
        import {Layout} from '@shopify/polaris';
        <Layout><Layout.AnnotatedSection /></Layout>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
  invalid: [
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors: errorsFor('Card'),
    },
    {
      code: `
        import {Popover} from '@shopify/polaris';
        <Popover><Popover.Section /></Popover>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors: errorsFor('Popover'),
    },
    {
      code: `
        import {Layout} from '@shopify/polaris';
        <Layout><Layout.Section /></Layout>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors: errorsFor('Layout'),
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.Card><Polaris.Card.Section /></Polaris.Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors: errorsFor('Card'),
    },
    {
      code: `
        import Polaris from '@shopify/polaris';
        <Polaris.Card><Polaris.Card.Section /></Polaris.Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
      errors: errorsFor('Card'),
    },
  ],
});
