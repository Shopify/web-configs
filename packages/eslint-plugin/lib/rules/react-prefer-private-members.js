const {pascalCase} = require('change-case');

const {docsUrl} = require('../utilities');
const {isES6Component} = require('../utilities/component-utils');

module.exports = {
  meta: {
    docs: {
      description: 'Disallow public members within React component classes',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('react-prefer-private-members'),
    },
  },

  create(context) {
    let componentIsES6 = 0;
    let componentName = null;

    function report({node, componentName: classComponent}) {
      const {
        key: {name},
      } = node;

      context.report({
        node,
        message: `'{{name}}' should be a private member of '{{classComponent}}'.`,
        data: {name, classComponent},
      });
    }

    return {
      ClassDeclaration(node) {
        if (isES6Component(node, context)) {
          componentIsES6++;
        }
        componentName = node.id.name;
      },
      'ClassDeclaration:exit': function (node) {
        if (isES6Component(node, context)) {
          componentIsES6--;
        }
      },
      'ClassProperty,PropertyDefinition': function (node) {
        if (componentIsES6 === 0 || isValid(node)) {
          return;
        }

        report({node, componentName});
      },
      MethodDefinition(node) {
        if (componentIsES6 === 0 || isValid(node)) {
          return;
        }

        report({node, componentName});
      },
    };
  },
};

function isValid(node) {
  return (
    node.accessibility === 'private' ||
    isReactLifeCycleMethod(node) ||
    isReactStaticProperty(node) ||
    isConstructor(node) ||
    isCompoundComponentMember(node)
  );
}

function isReactLifeCycleMethod({key: {name}}) {
  return [
    'getDerivedStateFromProps',
    'getDerivedStateFromError',
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
    'getChildContext',
    'context',
    'state',
    'render',
  ].some((method) => method === name);
}

function isReactStaticProperty({key: {name}}) {
  return [
    'propTypes',
    'contextTypes',
    'childContextTypes',
    'defaultProps',
    'displayName',
  ].some((method) => method === name);
}

function isConstructor({kind}) {
  return kind === 'constructor';
}

function isCompoundComponentMember({key: {name}}) {
  return name === pascalCase(name);
}
