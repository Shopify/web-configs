import {testRule} from '../../tests/utilities';

const contentNoStrings = require('.');

testRule(contentNoStrings, {
  ruleName: contentNoStrings.ruleName,
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
