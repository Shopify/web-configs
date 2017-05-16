const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/no-useless-computed-properties');
require('babel-eslint');

const ruleTester = new RuleTester();

const parserOptions = {ecmaVersion: 6};
const message = 'Computed property is using a literal key unnecessarily.';

ruleTester.run('no-useless-computed-properties', rule, {
  valid: [
    {code: 'var foo = {"bar": true}'},
    {code: 'var foo = {bar: true}'},
    {code: 'var foo = {[bar]: true}', parserOptions},
    {code: 'var foo = {[bar()]: true}', parserOptions},
    {code: 'var foo = {123: true}'},

    {code: 'var foo = {"bar"() {}}', parserOptions},
    {code: 'var foo = {bar() {}}', parserOptions},
    {code: 'var foo = {[bar]() {}}', parserOptions},
    {code: 'var foo = {[bar()]() {}}', parserOptions},
    {code: 'var foo = {123() {}}', parserOptions},

    {code: 'class Foo {"bar"() {}}', parserOptions},
    {code: 'class Foo {bar() {}}', parserOptions},
    {code: 'class Foo {[bar]() {}}', parserOptions},
    {code: 'class Foo {[bar()]() {}}', parserOptions},
    {code: 'class Foo {123() {}}', parserOptions},

    {code: 'class Foo {static "bar"() {}}', parser: 'babel-eslint'},
    {code: 'class Foo {static bar() {}}', parser: 'babel-eslint'},
    {code: 'class Foo {static [bar]() {}}', parser: 'babel-eslint'},
    {code: 'class Foo {static [bar()]() {}}', parser: 'babel-eslint'},
    {code: 'class Foo {static 123() {}}', parser: 'babel-eslint'},
  ],
  invalid: [
    {
      code: 'var foo = {["bar"]: true}',
      parserOptions,
      errors: [{message, type: 'Property'}],
    },
    {
      code: 'var foo = {[123]: true}',
      parserOptions,
      errors: [{message, type: 'Property'}],
    },

    {
      code: 'var foo = {["bar"]() {}}',
      parserOptions,
      errors: [{message, type: 'Property'}],
    },
    {
      code: 'var foo = {[123]() {}}',
      parserOptions,
      errors: [{message, type: 'Property'}],
    },

    {
      code: 'class Foo {["bar"]() {}}',
      parserOptions,
      errors: [{message, type: 'MethodDefinition'}],
    },
    {
      code: 'class Foo {[123]() {}}',
      parserOptions,
      errors: [{message, type: 'MethodDefinition'}],
    },

    {
      code: 'class Foo {static ["bar"]() {}}',
      parser: 'babel-eslint',
      errors: [{message, type: 'MethodDefinition'}],
    },
    {
      code: 'class Foo {static [123]() {}}',
      parser: 'babel-eslint',
      errors: [{message, type: 'MethodDefinition'}],
    },
  ],
});
