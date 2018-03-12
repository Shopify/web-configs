const {RuleTester} = require('eslint');
const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/jsx-no-hardcoded-content');

const ruleTester = new RuleTester();

require('babel-eslint');

const parser = 'babel-eslint';

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
    {code: '<div />', parser},
    {
      code: `<div>
        <div />
      </div>`,
      parser,
    },
    {code: '<MyComponent />', parser},
    {
      code: `<MyComponent>
        <div />
      </MyComponent>`,
      parser,
    },
    {code: '<MyComponent>{true}</MyComponent>', parser},
    {code: '<MyComponent>{2}</MyComponent>', parser},
    {code: '<MyComponent>{true}</MyComponent>', parser},
    {
      code: '<MyComponent>Content</MyComponent>',
      parser,
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{"Content"}</MyComponent>',
      parser,
      options: [allowStrings],
    },
    {code: '<MyComponent>{someVariable}</MyComponent>', parser},
    {code: '<MyComponent>{someFunction()}</MyComponent>', parser},
    {code: '<MyComponent>{this.someMethod()}</MyComponent>', parser},
    {
      code: '<MyComponent>{someVariable} Content</MyComponent>',
      parser,
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      parser,
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{` Content`}</MyComponent>',
      parser,
      options: [allowStrings],
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      parser,
      options: [{...allowStrings, ...disallowNumbers}],
    },
    {
      code: '<MyComponent foo />',
      parser,
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={false} />',
      parser,
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={42} />',
      parser,
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={someFunction()} />',
      parser,
      options: [checkProps],
    },
    {
      code: '<MyComponent foo={someVariable} />',
      parser,
      options: [checkProps],
    },
    {
      code: '<MyComponent foo="bar" />',
      parser,
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent foo={"bar"} />',
      parser,
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: "<MyComponent foo={'bar'} />",
      parser,
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent foo={`bar`} />',
      parser,
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent foo={`bar`} />',
      parser,
      options: [{...checkProps, ...allowStrings}],
    },
    {
      code: '<MyComponent>{42}</MyComponent>',
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
        import {MyComponent} from 'my-module';
        function MyComponent() {}
        <MyComponent>{42}</MyComponent>
      `,
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      code: '<MyComponent>Content</MyComponent>',
      parser,
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{"Content"}</MyComponent>',
      parser,
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{`Content`}</MyComponent>',
      parser,
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{someFunction()} Content</MyComponent>',
      parser,
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{someFunction()}{" Content"}</MyComponent>',
      parser,
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent>{3}</MyComponent>',
      parser,
      options: [disallowNumbers],
      errors: errorsFor('MyComponent', 'children'),
    },
    {
      code: '<MyComponent foo={42} />',
      parser,
      options: [{...checkProps, ...disallowNumbers}],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo="bar" />',
      parser,
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo={"bar"} />',
      parser,
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: "<MyComponent foo={'bar'} />",
      parser,
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: '<MyComponent foo={`bar`} />',
      parser,
      options: [checkProps],
      errors: errorsFor('MyComponent', 'foo'),
    },
    {
      code: `
        import {MyComponent} from 'my-module';
        <MyComponent>Content</MyComponent>
      `,
      parser,
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
      parser,
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
      parser,
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
        import {MyComponent} from 'my-module';
        function MyComponent() {}
        <MyComponent>Content</MyComponent>
      `,
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
      parser,
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
