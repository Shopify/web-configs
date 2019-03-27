const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/jest/no-if');
require('babel-eslint');

const parser = 'babel-eslint';
const ruleTester = new RuleTester();

ruleTester.run('no-if', rule, {
  valid: [
    {
      code: `if(foo) {}`,
    },
    {
      code: `it('foo', () => {})`,
      parser,
    },
    {
      code: `foo('bar', () => {
        if(baz) {}
      })`,
      parser,
    },
  ],
  invalid: [
    {
      code: `it('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `it.skip('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `it.only('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `xit('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `fit('foo', () => {
          if('bar') {}
        })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe.skip('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe.only('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `xdescribe.only('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `fdescribe.only('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `test('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `test.skip('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `test.only('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `xtest('foo', () => {
        if('bar') {}
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe('foo', () => {
        it('bar', () => {
          if('bar') {}
        })
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe('foo', () => {
        it('bar', () => {
          if('bar') {}
        })
        it('baz', () => {
          if('qux') {}
          if('quux') {}
        })
      })`,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
        {
          messageId: 'noIf',
        },
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `describe('foo', () => {
          if('bar') {}
      })
      if('baz') {}
      `,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
    {
      code: `it('foo', () => {
        callExpression()
        if ('bar') {}
      })
      `,
      parser,
      errors: [
        {
          messageId: 'noIf',
        },
      ],
    },
  ],
});
