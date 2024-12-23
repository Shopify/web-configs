const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../../lib/rules/jest/no-snapshots');

const ruleTester = new RuleTester();
function errorWithMethodName(name) {
  return [
    {
      type: 'Identifier',
      message: `Do not use ${name} or related methods that generate jest snapshots.`,
    },
  ];
}

ruleTester.run('no-snapshots', rule, {
  valid: [
    {
      code: `expect(something).toHaveProperty('something');`,
    },
  ],
  invalid: [
    {
      code: 'expect(something).toMatchSnapshot();',
      errors: errorWithMethodName('toMatchSnapshot'),
    },
    {
      code: 'expect(something).toMatchInlineSnapshot();',
      errors: errorWithMethodName('toMatchInlineSnapshot'),
    },
    {
      code: 'expect(something).toThrowErrorMatchingSnapshot();',
      errors: errorWithMethodName('toThrowErrorMatchingSnapshot'),
    },
    {
      code: 'expect(something).toThrowErrorMatchingInlineSnapshot();',
      errors: errorWithMethodName('toThrowErrorMatchingInlineSnapshot'),
    },
  ],
});
