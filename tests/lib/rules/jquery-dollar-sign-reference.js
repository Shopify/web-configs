const rule = require('../../../lib/rules/jquery-dollar-sign-reference');
const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();

require('babel-eslint');

function missingDollarError(otherAttrs) {
  otherAttrs.message = 'Use a $-prefixed identifier for a jQuery value.';
  return otherAttrs;
}

function unexpectedDollarError(otherAttrs) {
  otherAttrs.message = 'Don’t use a $-prefixed identifier for a non-jQuery value.';
  return otherAttrs;
}

ruleTester.run('jquery-dollar-sign-reference', rule, {
  valid: [
    {code: 'var $foo = $("foo");'},
    {code: 'var $foo = $bar;'},
    {code: 'var $foo = jQuery("foo");'},
    {code: 'var $foo = something();'},
    {code: 'var $foo = something.else();'},
    {code: 'var foo = "something";'},
    {code: 'var foo = "$bar";'},
    {code: 'var foo = something();'},
    {code: 'var foo = bar;'},

    {code: 'this.$foo = $("foo");'},
    {code: 'this.$foo = $bar;'},
    {code: 'this.$foo = jQuery("foo");'},
    {code: 'this.$foo = something();'},
    {code: 'this.$foo = something.else();'},
    {code: 'this.foo = "something";'},
    {code: 'this.foo = "$bar";'},
    {code: 'this.foo = something();'},
    {code: 'this.foo = bar;'},

    {code: 'this["$foo"] = $("foo");'},
    {code: 'this["$foo"] = $bar;'},
    {code: 'this["$foo"] = jQuery("foo");'},
    {code: 'this["$foo"] = something();'},
    {code: 'this["$foo"] = something.else();'},
    {code: 'this["foo"] = "something";'},
    {code: 'this["foo"] = "$bar";'},
    {code: 'this["foo"] = something();'},
    {code: 'this["foo"] = bar;'},

    {code: 'this[foo] = $("foo");'},
    {code: 'this[foo()] = $("foo");'},
    {code: 'this[foo] = something;'},
    {code: 'this[foo()] = something;'},

    {code: 'obj = {$foo: $("foo")}'},
    {code: 'obj = {$foo: $bar}'},
    {code: 'obj = {$foo: jQuery("foo")}'},
    {code: 'obj = {$foo: something()}'},
    {code: 'obj = {$foo: something.else()}'},
    {code: 'obj = {foo: "something"}'},
    {code: 'obj = {foo: "$bar"}'},
    {code: 'obj = {foo: something()}'},
    {code: 'obj = {foo: bar}'},

    {code: 'var $foo; $foo = $("foo");'},
    {code: 'var $foo; $foo = $bar;'},
    {code: 'var $foo; $foo = jQuery("foo");'},
    {code: 'var $foo; $foo = something();'},
    {code: 'var $foo; $foo = something.else();'},
    {code: 'var foo; foo = "something";'},
    {code: 'var foo; foo = "$bar";'},
    {code: 'var foo; foo = something();'},
    {code: 'var foo; foo = bar;'},

    {
      code: 'var [$foo, bar] = baz;',
      parser: 'babel-eslint',
    },
    {
      code: 'var {$foo, bar} = baz;',
      parser: 'babel-eslint',
    },

    {
      code: 'class Foo { static $foo = $("foo"); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static $foo = $bar; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static $foo = jQuery("foo"); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static $foo = something(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static $foo = something.else(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static foo = "something"; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static foo = "$bar"; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static foo = something(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { static foo = bar; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { $foo = $("foo"); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { $foo = $bar; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { $foo = jQuery("foo"); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { $foo = something(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { $foo = something.else(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { foo = "something"; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { foo = "$bar"; }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { foo = something(); }',
      parser: 'babel-eslint',
    },
    {
      code: 'class Foo { foo = bar; }',
      parser: 'babel-eslint',
    },

    {code: 'var $foo = $("foo").addClass("bar").removeClass("baz");'},
    {code: 'var $foo = $("foo").baz().qux();'},
    {code: 'var $foo = jQuery("foo").addClass("bar").removeClass("baz");'},
    {code: 'var $foo = jQuery("foo").baz().qux();'},
    {code: 'var $foo = $bar.addClass("bar").removeClass("baz");'},
    {code: 'var $foo = $bar.baz().qux();'},
    {code: 'var foo = other("foo").addClass("bar").removeClass("baz");'},
    {code: 'var foo = other("foo").baz().qux();'},
    {code: 'var foo = bar.addClass("bar").removeClass("baz");'},
    {code: 'var foo = bar.baz().qux();'},
    {code: 'var foo = $.ajax().onFail();'},
    {code: 'var foo = $.version;'},

    {code: 'var $foo = $bar.attr({});'},
    {code: 'var $foo = $bar.attr(key, val);'},
    {code: 'var $foo = $bar.prop({});'},
    {code: 'var $foo = $bar.prop(key, val);'},
    {code: 'var $foo = $bar.data({});'},
    {code: 'var $foo = $bar.data(key, val);'},
    {code: 'var $foo = $bar.html("<div />");'},
    {code: 'var foo = $bar.attr(key);'},
    {code: 'var foo = $bar.prop(key);'},
    {code: 'var foo = $bar.data(key);'},
    {code: 'var foo = $bar.html();'},

    {code: 'var foo = $bar.context();'},
    {code: 'var foo = $bar.get();'},
    {code: 'var foo = $bar.hasClass();'},
    {code: 'var foo = $bar.height();'},
    {code: 'var foo = $bar.index();'},
    {code: 'var foo = $bar.innerHeight();'},
    {code: 'var foo = $bar.innerWidth();'},
    {code: 'var foo = $bar.is();'},
    {code: 'var foo = $bar.offset();'},
    {code: 'var foo = $bar.outerHeight();'},
    {code: 'var foo = $bar.outerWidth();'},
    {code: 'var foo = $bar.position();'},
    {code: 'var foo = $bar.promise();'},
    {code: 'var foo = $bar.scrollLeft();'},
    {code: 'var foo = $bar.scrollTop();'},
    {code: 'var foo = $bar.serialize();'},
    {code: 'var foo = $bar.serializeArray();'},
    {code: 'var foo = $bar.size();'},
    {code: 'var foo = $bar.text();'},
    {code: 'var foo = $bar.toArray();'},
    {code: 'var foo = $bar.triggerHandler();'},
    {code: 'var foo = $bar.val();'},
    {code: 'var foo = $bar.width();'},
  ],
  invalid: [
    {
      code: 'var foo = $("foo");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar;',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = jQuery("foo");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = "something";',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = bar;',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },

    {
      code: 'this.foo = $("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this.foo = $bar;',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this.foo = jQuery("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this.$foo = "something";',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this.$foo = bar;',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },

    {
      code: 'this["foo"] = $("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this["foo"] = $bar;',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this["foo"] = jQuery("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this["$foo"] = "something";',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'this["$foo"] = bar;',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },

    {
      code: 'obj = {foo: $("foo")};',
      errors: [missingDollarError({type: 'Property'})],
    },
    {
      code: 'obj = {foo: $bar};',
      errors: [missingDollarError({type: 'Property'})],
    },
    {
      code: 'obj = {foo: jQuery("foo")};',
      errors: [missingDollarError({type: 'Property'})],
    },
    {
      code: 'obj = {$foo: "something"};',
      errors: [unexpectedDollarError({type: 'Property'})],
    },
    {
      code: 'obj = {$foo: bar};',
      errors: [unexpectedDollarError({type: 'Property'})],
    },

    {
      code: 'var foo; foo = $("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'var foo; foo = $bar;',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'var foo; foo = jQuery("foo");',
      errors: [missingDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'var $foo; $foo = "something";',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },
    {
      code: 'var $foo; $foo = bar;',
      errors: [unexpectedDollarError({type: 'AssignmentExpression'})],
    },

    {
      code: 'class Foo { static foo = $("foo"); }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { static foo = $bar; }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { static foo = jQuery("foo"); }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { static $foo = "something"; }',
      parser: 'babel-eslint',
      errors: [unexpectedDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { static $foo = bar; }',
      parser: 'babel-eslint',
      errors: [unexpectedDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { foo = $("foo"); }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { foo = $bar; }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { foo = jQuery("foo"); }',
      parser: 'babel-eslint',
      errors: [missingDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { $foo = "something"; }',
      parser: 'babel-eslint',
      errors: [unexpectedDollarError({type: 'ClassProperty'})],
    },
    {
      code: 'class Foo { $foo = bar; }',
      parser: 'babel-eslint',
      errors: [unexpectedDollarError({type: 'ClassProperty'})],
    },

    {
      code: 'var foo = $("foo").addClass("bar").removeClass("baz");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $("foo").baz().qux();',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = jQuery("foo").addClass("bar").removeClass("baz");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = jQuery("foo").baz().qux();',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.addClass("bar").removeClass("baz");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.baz().qux();',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $.version;',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },

    {
      code: 'var foo = $bar.attr({});',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.attr(key, val);',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.prop({});',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.prop(key, val);',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.data({});',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.data(key, val);',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var foo = $bar.html("<div />");',
      errors: [missingDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.attr(key);',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.prop(key);',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.data(key);',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.html();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },

    {
      code: 'var $foo = $bar.context();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.get();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.hasClass();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.height();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.index();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.innerHeight();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.innerWidth();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.is();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.offset();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.outerHeight();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.outerWidth();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.position();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.promise();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.scrollLeft();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.scrollTop();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.serialize();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.serializeArray();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.size();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.text();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.toArray();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.triggerHandler();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.val();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
    {
      code: 'var $foo = $bar.width();',
      errors: [unexpectedDollarError({type: 'VariableDeclarator'})],
    },
  ],
});
