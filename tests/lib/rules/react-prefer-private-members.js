const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-prefer-private-members');

const ruleTester = new RuleTester();

require('babel-eslint');
require('typescript-eslint-parser');

const babelParser = 'babel-eslint';
const typeScriptParser = 'typescript-eslint-parser';

function makeError({type = 'ClassProperty', memberName, componentName}) {
  return [
    {
      type,
      message: `${memberName} should be a private member of ${componentName}.`,
    },
  ];
}

ruleTester.run('react-prefer-private-members', rule, {
  valid: [
    {
      code: `class Button extends React.Component {
        private member = true;
        componentDidMount() {}
      }`,
      parser: typeScriptParser,
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
        getDerivedStateFromProps() {}
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
  ],
  invalid: [
    {
      code: `class Button extends React.Component {
        publicMember = true;
        componentDidMount() {}
      }`,
      parser: babelParser,
      errors: makeError({memberName: 'publicMember', componentName: 'Button'}),
    },
    {
      code: `class Button extends React.Component {
        publicMethod() {}
        componentDidMount() {}
      }`,
      parser: babelParser,
      errors: makeError({
        type: 'MethodDefinition',
        memberName: 'publicMethod',
        componentName: 'Button',
      }),
    },
  ],
});
