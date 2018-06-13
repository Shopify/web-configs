const {RuleTester} = require('eslint');
const rule = require('../../../lib/rules/jsx-prefer-fragment-wrappers');

require('babel-eslint');

const parser = 'babel-eslint';
const ruleTester = new RuleTester();
function errorWithTagName(tagName) {
  return [
    {
      type: 'JSXElement',
      message: `replace wrapping ${tagName} with fragment shorthand`,
    },
  ];
}

ruleTester.run('jsx-prefer-fragment-wrappers', rule, {
  valid: [
    {code: '<div className={className}>{foo}{bar}<Baz /></div>', parser},
    {code: '<div><Bar /></div>', parser},
    {code: '<Foo><Bar /><Baz /></Foo>', parser},
    {code: '<Foo>{someFunction()}</Foo>', parser},
    {code: '<Foo>Some content</Foo>', parser},
    {
      code: '<React.Fragment><Foo /><Bar /><Baz /></React.Fragment>',
      parser,
    },
    {
      code: '<><Foo /><Bar /><Baz /></>',
      parser,
    },
    {
      code: '<Foo.Bar><Foo /><Bar /><Baz /></Foo.Bar>',
      parser,
    },
  ],
  invalid: [
    {
      code: '<span>{things}{things}</span>',
      parser,
      errors: errorWithTagName('span'),
    },
    {
      code: '<div>{things}{things}</div>',
      parser,
      errors: errorWithTagName('div'),
    },
    {
      code: '<div><Foo /><Bar /><Baz><Foo /></Baz></div>',
      parser,
      errors: errorWithTagName('div'),
    },
  ],
});
