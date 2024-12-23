const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/prefer-class-properties');

const ruleTester = new RuleTester();

const classPropErrors = [
  {
    type: 'PropertyDefinition',
    message: 'Unexpected class property.',
  },
];

const assignErrors = [
  {
    type: 'AssignmentExpression',
    message: 'Unexpected assignment of literal instance member.',
  },
];

ruleTester.run('prefer-class-properties', rule, {
  valid: [
    {
      code: 'class Foo { foo = "bar"; }',
      options: ['always'],
    },
    {
      code: 'class Foo { foo = bar(); }',
      options: ['always'],
    },
    {
      code: 'class Foo { foo = 123; }',
      options: ['always'],
    },
    {
      code: 'class Foo { static foo = "bar"; }',
      options: ['never'],
    },
    {
      code: 'class Foo { static foo = "bar"; }',
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = 123;
        }
      }`,
      options: ['never'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123';
        }
      }`,
      options: ['never'],
    },
    {
      code: `class Foo {
        constructor() {
          this[foo] = 123;
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo[bar].baz = 123;
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = foo();
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          if (something) {
            this.foo = 123;
          }
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        somethingElse() {
          this.foo = 123;
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, bar, 456];
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {foo: 123, bar: baz};
        }
      }`,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {[foo]: 123};
        }
      }`,
      options: ['always'],
    },
  ],
  invalid: [
    {
      code: 'class Foo { foo = "bar"; }',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: 'class Foo { foo = bar(); }',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: 'class Foo { foo = 123; }',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = 123;
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = false;
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = /something/;
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123';
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123'.toUpperCase();
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [];
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {};
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, 456, 789];
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, [456, 789]];
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {foo: 123, bar: {baz: '456'}};
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this['foo'] = 123;
        }
      }`,
      errors: assignErrors,
      options: ['always'],
    },
  ],
});
