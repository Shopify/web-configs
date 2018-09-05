# We use `List` and `Details` to describe index- and show-style route components

## Date

July 30, 2018

## Contributors

* Chris Sauvé
* Mallory Allen
* Tzvi Melamed
* Ismail Syed
* Gord Pearson
* Matt Seccafien

## Summary

Many apps will have components that represent discrete routes in the application. These routes often represent traditional CRUD-style operations on a resource. In these cases, we use the terms "Details" (for a single resource) and "List" (for a list of resources) to name these routes.

## History

In Shopify Web, we initially named our "route" components after their Rails equivalents. For a resource like products, we had a `ProductIndex` component (for `/admin/products`), `ProductShow` (for `/admin/products/:id`), and `ProductCreate` (for `/admin/products/new`). These matched up the default naming style for Rails actions. 

Eventually, there was so much duplication between `ProductShow` and `ProductCreate` that the two were merged into a single component, still named `ProductShow`.

This same naming convention was copied to many other sections and apps that had similar [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)-based resources.

## Decision

The `Show`/ `Create`/ `Index` postfix naming has one major benefit: it matches the Rails convention. This makes it simpler for Rails-knowledgeable developers to apply their existing mental model to the React application, and makes a conversion from a Rails codebase to a React one even simpler.

However, there are numerous issues with this approach:

* It does not necessarily line up with the way the page interacts with the GraphQL API (there is no CRUD in GraphQL)
* It feels restrictive in a world outside of Rails, where there is no built-in assumptions about the structure of routes around a resource
* It does not do a good job of indicating the responsibility of a merged show/ create component

We considered the following alternative naming for the list/ detail pages:

* `ResourceList` and `Resource`: `Resource` is overly generic and can easily conflict with other identifiers
* `Resources` and `Resource`: same as the above, but with the added issue of overly similar names

We feel that `ResourceList` and `ResourceDetails` provides the best balance as default naming. The names are sufficiently unique and descriptive, and align closely with how platforms like iOS refer to similar concepts ("master/ detail"). `ResourceList` does feel overly prescriptive on how the page should look, rather than its purpose, but we could not come up with better alternatives.

Note that this decision only applies to resource-based pages organized in traditional CRUD-style URLs. Other pages should use names that represent their purpose, not attempt to fit them within this `Details`/ `List` naming convention. For example, the main index page for the admin would be named `Home`, not `HomeIndex` or `HomeDetails`.
