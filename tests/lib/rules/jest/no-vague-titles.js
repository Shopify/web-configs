const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/jest/no-vague-titles');

const ruleTester = new RuleTester();

require('babel-eslint');

const parser = 'babel-eslint';

function errorWithMethod(method) {
  return [
    {
      type: 'CallExpression',
      message: `${method} description should not contain vague words. Be sure the description meaningfully illustrates the purpose of this test.`,
    },
  ];
}
ruleTester.run('no-vague-titles', rule, {
  valid: [
    {
      code: `it()`,
      parser,
    },
    {
      code: `it('')`,
      parser,
    },
    {
      code: `it('foo bar baz')`,
      parser,
    },
    {
      code: `xit('foo bar baz')`,
      parser,
    },
    {
      code: `it.only('foo bar baz')`,
      parser,
    },
    {
      code: `describe('foo bar baz')`,
      parser,
    },
    {
      code: `xdescribe('foo bar baz')`,
      parser,
    },
    {
      code: `describe.only('foo bar baz')`,
      parser,
    },
    {
      code: `test('foo bar baz')`,
      parser,
    },
    {
      code: `xtest('foo bar baz')`,
      parser,
    },
    {
      code: `test.only('foo bar baz')`,
      parser,
    },
    {
      code: `someFunction('correct')`,
      parser,
    },
    {
      code: `someFunction('incorrect')`,
      parser,
    },
    {
      code: `someFunction('correctly')`,
      parser,
    },
    {
      code: `someFunction('incorrectly')`,
      parser,
    },
    {
      code: `someFunction('Correct')`,
      parser,
    },
    {
      code: `someFunction('appropriate')`,
      parser,
    },
    {
      code: `someFunction('inappropriate')`,
      parser,
    },
    {
      code: `someFunction('Appropriate')`,
      parser,
    },
    {
      code: `someFunction('appropriately')`,
      parser,
    },
    {
      code: `someFunction.only('correct')`,
      parser,
    },
  ],
  invalid: [
    {
      code: "it('correct')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('correctly')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('incorrect')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('Correct')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it.only('correct')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it.only('correctly')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it.only('incorrect')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it.only('Correct')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "xit('correct')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('correctly')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('incorrect')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('Correct')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "describe('correct')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('correct')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('correctly')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('incorrect')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('Correct')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "xdescribe('correct')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('correct')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('correctly')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('incorrect')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('Correct')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "describe.only('correct')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe.only('correctly')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe.only('incorrect')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe.only('Correct')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "test('correct')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('correct')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('correctly')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('incorrect')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('Correct')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "xtest('correct')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('correct')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('correctly')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('incorrect')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('Correct')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "test.only('correct')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test.only('correctly')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test.only('incorrect')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test.only('Correct')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "it('appropriate')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('appropriately')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('inappropriate')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "it('Appropriate')",
      parser,
      errors: errorWithMethod('it'),
    },
    {
      code: "xit('appropriate')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('appropriately')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('inappropriate')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "xit('Appropriate')",
      parser,
      errors: errorWithMethod('xit'),
    },
    {
      code: "fit('appropriate')",
      parser,
      errors: errorWithMethod('fit'),
    },
    {
      code: "fit('appropriate')",
      parser,
      errors: errorWithMethod('fit'),
    },
    {
      code: "fit('appropriately')",
      parser,
      errors: errorWithMethod('fit'),
    },
    {
      code: "fit('inappropriate')",
      parser,
      errors: errorWithMethod('fit'),
    },
    {
      code: "fit('Appropriate')",
      parser,
      errors: errorWithMethod('fit'),
    },
    {
      code: "describe('appropriate')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('appropriate')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('appropriately')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('inappropriate')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "describe('Appropriate')",
      parser,
      errors: errorWithMethod('describe'),
    },
    {
      code: "xdescribe('appropriate')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('appropriate')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('appropriately')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('inappropriate')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "xdescribe('Appropriate')",
      parser,
      errors: errorWithMethod('xdescribe'),
    },
    {
      code: "test('appropriate')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('appropriate')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('appropriately')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('inappropriate')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "test('Appropriate')",
      parser,
      errors: errorWithMethod('test'),
    },
    {
      code: "xtest('appropriate')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('appropriate')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('appropriately')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('inappropriate')",
      parser,
      errors: errorWithMethod('xtest'),
    },
    {
      code: "xtest('Appropriate')",
      parser,
      errors: errorWithMethod('xtest'),
    },
  ],
});

ruleTester.run('no-tests-contain-correct with ignore=describe', rule, {
  valid: [
    {
      code: "describe('correct')",
      options: [{ignore: ['describe']}],
    },
    {
      code: "describe('correctly')",
      options: [{ignore: ['describe']}],
    },
    {
      code: 'describe("Correct")',
      options: [{ignore: ['describe']}],
    },
    {
      code: 'describe("incorrect")',
      options: [{ignore: ['describe']}],
    },
    {
      code: "describe('appropriate')",
      options: [{ignore: ['describe']}],
    },
    {
      code: "describe('appropriately')",
      options: [{ignore: ['describe']}],
    },
    {
      code: 'describe("Appropriate")',
      options: [{ignore: ['describe']}],
    },
    {
      code: 'describe("inappropriate")',
      options: [{ignore: ['describe']}],
    },
    {
      code: "describe('appropriate')",
      options: [{ignore: ['describe']}],
    },
    {
      code: "describe.only('appropriate')",
      options: [{ignore: ['describe']}],
    },
  ],
  invalid: [],
});

ruleTester.run('no-tests-contain-correct with ignore=test', rule, {
  valid: [
    {
      code: "test('correct')",
      options: [{ignore: ['test']}],
    },
    {
      code: "test('correctly')",
      options: [{ignore: ['test']}],
    },
    {
      code: 'test("Correct")',
      options: [{ignore: ['test']}],
    },
    {
      code: 'test("incorrect")',
      options: [{ignore: ['test']}],
    },
    {
      code: "test('appropriate')",
      options: [{ignore: ['test']}],
    },
    {
      code: "test('appropriately')",
      options: [{ignore: ['test']}],
    },
    {
      code: 'test("Appropriate")',
      options: [{ignore: ['test']}],
    },
    {
      code: 'test("inappropriate")',
      options: [{ignore: ['test']}],
    },
    {
      code: 'test.only("appropriate")',
      options: [{ignore: ['test']}],
    },
  ],
  invalid: [],
});

ruleTester.run('no-tests-contain-correct with ignore=it', rule, {
  valid: [
    {
      code: "it('correct')",
      options: [{ignore: ['it']}],
    },
    {
      code: "it('correctly')",
      options: [{ignore: ['it']}],
    },
    {
      code: 'it("Correct")',
      options: [{ignore: ['it']}],
    },
    {
      code: 'it("incorrect")',
      options: [{ignore: ['it']}],
    },
    {
      code: "it('appropriate')",
      options: [{ignore: ['it']}],
    },
    {
      code: "it('appropriately')",
      options: [{ignore: ['it']}],
    },
    {
      code: 'it("Appropriate")',
      options: [{ignore: ['it']}],
    },
    {
      code: 'it("inappropriate")',
      options: [{ignore: ['it']}],
    },
    {
      code: 'it.only("appropriate")',
      options: [{ignore: ['it']}],
    },
  ],
  invalid: [],
});
