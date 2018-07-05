const testRule = require('stylelint-test-rule-tape');
const shopifyi18n = require('.');

testRule(shopifyi18n.rule, {
  ruleName: shopifyi18n.ruleName,
  config: true,
  skipBasicChecks: true,

  reject: [
    {
      code: ".foo::before {content: 'nope, no i18n here' }",
    },
    {
      code: '.foo::before {content: "none here either" }',
    },
    {
      code: ".foo::before {content: counter(ordered-counter, decimal) '.' }",
    },
  ],

  accept: [
    {
      code: ".foo::before { content: '' }",
    },
    {
      code: '.foo::before { content: "" }',
    },
    {
      code: '.foo::before {content: counter(ordered-counter, decimal) }',
    },
    {
      code: '.foo::before { content: none }',
    },
    {
      code: '.foo::before { content: open-quote }',
    },
  ],
});

