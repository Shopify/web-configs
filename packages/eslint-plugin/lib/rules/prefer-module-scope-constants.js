const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer that screaming snake case variables always be defined using `const`, and always appear at module scope.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('prefer-module-scope-constants'),
    },
    schema: [],
  },

  create(context) {
    let inConstDeclaration = false;

    return {
      VariableDeclaration(node) {
        inConstDeclaration = node.kind === 'const';
      },
      VariableDeclarator(node) {
        const {id} = node;

        if (id.type !== 'Identifier' || id.name !== id.name.toUpperCase()) {
          return;
        }

        if (!inConstDeclaration) {
          context.report(
            node,
            'You must use `const` when defining screaming snake case variables. If this is not a constant, use camelcase instead.',
          );
          return;
        }

        const scope = context.sourceCode.getScope(node);

        if (!isTopScope(scope)) {
          context.report(
            node,
            'You must place screaming snake case at module scope. If this is not meant to be a module-scoped variable, use camelcase instead.',
          );
        }
      },
      'VariableDeclaration:exit': () => {
        inConstDeclaration = false;
      },
    };
  },
};

function isTopScope(scope) {
  if (['module', 'global'].includes(scope.type)) {
    return true;
  }

  // CommonJS does not leak values outside of a given file. ESLint handles this
  // by claiming the whole file is wrapped in a function scope
  if (
    scope.upper.block.sourceType === 'commonjs' &&
    scope.upper.type === 'global'
  ) {
    return true;
  }
  return false;
}
