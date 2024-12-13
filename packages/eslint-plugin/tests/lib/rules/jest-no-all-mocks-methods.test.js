const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/jest-no-all-mocks-methods');

const ruleTester = new RuleTester();

ruleTester.run('jest-no-all-mocks-methods', rule, {
  valid: [
    {
      code: `jest.mock()`,
    },
    {
      code: `jest.fn()`,
    },
  ],
  invalid: [
    {
      code: 'jest.resetAllMocks()',
      errors: [
        {
          messageId: 'allMocksMethod',
        },
      ],
    },
    {
      code: 'jest.clearAllMocks()',
      errors: [
        {
          messageId: 'allMocksMethod',
        },
      ],
    },
    {
      code: 'jest.restoreAllMocks()',
      errors: [
        {
          messageId: 'allMocksMethod',
        },
      ],
    },
    {
      code: 'jest.resetModules()',
      errors: [
        {
          messageId: 'allMocksMethod',
        },
      ],
    },
  ],
});
