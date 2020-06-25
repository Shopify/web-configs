const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/react-prefer-private-members');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

const babelParser = require.resolve('babel-eslint');

function makeError({type = 'ClassProperty', memberName, componentName}) {
  return {
    type,
    message: `'${memberName}' should be a private member of '${componentName}'.`,
  };
}

ruleTester.run('react-prefer-private-members', rule, {
  valid: [
    {
      code: `class Button extends React.Component {
        private member = true;
        componentDidMount() {}
      }`,
    },
    {
      code: `class Button extends Klass {
        publicMember = true
        publicMethod() {}
      }`,
      parser: babelParser,
    },
    {
      code: 'class Button extends React.Component {}',
      parser: babelParser,
    },
    {
      code: `class KitchenSink extends React.Component {
        static propTypes = {}
        static defaultProps = {}
        static childContextTypes = {}
        static contextTypes = {}
        static displayName = ''
        state = {}
        constructor() {}
        getChildContext() {}
        getDerivedStateFromProps() {}
        getDerivedStateFromError() {}
        componentWillMount() {}
        UNSAFE_componentWillMount() {}
        componentDidMount() {}
        componentWillReceiveProps() {}
        UNSAFE_componentWillReceiveProps() {}
        shouldComponentUpdate() {}
        componentWillUpdate() {}
        UNSAFE_componentWillUpdate() {}
        getSnapshotBeforeUpdate() {}
        componentDidUpdate() {}
        componentDidCatch() {}
        componentWillUnmount() {}
        render() {}
      }`,
      parser: babelParser,
    },
    {
      code: `class CompoundComponent extends React.Component {
        static propTypes = {}
        static Item = Item
        static AnotherItem = AnotherItem
        render() {}
      }`,
      parser: babelParser,
    },
    {
      code: `class NormalClass {
      constructor() {
        class NestedReactComponentClass extends React.Component {
          render() {}
        }
      }

      get foo() {}
    }`,
      parser: babelParser,
    },
  ],
  invalid: [
    {
      code: `class Button extends React.Component {
        publicMember = true;
        componentDidMount() {}
      }`,
      parser: babelParser,
      errors: [
        makeError({memberName: 'publicMember', componentName: 'Button'}),
      ],
    },
    {
      code: `class Button extends React.Component {
        static Valid = Valid;
        static inValid = inValid;
        render() {}
      }`,
      parser: babelParser,
      errors: [makeError({memberName: 'inValid', componentName: 'Button'})],
    },
    {
      code: `class Button extends React.Component {
        private validMember: string;
        private alsoValidMember() {};
        inValid: string;
        alsoInvalid() {}
        render() {}
      }`,
      errors: [
        makeError({memberName: 'inValid', componentName: 'Button'}),
        makeError({
          type: 'MethodDefinition',
          memberName: 'alsoInvalid',
          componentName: 'Button',
        }),
      ],
    },
    {
      code: `class Button extends React.Component {
        publicMethod() {}
        componentDidMount() {}
      }`,
      parser: babelParser,
      errors: [
        makeError({
          type: 'MethodDefinition',
          memberName: 'publicMethod',
          componentName: 'Button',
        }),
      ],
    },
    {
      code: `class PureButton extends React.PureComponent {
        publicMethod() {}
        componentDidMount() {}
      }`,
      parser: babelParser,
      errors: [
        makeError({
          type: 'MethodDefinition',
          memberName: 'publicMethod',
          componentName: 'PureButton',
        }),
      ],
    },
    {
      code: `class NormalClass {
      constructor() {
        class NestedReactComponentClass extends React.Component {
          publicMethod() {}
          render() {}
        }
      }

      get foo() {}
    }`,
      parser: babelParser,
      errors: [
        makeError({
          type: 'MethodDefinition',
          memberName: 'publicMethod',
          componentName: 'NestedReactComponentClass',
        }),
      ],
    },
  ],
});
