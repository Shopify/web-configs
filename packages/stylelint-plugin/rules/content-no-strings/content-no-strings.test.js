const getTestRule = require('jest-preset-stylelint/getTestRule');

const {ruleName} = require('./content-no-strings');

const testRule = getTestRule({plugins: [__dirname]});

testRule({
  ruleName,
  config: true,
  skipBasicChecks: true,

  reject: [
    {
      code: ".foo::before {content: 'nope, no i18n here' }",
      message:
        'You must not hard-code unlocalized strings into the `content` property (@shopify/content-no-strings)',
    },
    {
      code: '.foo::before {content: "none here either" }',
      message:
        'You must not hard-code unlocalized strings into the `content` property (@shopify/content-no-strings)',
    },
    {
      code: ".foo::before {content: counter(ordered-counter, decimal) '.' }",
      message:
        'You must not hard-code unlocalized strings into the `content` property (@shopify/content-no-strings)',
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
