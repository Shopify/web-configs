const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/jest/no-vague-titles');

const ruleTester = new RuleTester();

require('babel-eslint');
require('typescript-eslint-parser');

const typeScriptParser = 'typescript-eslint-parser';
const parser = 'babel-eslint';

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
      code: `describe('closing foo does not call bar')`,
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
    {
      code: `someFunction('Includes all the expected things')`,
      parser,
    },
    {
      code: `someFunction('All the expected things are included')`,
      parser,
    },
    {
      code: `someFunction.only('Includes all the expected things')`,
      parser,
    },
    {
      code: `(() => {})()`,
      parser,
    },
    {
      code: "it('onAllImagesUploaded')",
      parser,
    },
    {
      code: `test.each([['production'], ['staging']])('Includes things for %s clients')`,
      parser,
    },
    {
      code: `import('./foo')`,
      parser,
    },
    {
      code: 'foo(bar)()',
      parser,
    },
    {
      code: 'class Foo { constructor() { super(); } }',
      parser,
    },
    {
      code: '(Foo as Function)();',
      parser: typeScriptParser,
    },
  ],
  invalid: [
    {
      code: "it('properly should correcly appropriate all')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('properly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('properly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('properly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('properly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('properly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('should')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('should')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('should')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('should')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('should')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "describe.only('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "describe.only('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "xtest('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `test.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriately')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('inappropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Appropriate')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xtest.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('correctly')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('incorrect')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('Correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `it.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('correct')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xit.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xdescribe.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `describe.each([['production'], ['staging']])('all correct for %s')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('All the expected things are included')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('Includes all the expected things')",
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `test.each([['production'], ['staging']])('Includes all things for %s clients')`,
      parser,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with ignore=describe', rule, {
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
    {
      code: `describe.each([['production'], ['staging']])('all correct for %s')`,
      options: [{ignore: ['describe']}],
    },
  ],
  invalid: [],
});

ruleTester.run('no-vague-titles with ignore=test', rule, {
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
    {
      code: `test.each([['production'], ['staging']])('all correct for %s')`,
      options: [{ignore: ['test']}],
    },
  ],
  invalid: [],
});

ruleTester.run('no-vague-titles with ignore=it', rule, {
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
    {
      code: `it.each([['production'], ['staging']])('all correct for %s')`,
      options: [{ignore: ['it']}],
    },
  ],
  invalid: [],
});

ruleTester.run('no-vague-titles with allow=correct', rule, {
  valid: [
    {
      code: "it('correct')",
      options: [{allow: ['correct']}],
    },
    {
      code: "it('appropriate all should correct properly')",
      options: [
        {allow: ['appropriate', 'should', 'all', 'correct', 'properly']},
      ],
    },
  ],
  invalid: [
    {
      code: "it('properly all correct')",
      options: [{allow: ['correct']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=should', rule, {
  valid: [
    {
      code: "it('should')",
      options: [{allow: ['should']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=all', rule, {
  valid: [
    {
      code: "it('all')",
      options: [{allow: ['all']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['all']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=should', rule, {
  valid: [
    {
      code: "it('should')",
      options: [{allow: ['should']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=appropriate', rule, {
  valid: [
    {
      code: "it('appropriate')",
      options: [{allow: ['appropriate']}],
    },
    {
      code: "it('appropriate all should')",
      options: [{allow: ['appropriate', 'should', 'all']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['appropriate', 'should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});
