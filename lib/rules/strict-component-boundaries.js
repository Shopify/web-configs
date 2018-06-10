const pascalCase = require('pascal-case');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent module imports between components.',
      category: 'Best Practises',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/strict-component-boundaries.md',
    },
    fixable: null,
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const pathParts = node.source.value
          .split('/')
          .filter((part) => part[0] !== '.');

        if (
          (hasAnotherComponentInPath(pathParts) && pathParts.length > 1) ||
          (hasComponentDirectoryInPath(pathParts) && pathParts.length > 2)
        ) {
          context.report({
            node,
            message: 'Strict component boundaries.',
          });
        }
      },
    };
  },
};

function hasComponentDirectoryInPath(pathParts) {
  return Boolean(pathParts.filter((part) => part === 'components').length);
}

function hasAnotherComponentInPath(pathParts) {
  return Boolean(pathParts.filter((part) => part === pascalCase(part)).length);
}
