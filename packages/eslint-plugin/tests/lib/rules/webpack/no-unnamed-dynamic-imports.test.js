const {RuleTester} = require('eslint');

const rule = require('../../../../lib/rules/webpack/no-unnamed-dynamic-imports');

const ruleTester = new RuleTester({
  parser: require.resolve('babel-eslint'),
});

const CHUNK_NAME_REQUIRED =
  'imports should have a webpackChunkName (https://webpack.js.org/api/module-methods/#import-)';

ruleTester.run('webpack/no-unnamed-dynamic-imports', rule, {
  valid: [
    {
      code: `
        function foo() {
          return import(/* webpackChunkName: "bar" */ 'bar');
        }
      `,
    },
    {
      code: `
        function foo() {
          return import(/* webpackChunkName: 'bar' */ 'bar');
        }
      `,
    },
    {
      code: `
        async function foo() {
          await import(/* webpackChunkName: 'bar' */ 'bar');
        }
      `,
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
      parser: require.resolve('@typescript-eslint/parser'),
    },
  ],
  invalid: [
    {
      code: `function foo() { import('bar'); }`,
      options: ['never'],
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
      errors: ['webpackChunkName must be in a /* */ block comment'],
    },
  ],
});
