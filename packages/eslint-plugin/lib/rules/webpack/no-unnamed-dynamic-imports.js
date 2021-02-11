const {docsUrl} = require('../../utilities');

function isDynamicImport(node) {
  if (node.type !== 'CallExpression') {
    return false;
  }

  const {callee} = node;
  if (callee.type === 'Import') {
    return true;
  }

  return (
    callee.type === 'MemberExpression' &&
    callee.object.name === 'System' &&
    callee.property.name === 'import' &&
    node.arguments.length === 1
  );
}

function isChunkNameComment(comment) {
  return comment.value.match(/\bwebpackChunkName: ["'].+["']/);
}

function hasLineChunkNameComment(comments) {
  return comments
    .filter((comment) => comment.type === 'Line')
    .find(isChunkNameComment);
}

function generateReport(node, comments) {
  const chunkNameBlockComment = comments
    .filter((comment) => comment.type === 'Block')
    .find(isChunkNameComment);

  if (!chunkNameBlockComment) {
    return {
      node,
      message: hasLineChunkNameComment(comments)
        ? 'webpackChunkName must be in a /* */ block comment'
        : 'imports should have a webpackChunkName (https://webpack.js.org/api/module-methods/#import-)',
    };
  }

  return null;
}

module.exports = {
  meta: {
    docs: {
      description:
        'Require that all dynamic imports contain a `webpackChunkName` comment.',
      category: 'Best Practices',
      recommended: true,
      uri: docsUrl('webpack/no-unnamed-dynamic-imports'),
    },
  },

  create(context) {
    const source = context.getSourceCode();

    return {
      'FunctionDeclaration ImportExpression': function (node) {
        const comments = source.getCommentsBefore(node.source);
        const report = generateReport(node, comments);

        if (report != null) {
          context.report(report);
        }
      },
      CallExpression(node) {
        if (!isDynamicImport(node)) {
          return;
        }

        const comments = source.getCommentsBefore(node.arguments[0]);
        const report = generateReport(node, comments);

        if (report != null) {
          context.report(report);
        }
      },
    };
  },
};
