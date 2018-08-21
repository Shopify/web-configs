const {RuleTester} = require('eslint');
const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/strict-component-boundaries');

const ruleTester = new RuleTester();
const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
};

const errors = [
  {
    type: 'ImportDeclaration',
    message: 'Strict component boundaries.',
  },
];

ruleTester.run('strict-component-boundaries', rule, {
  valid: [
    {code: `import {someThing} from './components';`, parserOptions},
    {
      code: `import {someThing} from 'components';`,
      parserOptions,
    },
    {
      code: `import {someThing} from '../OtherComponent';`,
      parserOptions,
    },
    {
      code: `import {getDisplayName} from '@shopify/react-utilities/components';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: `import someThing from '../fixtures/SomeMockQuery/query.json';`,
      parserOptions,
    },
  ],
  invalid: [
    {
      code: `import someThing from 'components/Foo';`,
      parserOptions,
      errors,
    },
    {
      code: `import someThing from '../OtherComponent/any-path';`,
      parserOptions,
      errors,
    },
    {
      code: `import someThing from './components/SomeComponent';`,
      parserOptions,
      errors,
    },
    {
      code: `import someThing from './components/SomeComponent/any-path';`,
      parserOptions,
      errors,
    },
    {
      code: `import someThing from '../SomeComponent/fixtures/SomeMockQuery/query.json';`,
      parserOptions,
      errors,
    },
    {
      code: `import someThing from './components/SomeComponent/fixtures/SomeMockQuery/query.json';`,
      parserOptions,
      errors,
    },
  ],
});
