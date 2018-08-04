const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/prefer-singular-enums');

const ruleTester = new RuleTester();

require('typescript-eslint-parser');

const typeScriptParser = 'typescript-eslint-parser';

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
      parser: typeScriptParser,
    },
    {
      code: `enum Command {Up, Down}`,
      parser: typeScriptParser,
    },
    {
      code: `enum Page {Products, Orders}`,
      parser: typeScriptParser,
    },
  ],
  invalid: [
    {
      code: `enum SortOrders {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('SortOrders')],
    },
    {
      code: `enum Commands {Up, Down}`,
      parser: typeScriptParser,
      errors: [errorWithName('Commands')],
    },
    {
      code: `enum Pages {Products, Orders}`,
      parser: typeScriptParser,
      errors: [errorWithName('Pages')],
    },
    {
      code: `enum Feet {Left, Right}`,
      parser: typeScriptParser,
      errors: [errorWithName('Feet')],
    },

    {
      code: `enum People {}`,
      parser: typeScriptParser,
      errors: [errorWithName('People')],
    },
    {
      code: `enum Children {}`,
      parser: typeScriptParser,
      errors: [errorWithName('Children')],
    },
  ],
});
