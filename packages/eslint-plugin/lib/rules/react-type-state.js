const {docsUrl, getName} = require('../utilities');
const {isES6Component} = require('../utilities/component-utils');

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

  create(context) {
    let inTypeScriptReactComponent = false;

    function looksLikeTypeScriptComponent(node) {
      return (
        isES6Component(node, context) &&
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
  },
};
