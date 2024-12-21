const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/react-initialize-state');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
  settings: {react: {version: 'detect'}},
});

const errors = [
  {
    type: 'ClassDeclaration',
    message: 'You declared a type for state, but did not initialize it.',
  },
];

ruleTester.run('react-initialize-state', rule, {
  valid: [
    {
      code: 'class Button {}',
    },
    {
      code: 'class Button extends Klass {}',
    },
    {
      code: 'class Button extends React.Component {}',
    },
    {
      code: 'class Button extends React.Component<Props> {}',
    },
    {
      code: 'class Button extends React.Component<Props, {}> {}',
    },
    {
      code: 'class Button extends React.Component<Props, any> {}',
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = {focused: false};
      }`,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = {focused: false};
      }`,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = getState();
      }`,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = {focused: true};
        }
      }`,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = getState();
        }
      }`,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;

        constructor() {
          this.state = {};
        }
      }`,
    },
    {
      code: 'class Button extends React.Component<Props, never> {}',
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          (this as any).state = {};
        }
      }`,
    },
  ],
  invalid: [
    {
      code: 'class Button extends React.Component<Props, {focused: boolean}> {}',
      errors,
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = null;
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        states = {focused: false};
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = null;
        }
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.states = {focused: true};
        }
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props> {
        state: State;
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;
      }`,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;
        constructor() {}
      }`,
      errors,
    },
    {
      code: `
        class Button extends React.Component<Props, State> {}
        class OtherClass {}
      `,
      errors,
    },
  ],
});
