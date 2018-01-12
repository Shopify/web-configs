# Prefer the use of the `sectioned` props in Polaris components instead of wrapping all contents in a `Section` component. (polaris-prefer-sectioned-prop)

Polaris provides a convenience `sectioned` prop for some components that wraps the contents in a `Section` component. This rule enforces that the `sectioned` shorthand is used over wrapping the entire contents of the component in a `Section` subcomponent.

## Rule details

This rule currently requires the use of the `sectioned` prop over the `Section` subcomponent for the following components:

* [`Card`](https://polaris.shopify.com/components/structure/card)
* [`Popover`](https://polaris.shopify.com/components/overlays/popover)
* [`Layout`](https://polaris.shopify.com/components/structure/layout)

This rule only takes effect when the `Section` subcomponent is the only top-level child of the components specified above, and when the `Section` component has no props.

The following patterns are considered warnings:

```js
import {Card, Popover, Layout} from '@shopify/polaris';

<Card><Card.Section>Contents</Card.Section></Card>
<Popover><Popover.Section>Contents</Popover.Section></Popover>
<Layout><Layout.Section>Contents</Layout.Section></Layout>
```

The following patterns are not warnings:

```js
import {Card, Layout, Popover} from '@shopify/polaris';

<Card sectioned>Contents</Card>

<Card>
  <Card.Section subdued>Contents</Card.Section>
</Card>

<Layout>
  <Layout.AnnotatedSection></Layout.AnnotatedSection>
</Layout>

<Popover>
  <Popover.Section>One</Popover.Section>
  <Popover.Section>Two</Popover.Section>
</Popover>
```
