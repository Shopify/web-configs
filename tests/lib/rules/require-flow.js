const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/require-flow');

const ruleTester = new RuleTester();

require('babel-eslint');

const withFlow = `/* @flow */
function yesFlow(present: boolean): string { return 'success'; }`;

const explicitNoFlow = `/* @noflow */
function yesFlow(present: boolean): string { return 'success'; }`;

const noFlow = 'function noFlow(present) {}';
const confusingFlow = `var foo = 'bar'
// This is not a realy @flow comment`;

ruleTester.run('require-flow', rule, {
  valid: [
    {code: withFlow, parser: 'babel-eslint'},
    {code: `// @flow\n${withFlow.split('\n')[1]}`, parser: 'babel-eslint'},
    {code: noFlow, options: ['never']},
    {code: withFlow, options: ['always'], parser: 'babel-eslint'},
    {code: confusingFlow, options: ['never']},
    {code: explicitNoFlow, options: ['explicit'], parser: 'babel-eslint'},
    {code: `// @noflow\n${explicitNoFlow.split('\n')[1]}`, options: ['explicit'], parser: 'babel-eslint'},
  ],
  invalid: [
    {
      code: noFlow,
      errors: [{
        message: 'You must include a @flow declaration at the top of your file.',
        type: 'Program',
      }],
    },
    {
      code: noFlow,
      parser: 'babel-eslint',
      options: ['explicit'],
      errors: [{
        message: 'You must include a @flow or @noflow declaration at the top of your file.',
        type: 'Program',
      }],
    },
    {
      code: withFlow,
      parser: 'babel-eslint',
      options: ['never'],
      errors: [{
        message: 'You must not include a @flow declaration in your file.',
        type: 'Program',
      }],
    },
    {
      code: explicitNoFlow,
      parser: 'babel-eslint',
      options: ['always'],
      errors: [{
        message: 'You must include a @flow declaration at the top of your file.',
        type: 'Program',
      }],
    },
    {
      code: noFlow,
      options: ['always'],
      errors: [{
        message: 'You must include a @flow declaration at the top of your file.',
        type: 'Program',
      }],
    },
    {
      code: confusingFlow,
      options: ['always'],
      errors: [{
        message: 'You must include a @flow declaration at the top of your file.',
        type: 'Program',
      }],
    },
  ],
});
