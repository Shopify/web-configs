const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/react-require-autocomplete');

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

function errorMessage(componentName, tagName) {
  return [
    {
      type: 'JSXOpeningElement',
      message: `'${componentName}' elements of type '${tagName}' must have an autoComplete attribute`,
    },
  ];
}

ruleTester.run('react-require-autocomplete', rule, {
  valid: [
    {
      code: '<TextField type="email" autoComplete="email" />',
      options: [{inputComponents: ['TextField']}],
    },
    {
      code: '<input type="email" autoComplete="email" />',
    },
    {
      code: '<input type="checkbox" name="checkbox" />',
    },
    {
      code: '<div />',
    },
    {
      code: '<p />',
    },
    {
      code: 'const autoComplete = "email"; const myInput = <input type="email" autoComplete={autoComplete} />;',
    },
    {
      code: `
      function MyComponent() {
        const fieldProps = {
          label: "Email",
          autoComplete: "emaill"
        }
        return <TextField type="email" {...fieldProps} />;
      }`,
    },
    {
      code: `
      function MyComponent({fieldProps}) {
        return <TextField type="text" {...fieldProps} />;
      }`,
    },
  ],
  invalid: [
    {
      code: '<TextField type="email" />',
      options: [{inputComponents: ['TextField']}],
      errors: errorMessage('TextField', 'email'),
    },
    {
      code: '<input type="email" />',
      errors: errorMessage('input', 'email'),
    },
    {
      code: 'const props = {label: "Name"}; const myInput = <input {...props} />;',
      errors: errorMessage('input', 'text'),
    },
  ],
});
