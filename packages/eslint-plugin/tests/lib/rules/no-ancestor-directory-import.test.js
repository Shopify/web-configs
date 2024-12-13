const {RuleTester} = require('eslint');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/no-ancestor-directory-import');

const ruleTester = new RuleTester();

const errors = [
  {
    type: 'ImportDeclaration',
    message:
      'Ancestor imports should extend to the file from where they are importing without relying on an index file in the directory.',
  },
];

ruleTester.run('no-ancestor-directory-import', rule, {
  valid: [
    {
      code: "import Foo from '../Foo'",
      filename: fixtureFile('basic-app/app/components/Foo/tests/Foo.test.js'),
    },
    {
      code: "import {Foo, Bar} from '../../components'",
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
    },
    {
      code: "import Bar from '../Bar'",
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "import Bar from '../Bar'",
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Baz/Baz.js',
      ),
    },
    {
      code: "import Qux from '../Qux'",
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Baz/Baz.js',
      ),
    },
    {
      code: "import Bar from '../../../Bar'",
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Baz/Baz.js',
      ),
    },
  ],

  invalid: [
    {
      code: "import Foo from '../'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/tests/Foo.test.js'),
    },
    {
      code: "import Foo from '..'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/tests/Foo.test.js'),
    },
    {
      code: "import Foo from './'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo.js'),
    },
    {
      code: "import Foo from '.'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "import Foo from '../../index'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/tests/Foo.test.js'),
    },
    {
      code: "import Foo from '../../index.js'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/tests/Foo.test.js'),
    },
    {
      code: "import Bar from '..'",
      errors,
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "import Bar from '../../..'",
      errors,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Baz/Baz.js',
      ),
    },
    {
      code: "import Bar from '../../../'",
      errors,
      filename: fixtureFile(
        'basic-app/app/components/Foo/components/Baz/Baz.js',
      ),
    },
  ],
});
