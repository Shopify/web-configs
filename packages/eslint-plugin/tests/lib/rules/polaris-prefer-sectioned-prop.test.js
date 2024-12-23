const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/polaris-prefer-sectioned-prop');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

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
    },
    {
      code: `
        import {LegacyCard} from '@shopify/other';
        <LegacyCard><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {OtherComponent} from '@shopify/polaris';
        <OtherComponent><OtherComponent.Section /></OtherComponent>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card />;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard />;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card>Content</Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard>Content</LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section subdued /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard><LegacyCard.Section subdued /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section {...props} /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard><LegacyCard.Section {...props} /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Other /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard><LegacyCard.Other /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section /><Card.Section /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard><LegacyCard.Section /><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
    {
      code: `
        import {Layout} from '@shopify/polaris';
        <Layout><Layout.AnnotatedSection /></Layout>;
      `,
      filename: fixtureFile('polaris-app/index.js'),
    },
  ],
  invalid: [
    {
      code: `
        import {Card} from '@shopify/polaris';
        <Card><Card.Section /></Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import {LegacyCard} from '@shopify/polaris';
        <LegacyCard><LegacyCard.Section /></LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
    {
      code: `
        import {Popover} from '@shopify/polaris';
        <Popover><Popover.Section /></Popover>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('Popover'),
    },
    {
      code: `
        import {Layout} from '@shopify/polaris';
        <Layout><Layout.Section /></Layout>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('Layout'),
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.Card><Polaris.Card.Section /></Polaris.Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.LegacyCard><Polaris.LegacyCard.Section /></Polaris.LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
    {
      code: `
        import Polaris from '@shopify/polaris';
        <Polaris.Card><Polaris.Card.Section /></Polaris.Card>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('Card'),
    },
    {
      code: `
        import Polaris from '@shopify/polaris';
        <Polaris.LegacyCard><Polaris.LegacyCard.Section /></Polaris.LegacyCard>;
      `,
      filename: fixtureFile('polaris-app/index.js'),

      errors: errorsFor('LegacyCard'),
    },
  ],
});
