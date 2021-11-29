const Components = require('eslint-plugin-react/lib/util/Components');

const {docsUrl, getName} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Require that React component state be typed in TypeScript.',
      category: 'Possible Errors',
      recommended: true,
      uri: docsUrl('react-type-state'),
    },
    schema: [],
  },

  create: Components.detect((context, components, utils) => {
    let inTypeScriptReactComponent = false;

    function looksLikeTypeScriptComponent(node) {
      return (
        utils.isES6Component(node) &&
        Boolean(node.superTypeParameters) &&
        Boolean(node.superTypeParameters.params) &&
        node.superTypeParameters.params.length > 0 &&
        node.superTypeParameters.params[0].type === 'TSTypeReference'
      );
    }

    return {
      ClassDeclaration(node) {
        inTypeScriptReactComponent = looksLikeTypeScriptComponent(node);
      },
      'ClassProperty,PropertyDefinition': function (node) {
        if (
          !inTypeScriptReactComponent ||
          getName(node.key) !== 'state' ||
          node.typeAnnotation != null
        ) {
          return;
        }

        context.report(
          node,
          'Add the type of the state instance property so that it matches the second type parameter of your React component.',
        );
      },
    };
  }),
};
