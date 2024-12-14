const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');
const {parser: typescriptParser} = require('typescript-eslint');

const rule = require('../../../lib/rules/react-type-state');

const ruleTester = new RuleTester({
  languageOptions: {parser: typescriptParser},
  settings: {react: {version: 'detect'}},
});

const errors = [
  {
    type: 'PropertyDefinition',
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
