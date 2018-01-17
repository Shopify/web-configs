const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-initialize-state');

const ruleTester = new RuleTester();

require('babel-eslint');
require('typescript-eslint-parser');

const babelParser = 'babel-eslint';
const typeScriptParser = 'typescript-eslint-parser';

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
      parser: babelParser,
    },
    {
      code: 'class Button extends Klass {}',
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component {}',
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component<Props> {}',
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component<Props, {}> {}',
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component<Props, any> {}',
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = {focused: false};
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = {focused: false};
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = getState();
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = {focused: true};
        }
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = getState();
        }
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;

        constructor() {
          this.state = {};
        }
      }`,
      parser: babelParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          (this: any).state = {};
        }
      }`,
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component {}',
      parser: typeScriptParser,
    },
    {
      code: 'class Button extends React.Component<Props, {}> {}',
      parser: typeScriptParser,
    },
    {
      code: 'class Button extends React.Component<Props, never> {}',
      parser: typeScriptParser,
    },
    {
      code: 'class Button extends React.Component<Props, any> {}',
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = {focused: false};
      }`,
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = {focused: false};
      }`,
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state = getState();
      }`,
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = {focused: true};
        }
      }`,
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = getState();
        }
      }`,
      parser: typeScriptParser,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          (this as any).state = {};
        }
      }`,
      parser: typeScriptParser,
    },
  ],
  invalid: [
    {
      code:
        'class Button extends React.Component<Props, {focused: boolean}> {}',
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = null;
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        states = {focused: false};
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = null;
        }
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.states = {focused: true};
        }
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props> {
        state: State;
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        state: State;

        constructor() {}
      }`,
      parser: babelParser,
      errors,
    },
    {
      code: `
        class Button extends React.Component<Props, State> {}
        class OtherClass {}
      `,
      parser: babelParser,
      errors,
    },
    {
      code:
        'class Button extends React.Component<Props, {focused: boolean}> {}',
      parser: typeScriptParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, {focused: boolean}> {
        state = null;
      }`,
      parser: typeScriptParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        states = {focused: false};
      }`,
      parser: typeScriptParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.state = null;
        }
      }`,
      parser: typeScriptParser,
      errors,
    },
    {
      code: `class Button extends React.Component<Props, State> {
        constructor() {
          this.states = {focused: true};
        }
      }`,
      parser: typeScriptParser,
      errors,
    },
    {
      code: `
        class Button extends React.Component<Props, State> {}
        class OtherClass {}
      `,
      parser: typeScriptParser,
      errors,
    },
  ],
});
