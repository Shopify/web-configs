const {docsUrl, uncast, getName} = require('../utilities');
const {isES6Component} = require('../utilities/component-utils');

module.exports = {
  meta: {
    docs: {
      description:
        'Require that React component state be initialized when it has a non-empty type.',
      category: 'Possible Errors',
      recommended: true,
      uri: docsUrl('react-initialize-state'),
    },
    schema: [],
  },

  create(context) {
    let classInfo = null;

    return {
      ClassDeclaration(node) {
        if (!isES6Component(node, context)) {
          return;
        }

        classInfo = {
          hasStateType: !classHasEmptyStateType(node),
          declaredState: false,
        };
      },
      'ClassProperty,PropertyDefinition': function (node) {
        if (classInfo == null || getName(node.key) !== 'state') {
          return;
        }

        if (node.typeAnnotation != null) {
          classInfo.hasStateType = true;
        }

        if (node.value == null || node.value.type === 'Literal') {
          return;
        }

        classInfo.declaredState = true;
      },
      AssignmentExpression(node) {
        if (classInfo == null) {
          return;
        }

        if (
          node.left.type === 'MemberExpression' &&
          uncast(node.left.object).type === 'ThisExpression' &&
          getName(node.left.property) === 'state' &&
          node.right.type !== 'Literal'
        ) {
          classInfo.declaredState = true;
        }
      },
      'ClassDeclaration:exit': (node) => {
        if (classInfo && classInfo.hasStateType && !classInfo.declaredState) {
          context.report(
            node,
            'You declared a type for state, but did not initialize it.',
          );
        }

        classInfo = null;
      },
    };
  },
};

function classHasEmptyStateType({superTypeArguments}) {
  const hasNoStateType =
    !superTypeArguments ||
    superTypeArguments.params.length < 2 ||
    superTypeArguments.params[1].type === 'TSNeverKeyword' ||
    superTypeArguments.params[1].type === 'TSAnyKeyword' ||
    superTypeArguments.params[1].type === 'AnyTypeAnnotation';

  if (hasNoStateType) {
    return true;
  }

  if (superTypeArguments.params[1].type === 'ObjectTypeAnnotation') {
    return superTypeArguments.params[1].properties.length === 0;
  }

  if (superTypeArguments.params[1].type === 'TSTypeLiteral') {
    return superTypeArguments.params[1].members.length === 0;
  }

  return false;
}
