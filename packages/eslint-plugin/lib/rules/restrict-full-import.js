const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent importing the entirety of a package.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('restrict-full-import'),
    },
    schema: [
      {
        restricted: {
          type: 'array',
          items: {
            type: 'string',
          },
          uniqueItems: true,
        },
      },
    ],
  },

  create(context) {
    const restricted = context.options[0] || [];

    function isRestrictedModule(mod) {
      return restricted.indexOf(mod) >= 0;
    }

    function isPotentiallyProblematicLeft(left) {
      return (
        left.type === 'Identifier' ||
        (left.type === 'ObjectPattern' &&
          left.properties.some((prop) => {
            return (
              prop.type === 'SpreadProperty' ||
              prop.type === 'ExperimentalRestProperty' ||
              prop.type === 'RestElement'
            );
          })) ||
        (left.type === 'ArrayPattern' &&
          left.elements.some((element) => {
            return element != null && element.type === 'RestElement';
          }))
      );
    }

    function isPotentiallyProblematicRight(right) {
      return (
        right &&
        right.type === 'CallExpression' &&
        right.callee.type === 'Identifier' &&
        right.callee.name === 'require' &&
        isRestrictedModule(right.arguments[0].value)
      );
    }

    function isFullImportSpecifier(specifier) {
      return (
        specifier.type === 'ImportDefaultSpecifier' ||
        specifier.type === 'ImportNamespaceSpecifier' ||
        (specifier.type === 'ImportSpecifier' &&
          specifier.imported.name === 'default')
      );
    }

    function hasFullImport(specifiers) {
      return specifiers.some(isFullImportSpecifier);
    }

    function checkImportDeclaration(node) {
      const specifiers = node.specifiers;

      if (isRestrictedModule(node.source.value) && hasFullImport(specifiers)) {
        context.report({
          node:
            specifiers.length > 1
              ? specifiers.find(isFullImportSpecifier)
              : node,
          message: `Unexpected full import of restricted module '${node.source.value}'.`,
        });
      }
    }

    function checkRequire(node, left, right) {
      if (
        isPotentiallyProblematicLeft(left) &&
        isPotentiallyProblematicRight(right)
      ) {
        context.report({
          node,
          message: `Unexpected full import of restricted module '${right.arguments[0].value}'.`,
        });
      }
    }

    function checkVariableDeclarator(node) {
      checkRequire(node, node.id, node.init);
    }

    function checkAssignmentExpression(node) {
      checkRequire(node, node.left, node.right);
    }

    return {
      ImportDeclaration: checkImportDeclaration,
      VariableDeclarator: checkVariableDeclarator,
      AssignmentExpression: checkAssignmentExpression,
    };
  },
};
