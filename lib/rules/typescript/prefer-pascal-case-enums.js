const pascalCase = require('pascal-case');
const {docsUrl} = require('../../utilities');

module.exports = {
  meta: {
    docs: {
      description: 'Enforce Pascal case when naming enums.',
      category: 'Stylistic Issues',
      recommended: false,
      uri: docsUrl('typescript/prefer-pascal-case-enum'),
    },
    fixable: null,
  },
  create(context) {
    function report(node) {
      const {name} = node;

      context.report({
        node,
        message: `Enum '{{name}}' should use Pascal case.`,
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
