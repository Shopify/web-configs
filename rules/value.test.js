const testRule = require('stylelint-test-rule-tape');
const rule = require('stylelint/lib/rules/value-keyword-case');

testRule(rule, {
  ruleName: rule.ruleName,
  config: require('./value')['value-keyword-case'],
  skipBasicChecks: true,

  reject: [
    {
      code: '$foo: Value;',
    },
    {
      code: '$foo: VALUE;',
    },
    {
      code: '--foo: Monaco;',
    },
    {
      code: '--foo-polaris: Monaco;',
    },
  ],

  accept: [
    {
      code: '$foo: bar;',
    },
    {
      code: '$font-stack: Monaco;',
    },
    {
      code: '--font-stack: Monaco;',
    },
    {
      code: '$polaris-font-stack: Monaco;',
    },
    {
      code: '$foo-font: Monaco;',
    },
    {
      code: '--foo-font: Monaco;',
    },
    {
      code: '.foo { font-family: Monaco; }',
    },
    {
      code: '.foo { font: Monaco; }',
    },
  ],
});

