const stylelint = require('stylelint');

const ruleName = 'shopify/content-no-strings';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'You must not hard-code unlocalized strings into the `content` property',
});

module.exports = stylelint.createPlugin(ruleName, (primaryOption) => {
  return function(root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption,
    });

    if (!validOptions) {
      return;
    }

    const nonEmptyString = /('.+')|(".+")/;

    root.walkDecls('content', (decl) => {
      if (decl.value.match(nonEmptyString)) {
        stylelint.utils.report({
          node: decl,
          message: messages.rejected,
          result,
          ruleName,
        });
      }
    });
  };
});
