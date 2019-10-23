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
    message: `Do not reach into an individual component's folder for nested modules. Import from the closest shared components folder instead.`,
  },
];

ruleTester.run('strict-component-boundaries', rule, {
  valid: [
    {
      code: `import {someThing} from './components';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import {someThing} from '../Bar';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {getDisplayName} from '@shopify/react-utilities/components';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: `import someUtility from './utilities/someUtility';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: `import someThing from './tests/fixtures/SomeMockQuery/query.json';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {someThing} from '../../components/Bar';`,
      parserOptions,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {someThing} from '../Baz';`,
      parserOptions,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Bar/index.js',
      ),
    },
    {
      code: `import {someThing} from '../../Foo.scss';`,
      parserOptions,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Bar/index.js',
      ),
    },
  ],
  invalid: [
    {
      code: `import someThing from './components/Foo';`,
      parserOptions,
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from '../Bar/any-path';`,
      parserOptions,
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import someThing from './components/Bar/any-path';`,
      parserOptions,
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from '../Bar/tests/fixtures/SomeMockQuery/query.json';`,
      parserOptions,
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
  ],
});
