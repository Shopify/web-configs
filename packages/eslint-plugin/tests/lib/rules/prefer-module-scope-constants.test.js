const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/prefer-module-scope-constants');

const ruleTester = new RuleTester();

const moduleScopeErrors = [
  {
    type: 'VariableDeclarator',
    message:
      'You must place screaming snake case at module scope. If this is not meant to be a module-scoped variable, use camelcase instead.',
  },
];
const nonConstErrors = [
  {
    type: 'VariableDeclarator',
    message:
      'You must use `const` when defining screaming snake case variables. If this is not a constant, use camelcase instead.',
  },
];

const supportedLanguageOptions = [
  {parserOptions: {sourceType: 'module'}},
  {parserOptions: {sourceType: 'script'}},
];

supportedLanguageOptions.forEach((languageOptions) => {
  ruleTester.run('prefer-module-scope-constants', rule, {
    valid: [
      {code: 'const FOO = true;', languageOptions},
      {code: 'const foo = true;', languageOptions},
      {code: '{ const foo = true; }', languageOptions},
      {code: 'const foo = true, FOO = true;', languageOptions},
      {code: 'const {FOO} = bar', languageOptions},
      {code: '{ const {FOO} = bar; }', languageOptions},
      {code: 'function foo() { const {FOO} = bar; }', languageOptions},
      {code: '{ let {FOO} = bar; }', languageOptions},
      {code: 'function foo() { let {FOO} = bar; }', languageOptions},
      {code: 'const [FOO] = bar', languageOptions},
      {code: '{ const [FOO] = bar; }', languageOptions},
      {code: 'function foo() { const [FOO] = bar; }', languageOptions},
      {code: '{ let [FOO] = bar; }', languageOptions},
      {code: 'function foo() { let [FOO] = bar; }', languageOptions},
      {
        code: `
          const MY_VALUE = true;

          module.exports = () => {
            console.log(MY_VALUE);
          };
        `,
        languageOptions,
      },
    ],
    invalid: [
      {code: 'let FOO = true;', languageOptions, errors: nonConstErrors},
      {code: '{ let FOO = true; }', languageOptions, errors: nonConstErrors},
      {
        code: 'function foo() { let FOO = true; }',
        languageOptions,
        errors: nonConstErrors,
      },
      {
        code: 'let foo = false, FOO = true;',
        languageOptions,
        errors: nonConstErrors,
      },
      {
        code: '{ const FOO = true; }',
        languageOptions,
        errors: moduleScopeErrors,
      },
      {
        code: 'function foo() { const FOO = true; }',
        languageOptions,
        errors: moduleScopeErrors,
      },
      {
        code: '{ const foo = false, FOO = true; }',
        languageOptions,
        errors: moduleScopeErrors,
      },
    ],
  });
});
