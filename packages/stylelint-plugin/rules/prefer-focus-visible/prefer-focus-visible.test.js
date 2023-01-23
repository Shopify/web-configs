const getTestRule = require('jest-preset-stylelint/getTestRule');

const {ruleName} = require('./prefer-focus-visible');

const testRule = getTestRule({plugins: [__dirname]});

const message =
  'Use `:focus-visible` over `:focus` for cleaner focus states for users navigating via traditional pointer devices. (@shopify/prefer-focus-visible)';

testRule({
  ruleName,
  config: true,
  skipBasicChecks: true,

  reject: [
    {
      code: 'a:focus { color: red; }',
      message,
    },
    {
      code: '.foo:focus { color: red; }',
      message,
    },
    {
      code: '#id:focus { color: red; }',
      message,
    },
    {
      code: '.foo:focus:not(:active) { color: red; }',
      message,
    },
    {
      code: 'a::focus { color: red; }',
      message,
    },
    {
      code: '.foo::focus { color: red; }',
      message,
    },
    {
      code: '#id::focus { color: red; }',
      message,
    },
    {
      code: '.foo::focus:not(:active) { color: red; }',
      message,
    },
  ],

  accept: [
    {
      code: 'a:focus-visible { color: red; }',
    },
    {
      code: '.foo:focus-visible { color: red; }',
    },
    {
      code: '#id:focus-visible { color: red; }',
    },
    {
      code: '.foo:focus-visible:not(:active) { color: red; }',
    },
    {
      code: 'a::focus-visible { color: red; }',
    },
    {
      code: '.foo::focus-visible { color: red; }',
    },
    {
      code: '#id::focus-visible { color: red; }',
    },
    {
      code: '.foo::focus-visible:not(:active) { color: red; }',
    },
  ],
});
