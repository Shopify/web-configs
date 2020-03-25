const {RuleTester} = require('eslint');

const rule = require('../../../../lib/rules/typescript/prefer-pascal-case-enums');

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

function errorWithName(name) {
  return {
    message: `Enum '${name}' should use Pascal case.`,
  };
}

ruleTester.run('prefer-pascal-case-enums', rule, {
  valid: [
    {
      code: `enum SortOrder {MostRecent, LeastRecent, Newest, Oldest}`,
    },
  ],
  invalid: [
    {
      code: `enum SORTORDER {MostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('SORTORDER')],
    },
    {
      code: `enum sortorder {MostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('sortorder')],
    },
    {
      code: `enum sort_order {MostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('sort_order')],
    },
    {
      code: `enum sortOrder {MostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('sortOrder')],
    },
    {
      code: `enum sortOrder {mostRecent, LeastRecent, Newest, Oldest}`,
      errors: [errorWithName('sortOrder'), errorWithName('mostRecent')],
    },
    {
      code: `enum SortOrder {MOSTRECENT, least_recent, Newest, Oldest}`,
      errors: [errorWithName('MOSTRECENT'), errorWithName('least_recent')],
    },
    {
      code: `enum Example {'foo' = 'bar', '1024x1024' = '1024x1024', Oldest}`,
      errors: [errorWithName('foo')],
    },
  ],
});
