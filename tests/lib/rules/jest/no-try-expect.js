const {RuleTester} = require('eslint');
const rule = require('../../../../lib/rules/jest/no-try-expect');

const ruleTester = new RuleTester({
  parser: require.resolve('babel-eslint'),
});

ruleTester.run('no-try-expect', rule, {
  valid: [
    {
      code: `it('foo', () => {
        expect('foo').toEqual('foo');
      })`,
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
    },
    {
      code: `
        it.skip('foo');
        try {

        } catch {
          expect('foo').toEqual('foo');
        }`,
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
      errors: [
        {
          messageId: 'noTryExpect',
        },
      ],
    },
  ],
});
