# React application organization

## Node

This section describes a sensible starting point for organizing a React application that supports server-side rendering.

## `/app`

### `/app/components`

TODO

### `/app/utilities`

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

If your component depends on getting some of its properties "filled" by the route, we recommend putting that logic in this component. While components can conceivably get details about URL params and other details from within their component, doing so separates the logic of setting up the routes from where that logic is relied upon. Given that none of this logic is type-safe in most routing libraries, it is a recipe for hard-to-track bugs, and violates our principle of preferring [explicit over automatic patterns](https://github.com/Shopify/web-foundation/blob/master/Principles/3%20-%20Explicit%20over%20automatic.md).

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

The `Prefetch` component is very much a sibling to the `Routes` component. It should describe any preloading behavior for the application, for example using the [`PrefetchRoute />` component from `@shopify/react-async`](https://github.com/Shopify/quilt/tree/master/packages/react-async#prefetchroute-and-prefetcher):

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
