const {RuleTester} = require('eslint');

const rule = require('../../../../lib/rules/jest/no-vague-titles');

const ruleTester = new RuleTester({parser: require.resolve('babel-eslint')});

ruleTester.run('no-vague-titles', rule, {
  valid: [
    {
      code: `it()`,
    },
    {
      code: `it('')`,
    },
    {
      code: `it('foo bar baz')`,
    },
    {
      code: `xit('foo bar baz')`,
    },
    {
      code: `it.only('foo bar baz')`,
    },
    {
      code: `describe('foo bar baz')`,
    },
    {
      code: `describe('closing foo does not call bar')`,
    },
    {
      code: `xdescribe('foo bar baz')`,
    },
    {
      code: `describe.only('foo bar baz')`,
    },
    {
      code: `test('foo bar baz')`,
    },
    {
      code: `xtest('foo bar baz')`,
    },
    {
      code: `test.only('foo bar baz')`,
    },
    {
      code: `someFunction('correct')`,
    },
    {
      code: `someFunction('incorrect')`,
    },
    {
      code: `someFunction('correctly')`,
    },
    {
      code: `someFunction('incorrectly')`,
    },
    {
      code: `someFunction('Correct')`,
    },
    {
      code: `someFunction('appropriate')`,
    },
    {
      code: `someFunction('inappropriate')`,
    },
    {
      code: `someFunction('Appropriate')`,
    },
    {
      code: `someFunction('appropriately')`,
    },
    {
      code: `someFunction('proper')`,
    },
    {
      code: `someFunction('inproper')`,
    },
    {
      code: `someFunction('Proper')`,
    },
    {
      code: `someFunction('properly')`,
    },
    {
      code: `someFunction('necessary')`,
    },
    {
      code: `someFunction('unnecessary')`,
    },
    {
      code: `someFunction('Necessary')`,
    },
    {
      code: `someFunction('necessaryly')`,
    },
    {
      code: `someFunction.only('correct')`,
    },
    {
      code: `someFunction('Includes all the expected things')`,
    },
    {
      code: `someFunction('All the expected things are included')`,
    },
    {
      code: `someFunction.only('Includes all the expected things')`,
    },
    {
      code: `(() => {})()`,
    },
    {
      code: "it('onAllImagesUploaded')",
    },
    {
      code: `test.each([['production'], ['staging']])('Includes things for %s clients')`,
    },
    {
      code: `import('./foo')`,
    },
    {
      code: 'foo(bar)()',
    },
    {
      code: 'class Foo { constructor() { super(); } }',
    },
    {
      code: '(Foo as Function)();',
      parser: require.resolve('@typescript-eslint/parser'),
    },
  ],
  invalid: [
    {
      code:
        "it('properly should correcly appropriate all descriptive necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('necessary')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('properly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('properly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('properly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('properly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('properly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('should')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('should')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('should')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('should')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('should')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('descriptive')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('descriptive')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('descriptive')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('descriptive')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('descriptive')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('every')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('every')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('every')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('every')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('every')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "describe.only('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "describe.only('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },

    {
      code: "xtest('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "fit('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `test.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('appropriately')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('inappropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xtest('Appropriate')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xtest.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('correctly')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('incorrect')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('Correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "it.only('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `it.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('correct')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xit('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xit.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "xdescribe('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `xdescribe.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "describe.only('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `describe.each([['production'], ['staging']])('all correct for %s')`,
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test('All the expected things are included')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: "test.only('Includes all the expected things')",
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
    {
      code: `test.each([['production'], ['staging']])('Includes all things for %s clients')`,
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

ruleTester.run('no-vague-titles with allow=every', rule, {
  valid: [
    {
      code: "it('every')",
      options: [{allow: ['every']}],
    },
    {
      code: "it('every all should')",
      options: [{allow: ['every', 'should', 'all']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['every', 'should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=descriptive', rule, {
  valid: [
    {
      code: "it('descriptive')",
      options: [{allow: ['descriptive']}],
    },
    {
      code: "it('descriptive all should')",
      options: [{allow: ['descriptive', 'should', 'all']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['descriptive', 'should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});

ruleTester.run('no-vague-titles with allow=necessary', rule, {
  valid: [
    {
      code: "it('necessary')",
      options: [{allow: ['necessary']}],
    },
    {
      code: "it('necessary all should')",
      options: [{allow: ['necessary', 'should', 'all']}],
    },
  ],
  invalid: [
    {
      code: "it('properly all should')",
      options: [{allow: ['necessary', 'should']}],
      errors: [
        {
          messageId: 'containsVagueWord',
        },
      ],
    },
  ],
});
