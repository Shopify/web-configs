const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/jest/no-try-expect');
require('babel-eslint');

const parser = 'babel-eslint';
const ruleTester = new RuleTester();

ruleTester.run('no-try-expect', rule, {
  valid: [
    {
      code: `it('foo', () => {
        expect('foo').toEqual('foo');
      })`,
      parser,
    },
    {
      code: `
        it('foo', () => {
          expect('bar').toEqual('bar');
        });
        try {

        } catch {
          expect('foo').toEqual('foo');
        }`,
      parser,
    },
    {
      code: `
        it.skip('foo');
        try {

        } catch {
          expect('foo').toEqual('foo');
        }`,
      parser,
    },
  ],
  invalid: [
    {
      code: `it('foo', () => {
        try {

        } catch (err) {
          expect(err).toMatch('Error');
        }
      })`,
      parser,
      errors: [
        {
          messageId: 'noTryExpect',
        },
      ],
    },
    {
      code: `it('foo', async () => {
        await wrapper('production', async () => {
          try {

          } catch (err) {
            expect(err).toMatch('Error');
          }
        })
      })`,
      parser,
      errors: [
        {
          messageId: 'noTryExpect',
        },
      ],
    },
  ],
});
