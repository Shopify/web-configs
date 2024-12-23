const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/prefer-twine');

const ruleTester = new RuleTester();
const errors = [
  {
    type: 'ImportDeclaration',
    message:
      'You should use "Twine" as the reference name when importing twine.',
  },
];

ruleTester.run('prefer-twine', rule, {
  valid: [
    {code: 'import Twine from "twine";'},
    {code: 'import foo from "bar"'},
  ],
  invalid: [
    {code: 'import Bindings from "twine";', errors},
    {code: 'import foo from "twine";', errors},
  ],
});
