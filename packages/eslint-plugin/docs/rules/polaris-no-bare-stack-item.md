# Disallow the use of Polaris’s `LegacyStack.Item` without any custom props. (polaris-no-bare-stack-item)

The Polaris [`LegacyStack` component](https://polaris.shopify.com/components/layout-and-structure/legacy-stack) has an `Item` subcomponent that is automatically wrapped around all children. As such, it is useless to wrap any content in a `LegacyStack.Item` unless a non-default prop value is provided. This rule prevents creating such items.

Note that this rule will only work if the Stack component was explicitly imported using a named, default, or namespace import, and not when using dynamic imports (`import('@shopify/polaris')`).

## Rule Details

The following patterns are considered warnings:

```js
import * as Polaris from '@shopify/polaris';
import {LegacyStack} from '@shopify/polaris';
import {LegacyStack as PolarisLegacyStack} from '@shopify/polaris';

<LegacyStack><LegacyStack.Item>Content</LegacyStack.Item></LegacyStack>
<Polaris.LegacyStack.Item>Content</Polaris.LegacyStack.Item>
<PolarisLegacyStack.Item>Content</PolarisLegacyStack.Item>
```

The following patterns are not warnings:

```js
import {LegacyStack} from '@shopify/polaris';

<LegacyStack.Item fill><span>Content</span></LegacyStack.Item>
<LegacyStack><span>No wrapping item</span></LegacyStack>
```

