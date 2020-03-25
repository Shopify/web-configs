const {pascalCase} = require('change-case');

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
      const {name, value} = node;
      const identifier = name || value;
      context.report({
        node,
        message: `Enum '{{identifier}}' should use Pascal case.`,
        data: {identifier},
      });
    }

    return {
      TSEnumMember({id}) {
        if (!isPascalCase(id)) {
          report(id);
        }
      },
      TSEnumDeclaration({id}) {
        if (!isPascalCase(id)) {
          report(id);
        }
      },
    };
  },
};

function isPascalCase({name, value}) {
  const identifier = name || value;
  return identifier != null && identifier === pascalCase(identifier);
}
