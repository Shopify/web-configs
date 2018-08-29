const pascalCase = require('pascal-case');
const resolve = require('eslint-module-utils/resolve').default;

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
        const importSource = node.source.value;
        const resolvedSource = resolve(importSource, context);
        const pathParts = resolvedSource
          ? pathSegmantsFromSource(resolvedSource)
          : pathSegmantsFromSource(importSource);

        if (isCoreModule(resolvedSource) || inNodeModules(pathParts)) {
          return;
        }

        if (
          ((hasAnotherComponentInPath(pathParts) && pathParts.length > 1) ||
            (hasDirectoryInPath(pathParts, 'components') &&
              pathParts.length > 2)) &&
          !hasDirectoryInPath(pathParts, 'fixtures')
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

function isCoreModule(resolvedSource) {
  return resolvedSource === null;
}

function inNodeModules(pathParts) {
  return Boolean(pathParts.filter((part) => part === 'node_modules').length);
}

function hasDirectoryInPath(pathParts, directory) {
  return Boolean(pathParts.filter((part) => part === directory).length);
}

function hasAnotherComponentInPath(pathParts) {
  return Boolean(pathParts.filter((part) => part === pascalCase(part)).length);
}

function pathSegmantsFromSource(source) {
  return source.split('/').filter((part) => part[0] !== '.');
}
