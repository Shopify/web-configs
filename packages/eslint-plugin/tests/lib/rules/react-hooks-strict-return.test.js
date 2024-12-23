const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/react-hooks-strict-return');

const ruleTester = new RuleTester();

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
    },
    {
      code: `function useFoo() {
        return [1, 2]
      }
      `,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        return bar;
      }
      `,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        return [...bar];
      }
      `,
    },
    {
      code: `function useFoo() {
          return ['bar', () => {}]
        }
        `,
    },
    {
      code: `function useFoo() {
        const bar = [1]
        const baz = [2]
        return [...bar, ...baz];
      }
      `,
    },
    {
      code: `function useFoo() {
        return {one: 1, two: 2, three: 3}
      }
      `,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return bar
      }
      `,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return {...bar}
      }
      `,
    },
    {
      code: `function useFoo() {
        const bar = {one: 1, two: 2, three: 3}
        return {...bar, four: 4}
      }
      `,
    },
    {
      code: `function foo() {
        return [1, 2, 3]
      }
      `,
    },
    {
      code: `function foo() {
        return [0, {one: 1, two: 2, three: 3}, 4, 5,]
      }
      `,
    },
    {
      code: `function useFoo() {
        return null
      }
      `,
    },
    {
      code: `function useFoo() {
        return 1
      }
      `,
    },
    {
      code: `function useFoo() {}`,
    },
    {
      code: `function useFoo() {
        return 'bar';
      }`,
    },
    {
      code: `function useFoo() {
        return 'bar';
      }
      function baz() {
        return [1, 2, 3, 4]
      }`,
    },
    {
      code: `function useFoo() {
        const bar = 1;
        return [bar, () => {}];
      }`,
    },
    {
      code: `function useHookWithNoReturn() {}`,
    },
    {
      code: `function useHookUndefinedReturn() {
        return;
      }`,
    },
    {
      code: `export default function() {
        return;
      }`,
    },
  ],
  invalid: [
    {
      code: `function useFoo() {
        return [1, 2, 3]
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2, 3]
        return bar;
      }`,
      errors,
    },
    {
      code: `const useFoo = () => {
        const bar = [1, 2, 3]
        return bar;
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        return [,,,]
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2, 3]
        return [...bar]
      }`,
      errors,
    },
    {
      code: `const useFoo = () => {
        const bar = [1, 2, 3]
        return [...bar]
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        const bar = [1, 2]
        const baz = [3]
        return [...bar, ...baz];
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        useEffect(() => {});

        return [1, 2, 3, 4];
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        useSomeOtherHook();

        return [1, 2, 3, 4];
      }`,
      errors,
    },
    {
      code: `function useFoo() {
        useSomeOtherHook();
        useEffect(() => {});

        return [1, 2, 3, 4];
      }`,
      errors,
    },
  ],
});
