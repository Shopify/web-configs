const Components = require('eslint-plugin-react/lib/util/Components');

module.exports = {
  meta: {
    docs: {
      description: 'Disallow public members within React component classes',
      category: 'Possible Errors',
      recommended: true,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/react-prefer-private-members.md',
    },
  },

  create: Components.detect((context, components, utils) => {
    let isES6Component = false;
    let componentName = null;

    return {
      ClassDeclaration(node) {
        isES6Component = utils.isES6Component(node);
        componentName = node.id.name;
      },
      ClassProperty(node) {
        if (!isES6Component || isValid(node)) {
          return;
        }

        context.report(makeReport(node, {componentName}));
      },
      MethodDefinition(node) {
        if (!isES6Component || isValid(node)) {
          return;
        }

        context.report(makeReport(node, {componentName}));
      },
    };
  }),
};

function makeReport(node, {componentName}) {
  const {
    key: {name},
  } = node;
  return {
    node,
    message: `${name} should be a private member of ${componentName}.`,
  };
}

function isValid(node) {
  return (
    node.accessibility === 'private' ||
    isReactLifeCycleMethod(node) ||
    isReactStaticProperty(node)
  );
}

function isReactLifeCycleMethod({key: {name}}) {
  return [
    'getDerivedStateFromProps',
    'componentWillMount',
    'UNSAFE_componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'UNSAFE_componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'UNSAFE_componentWillUpdate',
    'getSnapshotBeforeUpdate',
    'componentDidUpdate',
    'componentDidCatch',
    'componentWillUnmount',
    'render',
  ].some((method) => method === name);
}

function isReactStaticProperty({key: {name}}) {
  return [
    'propTypes',
    'contextTypes',
    'childContextTypes',
    'defaultProps',
  ].some((method) => method === name);
}
