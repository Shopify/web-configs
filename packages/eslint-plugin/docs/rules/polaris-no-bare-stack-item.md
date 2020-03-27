# Disallow the use of Polaris’s `Stack.Item` without any custom props. (polaris-no-bare-stack-item)

The Polaris [`Stack` component](https://polaris.shopify.com/components/structure/stack) has an `Item` subcomponent that is automatically wrapped around all children. As such, it is useless to wrap any content in a `Stack.Item` unless a non-default prop value is provided. This rule prevents creating such items.

Note that this rule will only work if the Stack component was explicitly imported using a named, default, or namespace import, and not when using dynamic imports (`import('@shopify/polaris')`).

## Rule Details

The following patterns are considered warnings:

```js
import * as Polaris from '@shopify/polaris';
import {Stack} from '@shopify/polaris';
import {Stack as PolarisStack} from '@shopify/polaris';

<Stack><Stack.Item>Content</Stack.Item></Stack>
<Polaris.Stack.Item>Content</Polaris.Stack.Item>
<PolarisStack.Item>Content</PolarisStack.Item>
```

The following patterns are not warnings:

```js
import {Stack} from '@shopify/polaris';

<Stack.Item fill>Content</Stack.Item>
<Stack>No wrapping item</Stack>
```

