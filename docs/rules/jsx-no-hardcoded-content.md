# Disallows hardcoded content in JSX. (jsx-no-hardcoded-content)

Many JSX components accept children and other properties that are intended for UI content. In an internationalized app, content is generally provided to these components through a translation function, not directly as strings. This rule enforces that components not accept harcoded literal content.

## Rule Details

This rule accepts options that dictate what content to disallow for all components, globally, and allows per-component overrides.

### `allowStrings`

Allows hardcoded string and template literals as content. Optional, defaults to `false`.

With `{allowStrings: false}`, the following patterns are considered warnings:

```js
<div>Content</div>
<MyComponent>{someContent()}{` and more content`}</MyComponent>
```

The following patterns are not warnings:

```js
<div>{someContent('content')}</div>
<MyComponent name="Shopify" />
<MyComponent>{42}</MyComponent>
```

### `allowNumbers`

Allows hardcoded numbers as content. Optional, defaults to `true`.

With `{allowNumbers: false}`, the following patterns are considered warnings:

```js
<div>{42}</div>
<MyComponent>{someContent()}{42}</MyComponent>
```

The following patterns are not warnings:

```js
<div>{someContent(42)}</div>
<MyComponent amount={42} />
```

### `checkProps`

Specifies a list of props to check for hardcoded content, according to the rules set in `allowStrings` and `allowNumbers`. Note that this check will not be able to catch hardcoded content that was not passed directly (for example, props that are set to variables initially, or props that are spread). Optional, defaults to an empty array.

With `{checkProps: ['foo'], allowStrings: false}`, the following patterns are considered warnings:

```js
<MyComponent>Content</MyComponent>
<MyComponent foo="bar" />
<MyComponent foo={`name: ${content()}`}>
```

The following patterns are not warnings:

```js
<MyComponent foo={42} />
<MyComponent foo={content()} />
<MyComponent bar="baz" />
```

### `modules`

Allows you to specify custom validation logic for components in different modules. This option should be an object where:

* The key is the name of the module:
  * For node modules, simply use the name by which you would import it.
  * For local modules, specify the root-relative path of the module (so, for example, `app/components` will set options for anything that imports from `app/components.js`/ `app/components/index.js`, regardless of the relative path used for the import itself)

  Note that this check will also respect any custom resolution logic used for imports specified for [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import). Additionally, this rule will only work for imports components using a named, default, or namespace import, and not when using dynamic imports (`import('@shopify/polaris')`).
* The value is an object where the keys are names of exported components (use `default` to refer to a default export). The values for this object are objects which have some set of the `allowStrings`, `allowNumbers`, and `checkProps` options detailed above.

By default, no custom overrides are set. If you specify overrides for some components in a module, but not others, unspecified components will get the default options noted above.

With:

```
{
  allowStrings: false,
  allowNumbers: true,
  modules: {
    'my-module': {
      MyComponent: {allowStrings: true, allowNumbers: false},
    },
  },
}
```

the following patterns are considered warnings:

```js
import {OtherComponent, MyComponent} from 'my-module';

<MyComponent>{42}</MyComponent>
<OtherComponent>Content</OtherComponent>
```

The following are not warnings:

```js
import {OtherComponent, MyComponent} from 'my-module';

<MyComponent>Content</MyComponent>
<OtherComponent>{42}</OtherComponent>
```

With:

```
{
  modules: {
    'app/components': {
      MyComponent: {checkProps: ['title']},
    },
  },
}
```

the following patterns are considered warnings:

```js
// in app/sections/MySection.js

import {MyComponent} from '../components';
<MyComponent title="Hello world" />

// in app/sections/MyOtherSection.js, assuming you have added
// `app` as a `moduleDirectory` in your `settings/import` configuration

import {MyComponent} from 'components';
<MyComponent title="Hello world" />
```

The following are not warnings:

```js
import {MyComponent} from '../other';
import {OtherComponent} from '../components';

<MyComponent title="Hello world" />
<OtherComponent title="Hello world" />
```
