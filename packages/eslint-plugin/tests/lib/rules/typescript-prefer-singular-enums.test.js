const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');
const typescriptParser = require('@typescript-eslint/parser');

const rule = require('../../../lib/rules/typescript-prefer-singular-enums');

const ruleTester = new RuleTester({
  languageOptions: {parser: typescriptParser},
});

function errorWithName(name) {
  return {
    type: 'TSEnumDeclaration',
    message: `Enum '${name}' should be singular.`,
  };
}

ruleTester.run('typescript-prefer-singular-enums', rule, {
  valid: [
    {
      code: `enum SortOrder {MostRecent, LeastRecent, Newest, Oldest}`,
    },
    {
      code: `enum Command {Up, Down}`,
    },
    {
      code: `enum Page {Products, Orders}`,
    },
  ],
  invalid: [
    {
      code: `enum SortOrders {MostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('SortOrders')],
    },
    {
      code: `enum Commands {Up, Down}`,
      errors: [errorWithName('Commands')],
    },
    {
      code: `enum Pages {Products, Orders}`,
      errors: [errorWithName('Pages')],
    },
    {
      code: `enum Feet {Left, Right}`,
      errors: [errorWithName('Feet')],
    },

    {
      code: `enum People {}`,
      errors: [errorWithName('People')],
    },
    {
      code: `enum Children {}`,
      errors: [errorWithName('Children')],
    },
  ],
});
