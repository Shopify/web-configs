const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/strict-component-boundaries');

const ruleTester = new RuleTester();

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
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import {someThing} from '../Bar';`,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {getDisplayName} from '@shopify/react-utilities/components';`,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: `import someUtility from './utilities/someUtility';`,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: `import someThing from './tests/fixtures/SomeMockQuery/query.json';`,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {someThing} from '../../components/Bar';`,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import {someThing} from '../Baz';`,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Bar/index.js',
      ),
    },
    {
      code: `import {someThing} from '../../Foo.scss';`,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Bar/index.js',
      ),
    },
    {
      code: `import someThing from './components/Foo';`,
      options: [{allow: ['components/\\w+$']}],
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from './components/Foo';`,
      options: [{maxDepth: 2}],
      filename: fixtureFile('basic-app/app/index.js'),
    },
  ],
  invalid: [
    {
      code: `import someThing from './components/Foo';`,
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from '../Bar/any-path';`,
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import someThing from './components/Bar/any-path';`,
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from '../Bar/tests/fixtures/SomeMockQuery/query.json';`,
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: `import someThing from './components/Foo/Foo';`,
      options: [{allow: ['components/\\w+$']}],
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
    {
      code: `import someThing from './components/Foo/Foo';`,
      options: [{maxDepth: 2}],
      errors,
      filename: fixtureFile('basic-app/app/index.js'),
    },
  ],
});
