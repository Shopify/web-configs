const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-type-state');

const ruleTester = new RuleTester();

require('@typescript-eslint/parser');

const parser = '@typescript-eslint/parser';

const errors = [
  {
    type: 'ClassProperty',
    message:
      'Add the type of the state instance property so that it matches the second type parameter of your React component.',
  },
];

ruleTester.run('react-type-state', rule, {
  valid: [
    {
      code: 'class Button {}',
      parser,
    },
    {
      code: 'class Button<Props, State> {}',
      parser,
    },
    {
      code: 'class Button extends React.Component<Props, State> {}',
      parser,
    },
    {
      code: 'class Button extends React.PureComponent<Props, State> {}',
      parser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State = {};
      }`,
      parser,
    },
    {
      code: `class Button extends React.PureComponent<Props, State> {
        state: State = {};
      }`,
      parser,
    },
  ],
  invalid: [
    {
      code: `class Button extends React.Component<Props, State> {
        state = {};
      }`,
      errors,
      parser,
    },
    {
      code: `class Button extends React.PureComponent<Props, State> {
        state = {};
      }`,
      errors,
      parser,
    },
  ],
});
