const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/no-context-menu');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

const error = {
  message:
    'Do not override the native context menu. It almost always goes against users expectations and results in worse accessibility.',
};

ruleTester.run('no-context-menu', rule, {
  valid: [
    // Valid JSX cases
    {code: '<div onClick={() => {}} />'},
    {code: '<button onMouseDown={() => {}} />'},
    {code: '<div onKeyPress={() => {}} />'},

    // Valid addEventListener cases
    {code: 'element.addEventListener("click", handler)'},
    {code: 'element.addEventListener("mousedown", () => {})'},
    {code: 'element.addEventListener("keypress", function() {})'},

    // Valid useEventListener cases
    {code: 'useEventListener("click", handleEvent, ref)'},
    {code: 'useEventListener("mousedown", () => {}, element)'},
    {code: 'useEventListener("keypress", function() {}, container)'},

    // Non-addEventListener method calls
    {code: 'element.removeEventListener("contextmenu", handler)'},
    {code: 'otherMethod("contextmenu", handler)'},
  ],

  invalid: [
    // Invalid JSX cases
    {
      code: '<div onContextMenu={() => {}} />',
      errors: [error],
    },
    {
      code: '<button onContextMenu={handleContextMenu} />',
      errors: [error],
    },
    {
      code: '<CustomComponent onContextMenu={this.handleContextMenu} />',
      errors: [error],
    },

    // Invalid addEventListener cases
    {
      code: 'element.addEventListener("contextmenu", handler)',
      errors: [error],
    },
    {
      code: 'element.addEventListener("contextmenu", () => {})',
      errors: [error],
    },
    {
      code: 'element.addEventListener("contextmenu", function() {})',
      errors: [error],
    },
    {
      code: 'document.addEventListener("contextmenu", handler)',
      errors: [error],
    },
    {
      code: 'window.addEventListener("contextmenu", handler)',
      errors: [error],
    },

    // Invalid useEventListener cases
    {
      code: 'useEventListener("contextmenu", handleEvent, ref)',
      errors: [error],
    },
    {
      code: 'useEventListener("contextmenu", () => {}, element)',
      errors: [error],
    },
    {
      code: 'useEventListener("contextmenu", function() {}, container)',
      errors: [error],
    },
  ],
});
