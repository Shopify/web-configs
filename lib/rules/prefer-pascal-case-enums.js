const pascalCase = require('pascal-case');

module.exports = {
  meta: {
    docs: {
      description: 'Enforce pascal case when naming enums.',
      category: 'Stylistic Issues',
      recommended: false,
      uri:
        'https://github.com/Shopify/eslint-plugin-shopify/blob/master/docs/rules/prefer-pascal-case-enums.md',
    },
    fixable: null,
  },
  create(context) {
    function report(node) {
      const {name} = node;

      context.report({
        node,
        message: `Enum '{{name}}' should use pascal case.`,
        data: {name},
      });
    }

    return {
      Identifier(node) {
        if (
          node.parent.type !== 'TSEnumMember' &&
          node.parent.type !== 'TSEnumDeclaration'
        ) {
          return;
        }

        if (isPascalCase(node)) {
          return;
        }

        report(node);
      },
    };
  },
};

function isPascalCase({name}) {
  return name === pascalCase(name);
}
