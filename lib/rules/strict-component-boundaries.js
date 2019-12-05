const {basename, extname, relative} = require('path');

const {pascalCase} = require('change-case');
const resolve = require('eslint-module-utils/resolve').default;

const {docsUrl} = require('../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent module imports between components.',
      category: 'Best Practises',
      recommended: false,
      uri: docsUrl('strict-component-boundaries'),
    },
    fixable: null,
  },
  create(context) {
    function report(node) {
      context.report({
        node,
        message: `Do not reach into an individual component's folder for nested modules. Import from the closest shared components folder instead.`,
      });
    }

    return {
      ImportDeclaration(node) {
        const importSource = node.source.value;
        const resolvedSource = resolve(importSource, context);

        if (
          isCoreModule(resolvedSource) ||
          isNotFound(resolvedSource) ||
          inNodeModules(pathSegmantsFromSource(resolvedSource))
        ) {
          return;
        }

        const pathDifference = relative(context.getFilename(), resolvedSource);
        const pathDifferenceParts = pathSegmantsFromSource(pathDifference);

        if (
          hasAnotherComponentInPath(pathDifferenceParts) &&
          pathDifferenceParts.length > 1 &&
          !indexFile(pathDifference) &&
          !validFixtureImport(pathDifferenceParts)
        ) {
          report(node);
          return;
        }

        if (
          hasDirectoryInPath(pathDifferenceParts, 'components') &&
          pathDifferenceParts.length > 2 &&
          !validFixtureImport(pathDifferenceParts)
        ) {
          report(node);
        }
      },
    };
  },
};

function isNotFound(resolvedSource) {
  return resolvedSource === undefined;
}

function isCoreModule(resolvedSource) {
  return resolvedSource === null;
}

function inNodeModules(pathParts) {
  return Boolean(pathParts.filter((part) => part === 'node_modules').length);
}

function hasDirectoryInPath(pathParts, directory) {
  return Boolean(pathParts.filter((part) => part === directory).length);
}

function validFixtureImport(pathParts) {
  if (!hasDirectoryInPath(pathParts, 'fixtures')) {
    return false;
  }

  const fixtureIndexInPath = pathParts.findIndex((part) => part === 'fixtures');
  const pathPartsBeforeFixture = pathParts.slice(0, fixtureIndexInPath);

  if (!hasAnotherComponentInPath(pathPartsBeforeFixture)) {
    return true;
  }

  return false;
}

function hasAnotherComponentInPath(pathParts) {
  return Boolean(pathParts.filter((part) => part === pascalCase(part)).length);
}

function pathSegmantsFromSource(source) {
  return source.split('/').filter((part) => part[0] !== '.');
}

function indexFile(src) {
  return basename(src, extname(src)) === 'index';
}
