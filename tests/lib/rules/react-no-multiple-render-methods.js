const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-no-multiple-render-methods');

const ruleTester = new RuleTester();

require('babel-eslint');

const babelParser = 'babel-eslint';

function error(memberName) {
  return {
    type: 'MethodDefinition',
    message: `Don’t use multiple render methods in a single component; they generally make your component harder to read. Instead break ${memberName} out into its own component and render it inside this one.`,
  };
}

ruleTester.run('react-no-multiple-render-methods', rule, {
  valid: [
    {
      code: `class Button extends React.Component {
        render() {}
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component {
        otherMethod() {}
        render() {}
      }`,
      parser: babelParser,
    },
  ],
  invalid: [
    {
      code: `class Button extends React.Component {
        renderFoo() {}
      }`,
      parser: babelParser,
      errors: [error('renderFoo')],
    },
    {
      code: `class Button extends React.Component {
        renderFoo() {}
        render() {}
      }`,
      parser: babelParser,
      errors: [error('renderFoo')],
    },
    {
      code: `class Button extends React.Component {
        renderFoo() {}
        renderBar() {}
        render() {}
      }`,
      parser: babelParser,
      errors: [error('renderFoo'), error('renderBar')],
    },
  ],
});
