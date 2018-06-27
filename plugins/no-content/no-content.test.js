const testRule = require('stylelint-test-rule-tape');
const shopifyi18n = require('.');

testRule(shopifyi18n.rule, {
  ruleName: shopifyi18n.ruleName,
  config: true,
  skipBasicChecks: true,

  reject: [
    {
      code: ".foo {content: 'nope, no i18n here'}",
    },
    {
      code: '.foo {content: "none here either"}',
    },
  ],

  accept: [
    {
      code: ".foo { content: '' }",
    },
    {
      code: '.foo { content: "" }',
    },
    {
      code: '.foo { content: none }',
    },
  ],
});

