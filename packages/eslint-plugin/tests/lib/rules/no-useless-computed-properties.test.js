const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/no-useless-computed-properties');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    ecmaVersion: 6,
  },
});
const message = 'Computed property is using a literal key unnecessarily.';

ruleTester.run('no-useless-computed-properties', rule, {
  valid: [
    {code: 'var foo = {"bar": true}'},
    {code: 'var foo = {bar: true}'},
    {code: 'var foo = {[bar]: true}'},
    {code: 'var foo = {[bar()]: true}'},
    {code: 'var foo = {123: true}'},

    {code: 'var foo = {"bar"() {}}'},
    {code: 'var foo = {bar() {}}'},
    {code: 'var foo = {[bar]() {}}'},
    {code: 'var foo = {[bar()]() {}}'},
    {code: 'var foo = {123() {}}'},

    {code: 'class Foo {"bar"() {}}'},
    {code: 'class Foo {bar() {}}'},
    {code: 'class Foo {[bar]() {}}'},
    {code: 'class Foo {[bar()]() {}}'},
    {code: 'class Foo {123() {}}'},

    {code: 'class Foo {static "bar"() {}}'},
    {code: 'class Foo {static bar() {}}'},
    {code: 'class Foo {static [bar]() {}}'},
    {code: 'class Foo {static [bar()]() {}}'},
    {code: 'class Foo {static 123() {}}'},
  ],
  invalid: [
    {
      code: 'var foo = {["bar"]: true}',
      errors: [{message, type: 'Property'}],
    },
    {
      code: 'var foo = {[123]: true}',
      errors: [{message, type: 'Property'}],
    },

    {
      code: 'var foo = {["bar"]() {}}',
      errors: [{message, type: 'Property'}],
    },
    {
      code: 'var foo = {[123]() {}}',
      errors: [{message, type: 'Property'}],
    },

    {
      code: 'class Foo {["bar"]() {}}',
      errors: [{message, type: 'MethodDefinition'}],
    },
    {
      code: 'class Foo {[123]() {}}',
      errors: [{message, type: 'MethodDefinition'}],
    },

    {
      code: 'class Foo {static ["bar"]() {}}',
      errors: [{message, type: 'MethodDefinition'}],
    },
    {
      code: 'class Foo {static [123]() {}}',
      errors: [{message, type: 'MethodDefinition'}],
    },
  ],
});
