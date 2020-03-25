const {RuleTester} = require('eslint');

const rule = require('../../../../lib/rules/typescript/prefer-singular-enums');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

function errorWithName(name) {
  return {
    type: 'TSEnumDeclaration',
    message: `Enum '${name}' should be singular.`,
  };
}

ruleTester.run('prefer-singular-enums', rule, {
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
