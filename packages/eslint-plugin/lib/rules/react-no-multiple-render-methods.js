const {docsUrl} = require('../utilities');
const {isES6Component} = require('../utilities/component-utils');

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

  create(context) {
    let componentIsES6 = false;

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
        componentIsES6 = isES6Component(node, context);
      },

      MethodDefinition(node) {
        if (!componentIsES6 || !isRenderMethod(node)) {
          return;
        }

        report(node);
      },

      ArrowFunctionExpression(node) {
        if (!componentIsES6 || !isRenderMethod(node)) {
          return;
        }

        report(node);
      },
    };
  },
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
