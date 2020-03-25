const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/no-fully-static-classes');

const ruleTester = new RuleTester({parser: require.resolve('babel-eslint')});

function method(name = 'foo') {
  return `${name}() {}`;
}
function staticMethod(name = 'bar') {
  return `static ${name}() {}`;
}
function property(name = 'baz') {
  return `${name} = true;`;
}
function staticProperty(name = 'qux') {
  return `static ${name} = true;`;
}

function errorWithType(type) {
  return [
    {
      type,
      message:
        'Classes declaring only static members should be objects or named exports instead.',
    },
  ];
}

ruleTester.run('prefer-class-properties', rule, {
  valid: [
    {
      code: `class Foo {
        ${method('foo')}
        ${method('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${method('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${property('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${property('foo')}
        ${staticProperty('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${method('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${method('foo')}
        ${staticProperty('bar')}
      }`,
    },
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${method('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${method('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${property('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${property('foo')}
        ${staticProperty('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${method('foo')}
        ${staticProperty('bar')}
      }`,
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${property('bar')}
      }`,
    },
    {
      code: 'class Foo {}',
    },
    {
      code: `class Foo extends Bar {
        ${staticMethod('foo')}
        ${staticProperty('bar')}
      }`,
    },
  ],
  invalid: [
    {
      code: `class Foo {
        ${staticMethod('foo')}
        ${staticMethod('bar')}
      }`,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `class Foo {
        ${staticProperty('foo')}
        ${staticProperty('bar')}
      }`,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `class Foo {
        ${staticProperty('foo')}
        ${staticMethod('bar')}
      }`,
      errors: errorWithType('ClassDeclaration'),
    },
    {
      code: `const Foo = class {
        ${staticMethod('foo')}
        ${staticMethod('bar')}
      }`,
      errors: errorWithType('ClassExpression'),
    },
    {
      code: `const Foo = class {
        ${staticProperty('foo')}
        ${staticProperty('bar')}
      }`,
      errors: errorWithType('ClassExpression'),
    },
    {
      code: `const Foo = class {
        ${staticProperty('foo')}
        ${staticMethod('bar')}
      }`,
      errors: errorWithType('ClassExpression'),
    },
  ],
});
