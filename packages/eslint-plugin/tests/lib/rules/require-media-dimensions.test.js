const {RuleTester} = require('eslint');

const rule = require('../../../lib/rules/require-media-dimensions');
const {fixtureFile} = require('../../utilities');

const ruleTester = new RuleTester();

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {jsx: true},
};

ruleTester.run('require-media-dimensions', rule, {
  valid: [
    {
      code: `import {Image} from 'not-polaris';
      function MyComponent() {
        return <Image source="image.png" />;
      }`,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `import {Image} from '@shopify/polaris';
      function MyComponent() {
        return <Image source="image.png" width="300" height="300" />;
      }`,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<CustomImage src="image.png" width="300" height="300" />',
      options: [{mediaElements: ['CustomImage']}],
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<img src="image.png" width="500" height="500" />',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<video src="footage.mp4" width="560" height="315" />',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<div />',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<p />',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myImage = <img src="image.png" width="500" height="500" />;',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code:
        'const myVideo = <video autoplay src="footage.mp4" width="500" height="500" />;',
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `
      function MyComponent() {
        return (
          <img
            src="image.png"
            width="500"
            height="500"
            alt="cute little photo"
          />
        );
      }`,
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
  invalid: [
    {
      code: '<img src="image.png" />',
      errors: composeErrorMessage('img', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<img src="image.png" width="300" />',
      errors: composeErrorMessage('img', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<img src="image.png" height="300" />',
      errors: composeErrorMessage('img', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<video src="footage.mp4" />',
      errors: composeErrorMessage('video', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<video src="footage.mp4" width="300" />',
      errors: composeErrorMessage('video', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<video src="footage.mp4" height="300" />',
      errors: composeErrorMessage('video', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<CustomImage src="image.png" />',
      options: [{mediaElements: ['CustomImage']}],
      errors: composeErrorMessage('CustomImage', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<CustomImage src="image.png" width="300" />',
      options: [{mediaElements: ['CustomImage']}],
      errors: composeErrorMessage('CustomImage', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: '<CustomImage src="image.png" height="300" />',
      options: [{mediaElements: ['CustomImage']}],
      errors: composeErrorMessage('CustomImage', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `import {Image} from '@shopify/polaris';
      function MyComponent() {
        return <Image source="image.png" />;
      }`,
      errors: composeErrorMessage('Image', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `import {Image} from '@shopify/polaris';
      function MyComponent() {
        return <Image source="image.png" width="300" />;
      }`,
      errors: composeErrorMessage('Image', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: `import {Image} from '@shopify/polaris';
      function MyComponent() {
        return <Image source="image.png" height="300" />;
      }`,
      errors: composeErrorMessage('Image', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myImage = <img src="image.png" />;',
      errors: composeErrorMessage('img', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myImage = <img src="image.png" width="300" />;',
      errors: composeErrorMessage('img', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myImage = <img src="image.png" height="300" />;',
      errors: composeErrorMessage('img', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myVideo = <video src="footage.mp4" />;',
      errors: composeErrorMessage('video', ['width', 'height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myVideo = <video src="footage.mp4" width="300" />;',
      errors: composeErrorMessage('video', ['height']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
    {
      code: 'const myVideo = <video src="footage.mp4" height="300" />;',
      errors: composeErrorMessage('video', ['width']),
      filename: fixtureFile('polaris-app/index.js'),
      parserOptions,
    },
  ],
});

function composeErrorMessage(elementName, missingProps = []) {
  return missingProps.map((missingProp) => ({
    type: 'JSXElement',
    message: `Unspecified explicit \`${missingProp}\` prop for ${elementName}.`,
  }));
}
