const {RuleTester} = require('eslint');

const rule = require('../../../../lib/rules/typescript/prefer-pascal-case-enums');

const ruleTester = new RuleTester();

require('typescript-eslint-parser');

const typeScriptParser = 'typescript-eslint-parser';

function errorWithName(name) {
  return {
    type: 'Identifier',
    message: `Enum '${name}' should use Pascal case.`,
  };
}

ruleTester.run('prefer-pascal-case-enums', rule, {
  valid: [
    {
      code: `enum SortOrder {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
    },
  ],
  invalid: [
    {
      code: `enum SORTORDER {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('SORTORDER')],
    },
    {
      code: `enum sortorder {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('sortorder')],
    },
    {
      code: `enum sort_order {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('sort_order')],
    },
    {
      code: `enum sortOrder {MostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('sortOrder')],
    },
    {
      code: `enum sortOrder {mostRecent, LeastRecent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('sortOrder'), errorWithName('mostRecent')],
    },
    {
      code: `enum SortOrder {MOSTRECENT, least_recent, Newest, Oldest}`,
      parser: typeScriptParser,
      errors: [errorWithName('MOSTRECENT'), errorWithName('least_recent')],
    },
  ],
});
