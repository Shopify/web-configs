const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const rule = require('../../../lib/rules/prefer-early-return');

const ruleTester = new RuleTester();

const error = {
  message: 'Prefer an early return to a conditionally-wrapped function body',
  type: 'BlockStatement',
};

ruleTester.run('prefer-early-return', rule, {
  valid: [
    {
      code: `function foo() {
        if (!something) { return; }

        doSomething();
        doSomethingElse();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: `function foo() {
        if (something)
          doSomething();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      options: [{maximumStatements: 2}],
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }

        someOtherThing();
      }`,
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        } else {
          doAnotherThing();
        }
      }`,
    },
    {
      code: `var foo = function() {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: `var foo = () => {
        if (something) {
          doSomething();
        }
      }`,
    },
    {
      code: "var foo = () => 'bar'",
    },
  ],

  invalid: [
    {
      code: `function foo() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      errors: [error],
    },
    {
      code: `function foo() {
        if (something)
          doSomething();
      }`,
      options: [{maximumStatements: 0}],
      errors: [error],
    },
    {
      code: `function foo() {
        if (something) {
          doSomething();
        }
      }`,
      options: [{maximumStatements: 0}],
      errors: [error],
    },
    {
      code: `var foo = function() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      errors: [error],
    },
    {
      code: `var foo = () => {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      }`,
      errors: [error],
    },
    {
      code: `callback(function() {
        if (something) {
          doSomething();
          doSomethingElse();
        }
      })`,
      errors: [error],
    },
  ],
});
