const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/jsx-no-hardcoded-admin-prefix');

const ruleTester = new RuleTester({
  parser: require.resolve('@babel/eslint-parser'),
  parserOptions: {
    babelOptions: {
      presets: [
        ['@babel/preset-typescript', {isTSX: true, allExtensions: true}],
      ],
    },
  },
});

function errorMessage() {
  const message =
    'Do not use hardcoded path prefix /admin in Route components.';

  return [{type: 'JSXElement', message}];
}

ruleTester.run('jsx-no-hardcoded-admin-prefix', rule, {
  valid: [
    {code: '<Route path="/literal/path/without/prefix" />'},
    {code: '<Route path={`/template/path/without/prefix`} />'},
    {code: '<div><Route path="/literal/path/without/prefix" /></div>'},
    {code: '<div><Route path={`/template/path/without/prefix`} /></div>'},
  ],
  invalid: [
    {
      code: '<Route path="/admin/literal/path/with/prefix" />',
      errors: errorMessage(),
    },
    {
      code: '<Route path={`/admin/template/path/with/prefix`} />',
      errors: errorMessage(),
    },
    {
      code: '<div><Route path="/admin/literal/path/with/prefix" /></div>',
      errors: errorMessage(),
    },
    {
      code: '<div><Route path={`/admin/template/path/with/prefix`} /></div>',
      errors: errorMessage(),
    },
  ],
});
