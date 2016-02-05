var rule = require('../../../lib/rules/require-flow');
var RuleTester = require('eslint').RuleTester;
var ruleTester = new RuleTester();

require('babel-eslint');

var withFlow = '/* @flow */\n\nfunction yesFlow(present: boolean): string { return "success"; }';
var explicitNoFlow = '/* @noflow */\n\nfunction yesFlow(present: boolean): string { return "success"; }';
var noFlow = 'function noFlow(present) {}';
var confusingFlow = 'var foo = "bar"\n\n// This is not a realy @flow comment';

ruleTester.run('require-flow', rule, {
  valid: [
    {code: withFlow, parser: 'babel-eslint'},
    {code: noFlow, options: ['never']},
    {code: withFlow, options: ['always'], parser: 'babel-eslint'},
    {code: confusingFlow, options: ['never']},
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
      code: explicitNoFlow,
      parser: 'babel-eslint',
      options: ['explicit'],
      errors: [],
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
