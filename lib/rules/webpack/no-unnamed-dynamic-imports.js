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

module.exports = {
  meta: {
    docs: {
      description:
        'Requires that all dynamic imports contain a `webpackChunkName` comment.',
      category: 'Best Practices',
      recommended: true,
    },
  },

  create(context) {
    const source = context.getSourceCode();
    return {
      CallExpression(node) {
        if (!isDynamicImport(node)) {
          return;
        }

        const comments = source.getComments(node.arguments[0]).leading;
        const chunkNameBlockComment = comments
          .filter((comment) => comment.type === 'Block')
          .find(isChunkNameComment);

        if (!chunkNameBlockComment) {
          context.report({
            node,
            message: hasLineChunkNameComment(comments)
              ? 'webpackChunkName must be in a /* */ block comment'
              : 'imports should have a webpackChunkName (https://webpack.js.org/api/module-methods/#import-)',
          });
        }
      },
    };
  },
};
