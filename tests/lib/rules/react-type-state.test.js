const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-type-state');

const ruleTester = new RuleTester({
  parser: require.resolve('typescript-eslint-parser'),
});

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
    },
    {
      code: 'class Button<Props, State> {}',
    },
    {
      code: 'class Button extends React.Component<Props, State> {}',
    },
    {
      code: 'class Button extends React.PureComponent<Props, State> {}',
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State = {};
      }`,
    },
    {
      code: `class Button extends React.PureComponent<Props, State> {
        state: State = {};
      }`,
    },
  ],
  invalid: [
    {
      code: `class Button extends React.Component<Props, State> {
        state = {};
      }`,
      errors,
    },
    {
      code: `class Button extends React.PureComponent<Props, State> {
        state = {};
      }`,
      errors,
    },
  ],
});
