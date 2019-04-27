const {docsUrl} = require('../utilities');

const MAX_RETURN_ELEMENTS = 2;

module.exports = {
  meta: {
    docs: {
      description: 'Restrict the number of returned items from React hooks.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('react-hooks-strict-return'),
    },
    messages: {
      hooksStrictReturn:
        'React hooks must return a tuple of two or fewer values or a single object.',
    },
  },

  create(context) {
    let inHook = 0;

    return {
      VariableDeclarator(node) {
        if (!isHook(node)) {
          return;
        }

        inHook++;
      },
      'VariableDeclarator:exit': function(node) {
        if (!isHook(node)) {
          return;
        }

        inHook--;
      },
      FunctionDeclaration(node) {
        if (!isHook(node)) {
          return;
        }

        inHook++;
      },
      'FunctionDeclaration:exit': function(node) {
        if (!isHook(node)) {
          return;
        }

        inHook--;
      },
      ReturnStatement(node) {
        if (inHook === 0) {
          return;
        }
        if (
          !exceedsMaxReturnProperties(
            node,
            context.getScope(),
            MAX_RETURN_ELEMENTS,
          )
        ) {
          return;
        }

        context.report({
          messageId: 'hooksStrictReturn',
          node,
        });
      },
    };
  },
};

function exceedsMaxReturnProperties(node, scope, max) {
  const {argument} = node;

  if (argument === null) {
    return false;
  }

  const {type, elements} = argument;

  if (type !== 'ArrayExpression') {
    return getProps(node, scope).length > max;
  }

  return (
    elements &&
    elements.reduce((acc, val) => {
      const property = isSpreadElement(val) ? getProps(val, scope) : val;
      return [...acc, ...guranteeArray(property)];
    }, []).length > max
  );
}

function getProps(node, scope) {
  const {references} = getVariableByName(scope, node.argument.name) || {};

  const properties =
    references &&
    references.reduce((acc, ref) => {
      if (
        ref.identifier &&
        ref.identifier.parent &&
        ref.identifier.parent.init &&
        ref.identifier.parent.init.elements
      ) {
        return [...acc, ...ref.identifier.parent.init.elements];
      }
      return acc;
    }, []);

  return properties ? flatten(properties) : [];
}

function isHook(node) {
  return /^use[A-Z0-9].*$/.test(node.id.name);
}

function isSpreadElement(node) {
  if (!node) {
    return false;
  }
  return (
    node.type === 'SpreadElement' || node.type === 'ExperimentalSpreadProperty'
  );
}

function getVariableByName(initialScope, name) {
  let scope = initialScope;

  while (scope) {
    const variable = scope.set.get(name);

    if (variable) {
      return variable;
    }

    scope = scope.upper;
  }

  return null;
}

function flatten(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten,
    );
  }, []);
}

function guranteeArray(maybeArray) {
  return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
}
