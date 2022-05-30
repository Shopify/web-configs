// Copied from eslint-plugin-react's lib/util/componentUtil.js
// Because we don't want to reach deep into that packages's internals
// https://github.com/jsx-eslint/eslint-plugin-react/blob/18de0a653122c4ffd586a0269a7355c15ef05e23/lib/util/componentUtil.js

const doctrine = require('doctrine');

const pragmaUtil = require('./pragma');

/**
 * @template {(_: object) => any} T
 * @param {T} fn
 * @returns {T}
 */
function memoize(fn) {
  const cache = new WeakMap();
  // @ts-ignore
  return function memoizedFn(arg) {
    const cachedValue = cache.get(arg);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    const val = fn(arg);
    cache.set(arg, val);
    return val;
  };
}

const getPragma = memoize(pragmaUtil.getFromContext);

/**
 * Check if the node is explicitly declared as a descendant of a React Component
 * @param {any} node
 * @param {Context} context
 * @returns {boolean}
 */
function isExplicitComponent(node, context) {
  const sourceCode = context.getSourceCode();
  let comment;
  // Sometimes the passed node may not have been parsed yet by eslint, and this function call crashes.
  // Can be removed when eslint sets "parent" property for all nodes on initial AST traversal: https://github.com/eslint/eslint-scope/issues/27
  // eslint-disable-next-line no-warning-comments
  // FIXME: Remove try/catch when https://github.com/eslint/eslint-scope/issues/27 is implemented.
  try {
    comment = sourceCode.getJSDocComment(node);
  } catch (err) {
    comment = null;
  }

  if (comment === null) {
    return false;
  }

  let commentAst;
  try {
    commentAst = doctrine.parse(comment.value, {
      unwrap: true,
      tags: ['extends', 'augments'],
    });
  } catch (err) {
    // handle a bug in the archived `doctrine`, see #2596
    return false;
  }

  const relevantTags = commentAst.tags.filter(
    (tag) =>
      tag.name === 'React.Component' || tag.name === 'React.PureComponent',
  );

  return relevantTags.length > 0;
}

/**
 * @param {ASTNode} node
 * @param {Context} context
 * @returns {boolean}
 */
function isES6Component(node, context) {
  const pragma = getPragma(context);
  if (isExplicitComponent(node, context)) {
    return true;
  }

  if (!node.superClass) {
    return false;
  }
  if (node.superClass.type === 'MemberExpression') {
    return (
      node.superClass.object.name === pragma &&
      /^(Pure)?Component$/.test(node.superClass.property.name)
    );
  }
  if (node.superClass.type === 'Identifier') {
    return /^(Pure)?Component$/.test(node.superClass.name);
  }
  return false;
}

module.exports = {
  isES6Component,
  isExplicitComponent,
};
