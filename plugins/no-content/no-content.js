const stylelint = require('stylelint');

const ruleName = 'plugin/no-content';

const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'You must not use the `content` property to hard-code unlocalized text',
});

module.exports = stylelint.createPlugin(ruleName, (primaryOption) => {
  return function(root, result) {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption,
    });

    if (!validOptions) {
      return;
    }

    const allowedContentValues = [
      "''",
      '""',
      'none',
    ];

    root.walkDecls('content', (decl) => {
      if (!allowedContentValues.includes(decl.value)) {
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
