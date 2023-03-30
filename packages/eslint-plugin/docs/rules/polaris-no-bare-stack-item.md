# Disallow the use of Polaris’s `Stack.Item` and `LegacyStack.Item` without any custom props. (polaris-no-bare-stack-item)

The Polaris [`Stack` component](https://polaris.shopify.com/components/deprecated/stack) and [`LegacyStack` component](https://polaris.shopify.com/components/layout-and-structure/legacy-stack) have an `Item` subcomponent that is automatically wrapped around all children. As such, it is useless to wrap any content in a `Stack.Item` or `LegacyStack.Item` unless a non-default prop value is provided. This rule prevents creating such items.

Note that this rule will only work if the Stack component was explicitly imported using a named, default, or namespace import, and not when using dynamic imports (`import('@shopify/polaris')`).

## Rule Details

The following patterns are considered warnings:

```js
import * as Polaris from '@shopify/polaris';
import {Stack, LegacyStack} from '@shopify/polaris';
import {Stack as PolarisStack, LegacyStack as PolarisLegacyStack} from '@shopify/polaris';

<Stack><Stack.Item>Content</Stack.Item></Stack>
<Polaris.Stack.Item>Content</Polaris.Stack.Item>
<PolarisStack.Item>Content</PolarisStack.Item>
<LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>
<Polaris.LegacyStack.Item>Content</Polaris.LegacyStack.Item>
<PolarisLegacyStack.Item>Content</PolarisLegacyStack.Item>
```

The following patterns are not warnings:

```js
import {Stack, LegacyStack} from '@shopify/polaris';

<Stack.Item fill><span>Content</span></Stack.Item>
<Stack><span>No wrapping item</span></Stack>
<LegacyStack.Item fill><span>Content</span></LegacyStack.Item>
<LegacyStack><span>No wrapping item</span></LegacyStack>
```

