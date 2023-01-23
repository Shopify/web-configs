const stylelint = require('stylelint');
const selectorParser = require('postcss-selector-parser');

const ruleName = '@shopify/prefer-focus-visible';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected:
    'Use `:focus-visible` over `:focus` for cleaner focus states for users navigating via traditional pointer devices.',
});

function parseSelector(selector, result, node, callback) {
  try {
    return selectorParser(callback).processSync(selector);
  } catch (err) {
    result.warn(`Cannot parse selector (${err})`, {
      node,
      stylelintType: 'parseError',
    });

    return undefined;
  }
}

module.exports = stylelint.createPlugin(ruleName, (primaryOption) => {
  return function (root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption,
    });

    if (!validOptions) {
      return;
    }

    const focusPseudo = 'focus';

    root.walkRules((ruleNode) => {
      const selector = ruleNode.selector;

      if (!selector.includes(':')) {
        return;
      }

      parseSelector(selector, result, ruleNode, (selectorTree) => {
        selectorTree.walkPseudos((pseudoNode) => {
          const value = pseudoNode.value;

          const sliceNumber = value.startsWith('::') ? 2 : 1;

          const name = value.slice(sliceNumber);

          if (name !== focusPseudo) {
            return;
          }

          stylelint.utils.report({
            word: value,
            message: messages.rejected,
            node: ruleNode,
            result,
            ruleName,
          });
        });
      });
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
