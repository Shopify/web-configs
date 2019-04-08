const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/webpack/no-unnamed-dynamic-imports');

const ruleTester = new RuleTester();

const CHUNK_NAME_REQUIRED =
  'imports should have a webpackChunkName (https://webpack.js.org/api/module-methods/#import-)';

const validExamples = [
  {
    code: `
      function foo() {
        return import(/* webpackChunkName: "bar" */ 'bar');
      }
    `,
    parser: 'babel-eslint',
  },
  {
    code: `
      function foo() {
        return import(/* webpackChunkName: 'bar' */ 'bar');
      }
    `,
    parser: 'babel-eslint',
  },
  {
    code: `
      async function foo() {
        await import(/* webpackChunkName: 'bar' */ 'bar');
      }
    `,
    parser: 'babel-eslint',
  },
  {
    code: `System.import(/* webpackChunkName: "bar" */ 'bar');`,
  },
  {
    code: `
      System.import(
        /* webpackMode: "lazy" */
        /* webpackChunkName: "bar" */ 'bar'
      );
    `,
  },
  {
    code: `System.imported('foo');`,
  },
  {
    code: `System.other('foo');`,
  },
  {
    code: `
    async function foo() {
      return System.import<{default: any}>(
        /* webpackChunkName: "bar" */ './bar',
      ).then(bar => bar);
    }
    `,
    parser: '@typescript-eslint/parser',
  },
];

const invalidExamples = [
  {
    code: `function foo() { import('bar'); }`,
    options: ['never'],
    parser: 'babel-eslint',
    errors: [CHUNK_NAME_REQUIRED],
  },
  {
    code: `function foo() { System.import('bar'); }`,
    options: ['never'],
    errors: [CHUNK_NAME_REQUIRED],
  },
  {
    code: `
      System.import(
        // webpackChunkName: "bar"
        'bar'
      );
    `,
    options: ['never'],
    parser: 'babel-eslint',
    errors: ['webpackChunkName must be in a /* */ block comment'],
  },
];

ruleTester.run('webpack/no-unnamed-dynamic-imports', rule, {
  valid: validExamples,
  invalid: invalidExamples,
});
