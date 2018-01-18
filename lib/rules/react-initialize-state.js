const Components = require('eslint-plugin-react/lib/util/Components');
const {uncast, getName} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Requires that React component state be initialized when it has a non-empty type.',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },

  create: Components.detect((context, components, utils) => {
    let classInfo = null;

    return {
      ClassDeclaration(node) {
        if (!utils.isES6Component(node)) {
          return;
        }

        classInfo = {
          hasStateType: classHasNonEmptyStateType(node),
          declaredState: false,
        };
      },
      ClassProperty(node) {
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
  }),
};

function classHasNonEmptyStateType({superTypeParameters}) {
  return (
    Boolean(superTypeParameters) &&
    superTypeParameters.params.length > 1 &&
    superTypeParameters.params[1].type !== 'TSNeverKeyword' &&
    superTypeParameters.params[1].type !== 'TSAnyKeyword' &&
    superTypeParameters.params[1].type !== 'AnyTypeAnnotation' &&
    (superTypeParameters.params[1].typeName == null ||
      superTypeParameters.params[1].typeName.members == null ||
      superTypeParameters.params[1].typeName.members.length > 0) &&
    (superTypeParameters.params[1].properties == null ||
      superTypeParameters.params[1].properties.length > 0)
  );
}
