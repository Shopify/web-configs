# Performance

## Table of contents

1. [Types of performance](#types-of-performance)
1. [Bundle splitting](#bundle-splitting)

## Types of performance

There are many angles to consider when discussing web performance. For this guide, we’ll consider three broad categories of performance concerns:

* **Load performance**: how long the application takes to be ready for use after a full page navigation/ refresh (for example, when typing command+R, or directly entering a URL in the address bar).
* **Navigation performance**: how long the application takes to navigate between discrete tasks (for example, when clicking on a link in a single page app).
* **Interaction performance**: how smoothly the application responds to user input (for example, when dragging a UI element, or revealing content hidden behind some disclosure UI).

Developers will not have unlimited time to invest in optimizing all three of these. In rare cases, a choice requires you to optimize one of these at the expense of another. In order to choose which to prioritize, you need to understand the priorities and usage patterns of your users. Below are examples of how we typically prioritize these types of performance for different applications:

### Complex web applications: Interaction > Navigation > Load

This type of application is characterized by long sessions per use, multiple routes, and active (as opposed to passive) participation from the user, such as Shopify Web.

In this case, it is most important that users can interact with the application as if it were a native desktop or mobile app. Since users will navigate between many pages, navigation should feel fluid, and resources should be preloaded for likely navigation when possible. Load performance is least prioritized because users infrequently perform full navigation within the app.

## Bundle splitting

In an app with only a few routes, it is typically fine to include all application code in a single bundle. Large apps, on the other hand, should split application code into more fine-grained bundles by feature. This makes it so that individual features or pages within the app have a cost (bundle size, cache invalidation, and execution time) that is proportionate to their size, not the size of the application.

The simplest form of code spitting is to split your app on route boundaries. This is a natural spitting point since two routes are never visible on the page at the same time. However, large pages should look for opportunities to split off code within the page as well. Any parts of the page that have a large bundle size or execution time are excellent candidates, as are components that are only used occasionally or are initially hidden (modals, popovers, etc).

If you are using React, please consult our [React performance guide](./React/Performance.md#asynchronous-component-loading) for instructions on how to asynchronously load components. 

### Foundation

Once an application has been split up, you should keep a close eye on the foundational parts of the app. These parts will always be present, and their size and execution time cost will be a constant that sets the lower bound on how fast pages can be. We recommend imposing the following constraints on the this code:

* It uses no utility libraries such as lodash, opting for native language features or minimal hand-coded versions of these utilities instead.
* It only bootstraps dependencies of the application that are used by over 90% of features in the app. For example, Shopify Web bootstraps react, Apollo, and our i18n library, since all parts of the app need these libraries, but leaves it to the individual features to manually bring in tools like Reportify or Redux based on their actual use.
* It splits out every feature that is not immediately visible, and only initializes them when the browser is idle.
* It takes particular care to opt out of re-rendering whenever possible, since this can often result in a very large amount of JavaScript execution.
* It never includes any non-foundational code. Everything from pages to their loading states should be asynchronously loaded to prevent accidentally bringing in more code than intended.
