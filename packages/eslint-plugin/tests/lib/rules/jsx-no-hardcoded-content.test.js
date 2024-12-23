const {FlatRuleTester: RuleTester} = require('eslint/use-at-your-own-risk');

const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/jsx-no-hardcoded-content');

const ruleTester = new RuleTester({
  languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
});

function errorsFor(component, prop) {
  const message =
    prop === 'children'
      ? `Do not use hardcoded content as the children of the ${component} component.`
      : `Do not use hardcoded content in the ${prop} prop of the ${component} component.`;

  return [{type: 'JSXElement', message}];
}

const allowStrings = {allowStrings: true};
const disallowNumbers = {allowNumbers: false};
const checkProps = {checkProps: ['foo']};

ruleTester.run('jsx-no-hardcoded-content', rule, {
  valid: [
    {code: '<div />'},
    {code: '<div aria-label={someVariable} />'},
    {code: '<div title={someVariable} />'},
    {code: '<img alt={someVariable} />'},
    {code: '<input placeholder={someVariable} />'},
    {
      code: `<div>
        <div />
      </div>`,
    },
    {code: '<MyComponent />'},
    {
      code: `<MyComponent>
        <div />
      </MyComponent>`,
    },
    {code: '<MyComponent>{true}</MyComponent>'},
    {code: '<MyComponent>{2}</MyComponent>'},
    {
      code: '<MyComponent>Content</MyComponent>',
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{"Content"}</MyComponent>',
      options: [allowStrings],
    },
    {code: '<MyComponent>{someVariable}</MyComponent>'},
    {code: '<MyComponent>{someFunction()}</MyComponent>'},
    {code: '<MyComponent>{this.someMethod()}</MyComponent>'},
    {
      code: '<MyComponent>{someVariable} Content</MyComponent>',
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{` Content`}</MyComponent>',
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      options: [{...allowStrings, ...disallowNumbers}],
    },
    {
      code: '<MyComponent foo />',
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={false} />',
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={42} />',
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={someFunction()} />',
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={someVariable} />',
      options: [checkProps],
    },
    {
      code: '<MyComponent foo="bar" />',
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent foo={"bar"} />',
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: "<MyComponent foo={'bar'} />",
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent foo={`bar`} />',
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent>{42}</MyComponent>',
      options: [
        {
          modules: {
            'my-module': {MyComponent: disallowNumbers},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'other-module';
        <MyComponent>{42}</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: disallowNumbers},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent>{42}</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {OtherComponent: disallowNumbers},
          },
        },
      ],
    },
    {
      code: '<MyComponent foo="bar" />',
      options: [
        {
          modules: {
            'my-module': {MyComponent: checkProps},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'other-module';
        <MyComponent foo="bar" />
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: checkProps},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent foo="bar" />
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {OtherComponent: checkProps},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: allowStrings},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent as Aliased} from 'my-module';
        <Aliased>Content</Aliased>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: allowStrings},
          },
        },
      ],
    },
    {
      code: `
        function MyComponent() {}
        <MyComponent>{42}</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: disallowNumbers},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from 'components';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      settings: {
        'import/resolver': {
          node: {
            moduleDirectory: [fixtureFile('basic-app/app')],
          },
        },
      },
      options: [
        {
          modules: {
            'app/components': {MyComponent: allowStrings},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from './components';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {MyComponent: allowStrings},
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from './weird.components.js';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/weird.components': {
              MyComponent: allowStrings,
            },
          },
        },
      ],
    },
    {
      code: `
        import MyComponent from './components';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {
              default: allowStrings,
            },
          },
        },
      ],
    },
    {
      code: `
        import {default as MyComponent} from './components';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {
              default: allowStrings,
            },
          },
        },
      ],
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.MyComponent>Content</Polaris.MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              MyComponent: allowStrings,
            },
          },
        },
      ],
    },
    {
      code: `
        import {MyComponent} from '@shopify/polaris';
        <MyComponent.Subcomponent>Content</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'MyComponent.Subcomponent': allowStrings,
            },
          },
        },
      ],
    },
    {
      code: `
        import MyComponent from '@shopify/polaris';
        <MyComponent.Subcomponent>Content</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'default.Subcomponent': allowStrings,
            },
          },
        },
      ],
    },
  ],
  invalid: [
    {
      code: '<div aria-label="Content" />',
      errors: errorsFor('div', 'aria-label'),
    },
    {
      code: '<div title="Content" />',
      errors: errorsFor('div', 'title'),
    },
    {
      code: '<img alt="Content" />',
      errors: errorsFor('img', 'alt'),
    },
    {
      code: '<input placeholder="Content" />',
      errors: errorsFor('input', 'placeholder'),
    },
    {
      code: '<my-element placeholder="Content" />',
      errors: errorsFor('my-element', 'placeholder'),
      options: [
        {
          dom: {
            'my-element': {
              checkProps: ['placeholder'],
            },
          },
        },
      ],
    },
    {
      code: '<MyComponent>Content</MyComponent>',
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{"Content"}</MyComponent>',
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{`Content`}</MyComponent>',
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{someFunction()} Content</MyComponent>',
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{3}</MyComponent>',
      options: [disallowNumbers],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent foo={42} />',
      options: [{...checkProps, ...disallowNumbers}],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo="bar" />',
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo={"bar"} />',
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: "<MyComponent foo={'bar'} />",
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo={`bar`} />',
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'other-module': {MyComponent: allowStrings},
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          ...allowStrings,
          modules: {
            'my-module': {MyComponent: disallowNumbers},
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {MyComponent as Aliased} from 'my-module';
        <Aliased>Content</Aliased>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {Aliased: allowStrings},
          },
        },
      ],
      errors: errorsFor('Aliased', 'children'),
    },
    {
      code: `
        function MyComponent() {}
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'my-module': {MyComponent: allowStrings},
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {MyComponent} from './weird.components.js';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/weird.components': {
              OtherComponent: allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {MyComponent} from './weird.components.js';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/other.components': {
              MyComponent: allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {OtherComponent as MyComponent} from './weird.components.js';
        <MyComponent>Content</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/weird.components': {
              MyComponent: allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import MyComponent from './components';
        <MyComponent>{42}</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {
              default: disallowNumbers,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import {default as MyComponent} from './components';
        <MyComponent>{42}</MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            'app/sections/MySection/components': {
              default: disallowNumbers,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.MyComponent>Content</Polaris.MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              OtherComponent: allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('Polaris.MyComponent', 'children'),
    },
    {
      code: `
        import * as Polaris from '@shopify/polaris';
        <Polaris.MyComponent>{42}</Polaris.MyComponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              MyComponent: disallowNumbers,
            },
          },
        },
      ],
      errors: errorsFor('Polaris.MyComponent', 'children'),
    },
    {
      code: `
        import {MyComponent} from '@shopify/polaris';
        <MyComponent.Subcomponent>{42}</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'MyComponent.Subcomponent': disallowNumbers,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent.Subcomponent', 'children'),
    },
    {
      code: `
        import {MyComponent} from '@shopify/polaris';
        <MyComponent.Subcomponent>Content</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'MyComponent.OtherSubcomponent': allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent.Subcomponent', 'children'),
    },
    {
      code: `
        import MyComponent from '@shopify/polaris';
        <MyComponent.Subcomponent>{42}</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'default.Subcomponent': disallowNumbers,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent.Subcomponent', 'children'),
    },
    {
      code: `
        import MyComponent from '@shopify/polaris';
        <MyComponent.Subcomponent>Content</MyComponent.Subcomponent>
      `,
      filename: fixtureFile('basic-app/app/sections/MySection/MySection.js'),
      options: [
        {
          modules: {
            '@shopify/polaris': {
              'default.OtherSubcomponent': allowStrings,
            },
          },
        },
      ],
      errors: errorsFor('MyComponent.Subcomponent', 'children'),
    },
  ],
});
