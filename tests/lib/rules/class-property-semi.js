const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/class-property-semi');

const ruleTester = new RuleTester();

require('babel-eslint');

const classPropNoSemi = 'class Foo { bar = 1 }';
const classPropWithSemi = 'class Foo { bar = 1; }';
const classStaticPropNoSemi = 'class Foo { static bar = 1 }';
const classStaticPropWithSemi = 'class Foo { static bar = 1; }';
const classMethod = 'class Foo { bar() {} }';

ruleTester.run('class-property-semi', rule, {
  valid: [
    {code: classPropWithSemi, parser: 'babel-eslint'},
    {code: classPropWithSemi, parser: 'babel-eslint', options: ['always']},
    {code: classPropNoSemi, parser: 'babel-eslint', options: ['never']},
    {code: classStaticPropWithSemi, parser: 'babel-eslint'},
    {code: classStaticPropWithSemi, parser: 'babel-eslint', options: ['always']},
    {code: classStaticPropNoSemi, parser: 'babel-eslint', options: ['never']},
    {code: classMethod, parserOptions: {ecmaVersion: 6}},
  ],
  invalid: [
    {
      code: classPropNoSemi,
      parser: 'babel-eslint',
      errors: [{
        message: 'Missing semicolon.',
        type: 'ClassProperty',
      }],
    },
    {
      code: classPropNoSemi,
      parser: 'babel-eslint',
      options: ['always'],
      errors: [{
        message: 'Missing semicolon.',
        type: 'ClassProperty',
      }],
    },
    {
      code: classPropWithSemi,
      parser: 'babel-eslint',
      options: ['never'],
      errors: [{
        message: 'Extra semicolon.',
        type: 'ClassProperty',
      }],
    },
    {
      code: classStaticPropNoSemi,
      parser: 'babel-eslint',
      errors: [{
        message: 'Missing semicolon.',
        type: 'ClassProperty',
      }],
    },
    {
      code: classStaticPropNoSemi,
      parser: 'babel-eslint',
      options: ['always'],
      errors: [{
        message: 'Missing semicolon.',
        type: 'ClassProperty',
      }],
    },
    {
      code: classStaticPropWithSemi,
      parser: 'babel-eslint',
      options: ['never'],
      errors: [{
        message: 'Extra semicolon.',
        type: 'ClassProperty',
      }],
    },
  ],
});
