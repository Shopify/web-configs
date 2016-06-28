const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/prefer-twine');

const ruleTester = new RuleTester();
const parserOptions = {ecmaVersion: 6, sourceType: 'module'};
const errors = [{
  type: 'ImportDeclaration',
  message: 'You should use "Twine" as the reference name when importing twine.',
}];

ruleTester.run('prefer-twine', rule, {
  valid: [
    {code: 'import Twine from "twine";', parserOptions},
    {code: 'import foo from "bar"', parserOptions},
  ],
  invalid: [
    {code: 'import Bindings from "twine";', errors, parserOptions},
    {code: 'import foo from "twine";', errors, parserOptions},
  ],
});
