const pluralize = require('pluralize');

const {docsUrl} = require('../../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Prefer singular TypeScript enums.',
      category: 'Stylistic Issues',
      recommended: false,
      uri: docsUrl('typescript/prefer-singular-enums'),
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
