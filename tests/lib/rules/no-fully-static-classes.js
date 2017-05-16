const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/no-fully-static-classes');

const ruleTester = new RuleTester();

require('babel-eslint');

const parser = 'babel-eslint';

function method(name = 'foo') { return `${name}() {}`; }
function staticMethod(name = 'bar') { return `static ${name}() {}`; }
function property(name = 'baz') { return `${name} = true;`; }
function staticProperty(name = 'qux') { return `static ${name} = true;`; }

function errorWithType(type) {
  return [{
    type,
    message: 'Classes declaring only static members should be objects or named exports instead.',
  }];
}

ruleTester.run('prefer-class-properties', rule, {
  valid: [
    {
      code: `class Foo {
        ${method('foo')}
        ${method('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${method('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${property('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${property('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${method('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${method('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
    },
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${method('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${method('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${property('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${property('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${property('bar')}
      }`,
      parser,
    },
    {
      code: 'class Foo {}',
      parser,
    },
    {
      code: `class Foo extends Bar {
        ${staticMethod('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
    },
  ],
  invalid: [
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${staticMethod('bar')}
      }`,
      parser,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `class Foo {
        ${staticProperty('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `class Foo {
        ${staticProperty('foo')}
        ${staticMethod('bar')}
      }`,
      parser,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${staticMethod('bar')}
      }`,
      parser,
      errors: errorWithType('ClassExpression'),
    },
    {
      code: `const Foo = class {
        ${staticProperty('foo')}
        ${staticProperty('bar')}
      }`,
      parser,
      errors: errorWithType('ClassExpression'),
    },
    {
      code: `const Foo = class {
        ${staticProperty('foo')}
        ${staticMethod('bar')}
      }`,
      parser,
      errors: errorWithType('ClassExpression'),
    },
  ],
});
