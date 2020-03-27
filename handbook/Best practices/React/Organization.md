# React project organization

## Node

This section describes a sensible starting point for organizing a React application that supports server-side rendering.

## `/app`

### `/app/components` and `<Component>/components`

TODO

### `/app/hooks` and `<Component>/hooks`

> **Note:** because hooks are so new, we haven’t been able to test these recommendations as much as we have for other parts of project structure. If you are trying to figure out where a hook should go, you should come discuss it with us in the `#web-foundation-tech` slack channel.

[React Hooks](https://reactjs.org/docs/hooks-overview.html) provide an alternative form of composition that can be extremely useful for sharing logic in an application. Because of this important role, hooks should generally be given their own top-level directory; anywhere you might have a `components` directory for nested components, you can also place a `hooks` directory for nested hooks (including at the root of the project). You should import from the subdirectory of `hooks`, like you would for `utilities`:

```tsx
// bad
import {useProductForm} from './hooks';

// good
import {useProductForm} from './hooks/form';
```

We recommend having a dedicated subdirectory for each hook "type", rather than having individual files. This makes it easy to introduce a test directory if your hook requires tests. File and directory names should be in kebab case to clearly differentiate them from components. Also unlike components, we recommend using named exports, as you are more likely to export multiple hooks for a particular "theme" than you are for components.

```
/app/hooks/form/index.ts
/app/hooks/form/form.ts
/app/hooks/form/tests/form.test.ts
```

The example above works very well for hook-only situations, but does not work well when you also need to export context or other components alongside the hook. In cases like this, we prefer collocation of the files along the "theme" of the files, not based on the values exported from them (an application of [isolation over integration](../../Principles/4%20-%20Isolation%20over%20integration.md)). If you have code like this, follow the [context-based library organization](#context-based-library), but placed in a nested `utilities` directory:

```
/app/components/MyComponent/utilities/my-feature/index.ts
/app/components/MyComponent/utilities/my-feature/context.ts
/app/components/MyComponent/utilities/my-feature/object.ts
/app/components/MyComponent/utilities/my-feature/hooks.ts
/app/components/MyComponent/utilities/my-feature/WithObject.tsx
```

```tsx
// In application code, we still just import from the utility directory,
// but we now have a single place that houses the necessary context and
// the "consumers" of that context

import {
  MyFeatureContext,
  MyFeatureDomainObject,
  useMyFeature,
} from './utilities/my-feature';

function Parent() {
  return (
    <MyFeatureContext.Provider value={new MyFeatureDomainObject()}>
      {children}
    </MyFeatureContext.Provider>
  );
}

function Child() {
  const myFeature = useMyFeature();
  return null;
}
```

### `/app/utilities` and `<Component>/utilities`

TODO

### `/app/sections` or `/app/features`

This directory is similar `/app/components`; it should export only named exports, and all exports are React components. However, the nature of these components is special: they should represent discrete "features" within the app. In general, this will mean that these components should be the top-level components rendered for a given route in your application.

The top-level `index` file in this directory should only re-export components. To actually create a routing scheme, you should add references to these components in [`app/foundation/Routes`](#appfoundationroutes).

While it may seem wasteful to have this directory when the `/app/components` directory already exists, doing so has some nice benefits. It offers a clear "split point" in the application, where we can "focus" on only a subset of features (as we do for [sewing kit’s `--focus` flag](https://github.com/Shopify/sewing-kit/blob/master/docs/commands/dev.md#focus)).

```
/app/sections/Home/Home.tsx
/app/sections/Home/index.ts // re-exports ./Home.tsx
/app/sections/Listing/Listing.tsx
/app/sections/Listing/index.ts // re-exports ./Listing.tsx
/app/sections/index.ts // re-exports ./Home and ./Listing
```

If your application has more than a few pages, this directory should be split into subdirectories that group like features together. For example, Shopify Web contains directories for `Products`, `Discounts`, and more. If some features have only a single component representing them, you can mix this approach with the one described for simpler cases above.

This provides an additional directory to add a `components` folder, which can contain components that related to all features of a particular type (for example, components used by many pages related to products, but not used elsewhere in the app).

This intermediate directory should have top level folders for each feature in that group, and should simply re-export the React components.

```
/app/sections/Home/Home.tsx // Simple case, no nesting
/app/sections/Home/index.ts // re-exports ./Home.tsx

/app/sections/Products/components // shared components for all Product components
/app/sections/Products/ProductList/ProductList.tsx
/app/sections/Products/ProductList/index.ts // re-exports ./ProductList.tsx
/app/sections/Products/ProductDetails/ProductDetails.tsx
/app/sections/Products/ProductDetails/index.ts // re-exports ./ProductDetails.tsx
/app/sections/Products/index.ts // re-exports ./ProductList and ./ProductDetails

/app/sections/index.ts // re-exports ./Home and ./Products
```

### `/app/foundation`

This directory contains components that are only ever used once, usually to create the core infrastructure for the application. This can include everything from providers for app-wide features like i18n or GraphQL, tracking/ analytics, and more. These components should [limit their use of dependencies](../Performance.md#foundation), since they are typically included in the main bundle for an application.

In this directory, you should include a few top-level component directories. These directories represent the parts of the foundation that are considered part of "feature space"; that is, they will need to be adjusted as features are added or removed from the application. When these components need to be split up, they can have their own nested `components` directory, as we do for "regular" components elsewhere in the application.

#### `/app/foundation/App`

TODO

#### `/app/foundation/Link`

TODO

#### `/app/foundation/Routes`

You should use the `foundation/Routes` component to establish the routing scheme for your application using the components exported from [`/app/sections`/ `/app/features`](#appsections-or-appfeatures) and your routing library of choice. For simple applications, you can do this all in one component:

```tsx
// /app/foundation/Routes/Routes.tsx

import * as React from 'react';
import {Switch, Route} from 'react-router';

import {Home, Listing} from 'features';
import {NotFound} from 'components';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/listing" exact render={() => <Listing />} />
      <Route render={() => <NotFound />} />
    </Switch>
  )
}
```

If your component depends on getting some of its properties "filled" by the route, we recommend putting that logic in this component. While components can conceivably get details about URL params and other details from within their component, doing so separates the logic of setting up the routes from where that logic is relied upon. Given that none of this logic is type-safe in most routing libraries, it is a recipe for hard-to-track bugs, and violates our principle of preferring [explicit over automatic patterns](../../Principles/3%20-%20Explicit%20over%20automatic.md).

```tsx
// /app/foundation/Routes/Routes.tsx

import * as React from 'react';
import {Switch, Route} from 'react-router';

import {Home, Product} from 'features';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route
        path="/product/:id"
        exact
        render={({match: {params: {id}}}) => <Product id={id} />}
      />
    </Switch>
  )
}
```

In more complex applications, having all of this logic in one component can become overwhelming. Instead, add additional subcomponents to this route that describe "route groups":

```tsx
// /app/foundation/Routes/components/Products/Products.tsx

import * as React from 'react';
import {Switch, Route} from 'react-router';

import {ProductDetails, ProductList} from 'features';

export default function Products() {
  return (
    <Switch>
      <Route path="/products" exact render={() => <ProductList />} />
      <Route path="/products/create" exact render={() => <ProductDetails />} />
      <Route
        path="/products/:id"
        exact
        render={({match: {params: {id}}}) => <ProductDetails id={id} />}
      />
    </Switch>
  )
}

// /app/foundation/Routes/Routes.tsx

import * as React from 'react';
import {Switch, Route} from 'react-router';

import {Home} from 'features';
import {Products} from './components';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/products" render={() => <Products />} />
    </Switch>
  )
}
```

#### `/app/foundation/Prefetch`

The `Prefetch` component is very much a sibling to the `Routes` component. It should describe any preloading behavior for the application, for example using the [`<PrefetchRoute />` component from `@shopify/react-async`](https://github.com/Shopify/quilt/tree/master/packages/react-async#prefetchroute-and-prefetcher):

```tsx
// /app/foundation/Routes/Routes.tsx

import * as React from 'react';
import {PrefetchRoute, Prefetcher} from '@shopify/react-async';

import {Home, Listing} from 'features';
import {NotFound} from 'components';

export default function Routes() {
  return (
    <>
      <Prefetcher />
      <PrefetchRoute path="/" render={() => <Home.Prefetch />} />
      <PrefetchRoute path="/listing" render={() => <Listing.Prefetch />} />
    </>
  )
}
```

As with the `Routes` component, more complex prefetching logic for a discrete group of routes can be organized into dedicated components in `/app/foundation/Prefetch/components`.

## Libraries

This section discusses a few common "shapes" of libraries we write, and how to structure them:

### Context-based library

We often have libraries that supply a context object, some kind of domain model (a manager, a subscription, etc), and a set of hooks and components for accessing or using that model. `@shopify/react-i18n`, `@shopify/react-html`, and many other libraries fit this definition.

In these kinds of projects, we usually split the different parts (context, model, components, hooks) into their own files. By default, we always place hooks in a `hooks.ts` file, or in a `hooks` directory if there are too many to comfortably fit in a single file. Like an application, components always get their own files. A typical project with this shape would look like this:

```
# Re-exports the public API of the library
index.ts

# Many hooks depend on context. If so, place the context in a distinct file,
# since other files often also depend on it
context.ts

# If you are providing a more complex object through context, put that object
# in its own file, too. A common case is a "manager" class, which has methods
# that consumers call.
object.ts / manager.ts / whatever describes the context value

# Any hooks should live in their own file, or in a directory if there are many
# hooks, or the hooks are very loosely related. If you automatically generate
# decorators/ render prop components from your hooks, they can also be exported
# here.
hooks.ts

# Similar to the above, any decorators should live in a dedicated file. These
# should now be treated as legacy features, as we prefer hooks for function
# components, and render props for class components
decorators.ts

# If you manually create render prop components, place those in their own
# component files
WithFeature.tsx
```
