const {RuleTester} = require('eslint');
const babelParser = require('@babel/eslint-parser');
const typescriptParser = require('@typescript-eslint/parser');

const rule = require('../../../lib/rules/react-prefer-private-members');

const ruleTester = new RuleTester({
  languageOptions: {parser: typescriptParser},
  settings: {react: {version: 'detect'}},
});

function makeError({type = 'PropertyDefinition', memberName, componentName}) {
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
      languageOptions: {parser: babelParser},
    },
    {
      code: 'class Button extends React.Component {}',
      languageOptions: {parser: babelParser},
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
      languageOptions: {parser: babelParser},
    },
    {
      code: `class CompoundComponent extends React.Component {
        static propTypes = {}
        static Item = Item
        static AnotherItem = AnotherItem
        render() {}
      }`,
      languageOptions: {parser: babelParser},
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
      languageOptions: {parser: babelParser},
    },
  ],
  invalid: [
    {
      code: `class Button extends React.Component {
        publicMember = true;
        componentDidMount() {}
      }`,
      languageOptions: {parser: babelParser},
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
      languageOptions: {parser: babelParser},
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
        makeError({
          type: 'PropertyDefinition',
          memberName: 'inValid',
          componentName: 'Button',
        }),
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
      languageOptions: {parser: babelParser},
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
      languageOptions: {parser: babelParser},
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
      languageOptions: {parser: babelParser},
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
