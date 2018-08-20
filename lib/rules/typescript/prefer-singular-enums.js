const pluralize = require('pluralize');

module.exports = {
  meta: {
    docs: {
      description: 'Prefer singular TypeScript enums.',
      category: 'Stylistic Issues',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/typescript/prefer-singular-enums.md',
    },
    fixable: null,
  },
  create(context) {
    return {
      TSEnumDeclaration(node) {
        const {
          id: {name},
        } = node;

        if (pluralize.isSingular(name)) {
          return;
        }

        context.report({
          node,
          message: `Enum '{{name}}' should be singular.`,
          data: {name},
        });
      },
    };
  },
};
