const Components = require('eslint-plugin-react/lib/util/Components');

const {docsUrl} = require('../utilities');

const message = [
  'Don’t use multiple render methods in a single component;',
  'they generally make your component harder to read.',
  'Instead break {{name}} out into its own component',
  'and render it inside this one.',
].join(' ');

module.exports = {
  meta: {
    docs: {
      description:
        'Disallow multiple render methods in React component classes',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('react-no-multiple-render-methods'),
    },
  },

  create: Components.detect((context, components, utils) => {
    let isES6Component = false;

    function report(node) {
      const name = getMethodName(node);

      context.report({
        node,
        message,
        data: {name},
      });
    }

    return {
      ClassDeclaration(node) {
        isES6Component = utils.isES6Component(node);
      },

      MethodDefinition(node) {
        if (!isES6Component || !isRenderMethod(node)) {
          return;
        }

        report(node);
      },

      ArrowFunctionExpression(node) {
        if (!isES6Component || !isRenderMethod(node)) {
          return;
        }

        report(node);
      },
    };
  }),
};

function isRenderMethod(node) {
  const name = getMethodName(node);

  if (name == null) {
    return false;
  }

  return name.match(/^render[a-zA-Z0-9]+/i);
}

function getMethodName(node) {
  if (node.key) {
    return node.key.name;
  }

  return node.parent && node.parent.key && node.parent.key.name;
}
