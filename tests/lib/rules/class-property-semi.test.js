const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/class-property-semi');

const ruleTester = new RuleTester({
  parser: require.resolve('babel-eslint'),
});

const classPropNoSemi = 'class Foo { bar = 1 }';
const classPropWithSemi = 'class Foo { bar = 1; }';
const classStaticPropNoSemi = 'class Foo { static bar = 1 }';
const classStaticPropWithSemi = 'class Foo { static bar = 1; }';
const classMethod = 'class Foo { bar() {} }';

ruleTester.run('class-property-semi', rule, {
  valid: [
    {code: classPropWithSemi},
    {code: classPropWithSemi, options: ['always']},
    {code: classPropNoSemi, options: ['never']},
    {code: classStaticPropWithSemi},
    {
      code: classStaticPropWithSemi,
      options: ['always'],
    },
    {code: classStaticPropNoSemi, options: ['never']},
    {code: classMethod, parserOptions: {ecmaVersion: 6}},
  ],
  invalid: [
    {
      code: classPropNoSemi,
      errors: [
        {
          message: 'Missing semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
    {
      code: classPropNoSemi,
      options: ['always'],
      errors: [
        {
          message: 'Missing semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
    {
      code: classPropWithSemi,
      options: ['never'],
      errors: [
        {
          message: 'Extra semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
    {
      code: classStaticPropNoSemi,
      errors: [
        {
          message: 'Missing semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
    {
      code: classStaticPropNoSemi,
      options: ['always'],
      errors: [
        {
          message: 'Missing semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
    {
      code: classStaticPropWithSemi,
      options: ['never'],
      errors: [
        {
          message: 'Extra semicolon.',
          type: 'ClassProperty',
        },
      ],
    },
  ],
});
