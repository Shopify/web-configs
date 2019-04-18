const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/react-hooks-strict-return');

const ruleTester = new RuleTester();

require('babel-eslint');

const parser = 'babel-eslint';
const errors = [
  {
    messageId: 'hooksStrictReturn',
  },
];

ruleTester.run('react-hooks-strict-return', rule, {
  valid: [
    {
      code: `function useFoo() {
        return [1]
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        return [1, 2]
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        return bar;
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        return [...bar];
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
          return ['bar', () => {}]
        }
        `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = [1]
        const baz = [2]
        return [...bar, ...baz];
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        return {one: 1, two: 2, three: 3}
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return bar
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return {...bar}
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return {...bar, four: 4}
      }
      `,
      parser,
    },
    {
      code: `function foo() {
        return [1, 2, 3]
      }
      `,
      parser,
    },
    {
      code: `function foo() {
        return [0, {one: 1, two: 2, three: 3}, 4, 5,]
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        return null
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {
        return 1
      }
      `,
      parser,
    },
    {
      code: `function useFoo() {}`,
      parser,
    },
    {
      code: `function useFoo() {
        return 'bar';
      }`,
      parser,
    },
    {
      code: `function useFoo() {
        return 'bar';
      }
      function baz() {
        return [1, 2, 3, 4]
      }`,
      parser,
    },
    {
      code: `function useFoo() {
        const bar = 1;
        return [bar, () => {}];
      }`,
      parser,
    },
  ],
  invalid: [
    {
      code: `function useFoo() {
        return [1, 2, 3]
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2, 3]
        return bar;
      }`,
      parser,
      errors,
    },
    {
      code: `const useFoo = () => {
        const bar = [1, 2, 3]
        return bar;
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        return [,,,]
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2, 3]
        return [...bar]
      }`,
      parser,
      errors,
    },
    {
      code: `const useFoo = () => {
        const bar = [1, 2, 3]
        return [...bar]
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        const baz = [3]
        return [...bar, ...baz];
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        useEffect(() => {});
      
        return [1, 2, 3, 4];
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        useSomeOtherHook();
      
        return [1, 2, 3, 4];
      }`,
      parser,
      errors,
    },
    {
      code: `function useFoo() {
        useSomeOtherHook();
        useEffect(() => {});
      
        return [1, 2, 3, 4];
      }`,
      parser,
      errors,
    },
  ],
});
