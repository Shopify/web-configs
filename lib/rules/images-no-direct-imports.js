const {basename, dirname, extname} = require('path');
const resolve = require('eslint-module-utils/resolve').default;
const {docsUrl} = require('../utilities');

function isImageImport(resolvedSource) {
  return /\.(svg|png|jpg)$/.test(resolvedSource);
}

function isImportFromCurrentFolderIndex(contextFilename, resolvedSource) {
  const isIndex =
    basename(contextFilename, extname(contextFilename)) === 'index';

  return isIndex && dirname(resolvedSource) === dirname(contextFilename);
}

module.exports = {
  meta: {
    docs: {
      description:
        'Prefer importing image files from the index file of the directory instead of the direct path to the image file.',
      category: 'Best Practices',
      recommended: false,
      uri: docsUrl('images-no-direct-imports'),
    },
    fixable: null,
  },
  create(context) {
    function checkNode(node) {
      if (!node.source || !node.source.value) {
        return;
      }

      const resolvedSource = resolve(node.source.value, context);

      if (
        resolvedSource &&
        isImageImport(resolvedSource) &&
        !isImportFromCurrentFolderIndex(context.getFilename(), resolvedSource)
      ) {
        context.report({
          node,
          message: `Prefer importing image files from the index file of the directory ("{{folderPath}}") instead of the direct path to the image file ("{{filePath}}").`,
          data: {
            folderPath: dirname(node.source.value),
            filePath: node.source.value,
          },
        });
      }
    }
    return {
      ImportDeclaration: checkNode,
      ExportNamedDeclaration: checkNode,
      ExportAllDeclaration: checkNode,
    };
  },
};
