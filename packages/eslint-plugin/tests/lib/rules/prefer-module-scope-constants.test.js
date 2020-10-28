const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/prefer-module-scope-constants');

const ruleTester = new RuleTester();

const parserOptions = {ecmaVersion: 6, sourceType: 'module'};
const moduleScopeErrors = [
  {
    kind: 'VariableDeclarator',
    message:
      'You must place screaming snake case at module scope. If this is not meant to be a module-scoped variable, use camelcase instead.',
  },
];
const nonConstErrors = [
  {
    kind: 'VariableDeclarator',
    message:
      'You must use `const` when defining screaming snake case variables. If this is not a constant, use camelcase instead.',
  },
];

ruleTester.run('prefer-module-scope-constants', rule, {
  valid: [
    {code: 'const FOO = true;', parserOptions},
    {code: 'const foo = true;', parserOptions},
    {code: '{ const foo = true; }', parserOptions},
    {code: 'const foo = true, FOO = true;', parserOptions},
    {code: 'const {FOO} = bar', parserOptions},
    {code: '{ const {FOO} = bar; }', parserOptions},
    {code: 'function foo() { const {FOO} = bar; }', parserOptions},
    {code: '{ let {FOO} = bar; }', parserOptions},
    {code: 'function foo() { let {FOO} = bar; }', parserOptions},
    {code: 'const [FOO] = bar', parserOptions},
    {code: '{ const [FOO] = bar; }', parserOptions},
    {code: 'function foo() { const [FOO] = bar; }', parserOptions},
    {code: '{ let [FOO] = bar; }', parserOptions},
    {code: 'function foo() { let [FOO] = bar; }', parserOptions},
    {
      code: `
        const FOO = true;

        module.exports = () => {
          console.log(FOO);
        };
      `,
      parserOptions,
    },
  ],
  invalid: [
    {code: 'let FOO = true;', parserOptions, errors: nonConstErrors},
    {code: '{ let FOO = true; }', parserOptions, errors: nonConstErrors},
    {
      code: 'function foo() { let FOO = true; }',
      parserOptions,
      errors: nonConstErrors,
    },
    {
      code: 'let foo = false, FOO = true;',
      parserOptions,
      errors: nonConstErrors,
    },
    {code: '{ const FOO = true; }', parserOptions, errors: moduleScopeErrors},
    {
      code: 'function foo() { const FOO = true; }',
      parserOptions,
      errors: moduleScopeErrors,
    },
    {
      code: '{ const foo = false, FOO = true; }',
      parserOptions,
      errors: moduleScopeErrors,
    },
  ],
});
