const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/prefer-class-properties');

const ruleTester = new RuleTester();

require('babel-eslint');

const parserOptions = {
  ecmaVersion: 6,
};

const classPropErrors = [
  {
    type: 'ClassProperty',
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
      parser: 'babel-eslint',
      options: ['always'],
    },
    {
      code: 'class Foo { foo = bar(); }',
      parser: 'babel-eslint',
      options: ['always'],
    },
    {
      code: 'class Foo { foo = 123; }',
      parser: 'babel-eslint',
      options: ['always'],
    },
    {
      code: 'class Foo { static foo = "bar"; }',
      parser: 'babel-eslint',
      options: ['never'],
    },
    {
      code: 'class Foo { static foo = "bar"; }',
      parser: 'babel-eslint',
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = 123;
        }
      }`,
      parserOptions,
      options: ['never'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123';
        }
      }`,
      parserOptions,
      options: ['never'],
    },
    {
      code: `class Foo {
        constructor() {
          this[foo] = 123;
        }
      }`,
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo[bar].baz = 123;
        }
      }`,
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = foo();
        }
      }`,
      parserOptions,
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
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        somethingElse() {
          this.foo = 123;
        }
      }`,
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, bar, 456];
        }
      }`,
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {foo: 123, bar: baz};
        }
      }`,
      parserOptions,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {[foo]: 123};
        }
      }`,
      parserOptions,
      options: ['always'],
    },
  ],
  invalid: [
    {
      code: 'class Foo { foo = "bar"; }',
      parser: 'babel-eslint',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: 'class Foo { foo = bar(); }',
      parser: 'babel-eslint',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: 'class Foo { foo = 123; }',
      parser: 'babel-eslint',
      options: ['never'],
      errors: classPropErrors,
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = 123;
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = false;
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = /something/;
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123';
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = '123'.toUpperCase();
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [];
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {};
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, 456, 789];
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = [123, [456, 789]];
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this.foo = {foo: 123, bar: {baz: '456'}};
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
    {
      code: `class Foo {
        constructor() {
          this['foo'] = 123;
        }
      }`,
      parserOptions,
      errors: assignErrors,
      options: ['always'],
    },
  ],
});
