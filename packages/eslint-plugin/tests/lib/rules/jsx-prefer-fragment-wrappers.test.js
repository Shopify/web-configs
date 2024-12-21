const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/jsx-prefer-fragment-wrappers');

const ruleTester = new RuleTester({
  parserOptions: {ecmaVersion: 'latest', ecmaFeatures: {jsx: true}},
});

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
    {code: '<div className={className}>{foo}{bar}<Baz /></div>'},
    {code: '<div><Bar /></div>'},
    {code: '<Foo><Bar /><Baz /></Foo>'},
    {code: '<Foo>{someFunction()}</Foo>'},
    {code: '<Foo>Some content</Foo>'},
    {
      code: '<React.Fragment><Foo /><Bar /><Baz /></React.Fragment>',
    },
    {
      code: '<><Foo /><Bar /><Baz /></>',
    },
    {
      code: '<Foo.Bar><Foo /><Bar /><Baz /></Foo.Bar>',
    },
    {
      code: '<table><tbody /><thead /></table>',
    },
    {
      code: '<tr><td>data</td><td>more data</td></tr>',
    },
  ],
  invalid: [
    {
      code: '<span>{things}{things}</span>',
      errors: errorWithTagName('span'),
    },
    {
      code: '<div>{things}{things}</div>',
      errors: errorWithTagName('div'),
    },
    {
      code: '<div><Foo /><Bar /><Baz><Foo /></Baz></div>',
      errors: errorWithTagName('div'),
    },
  ],
});
