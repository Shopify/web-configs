# We use dedicated node services for server-side-rendering React in Rails applications

## Date

July 19th 2019

## Contributors

- Mathew Allen
- Matthew Seccafien
- Michelle Chen

## Summary

We use 'sidecar' node server living in the same repository but deployed as separate services to provide server rendering in our Rails based React applications.

## Problem space

[Server-side-rendering](https://reactjs.org/docs/react-dom-server.html) (SSR) is a performance optimization available to React applications aimed at bringing their time-to-first-byte and first contentful paint time down, and at allaying some of the issues associated with conventional single-page-applications. Since rendering React applications on the server necessarily requires a JavaScript runtime, the server-side-rendering is done in Node.

SSR is further complicated by the need to have the client side app rehydrate using the same state as the server render. This is usually accomplished with serialization of state on the server and deserialization of state in the client entry point. In our projects we have historically used [`@shopify/react-html`](https://github.com/Shopify/quilt/tree/master/packages/react-html) for managing serializations to good effect, so support for the patterns it uses is ideal.

Since a JavaScript runtime in some capacity is required many solutions involve a separate node server. Our largest React applications are totally independent node apps which interact with Rails entirely as an API server, and handle their own authentication, metrics and API proxying concerns. On the other hand other small applications opt out of SSR entirely and simply render a client-side React application from a Rails view.

Both of these solutions have problems, with the prior adding more complexity at the server layer and requiring devs to maintain a separate server built on totally different technologies, and the latter losing out on performance and accessibility gains from SSR.

## Solution

We maintain a JavaScript library, [`@shopify/react-server`](https://github.com/Shopify/quilt/tree/master/packages/react-server), built from the ground up to support [`@shopify/react-html`](https://github.com/Shopify/quilt/tree/master/packages/react-html) consuming React applications. On the Rails side we provide [`insert-gem-name`](https://github.com/Shopify/sewing-kit) to proxy requests to the rendering service. By proxying requests to Node in this way we allow both our React and Rails patterns to remain consistent, with Rails developers continuing to handle authentication, API requests, and other server-side concerns the same way they would in a conventional Rails application, and React developers being able to build applications the same way that they would in a totally standalone node app. We use Shopify Build, Cloud Platform and ServicesDB to provide a template for shipping the Rails+React app as a single deploy from the same repo, while still allowing the two services to be scaled and monitored independentally.

Our solution is actually quite similar to Airbnb's [`HyperNova`](https://github.com/airbnb/hypernova), however that library has its own opinionated runtime associated which precludes the use of arbitrary serialization, and instead focuses on serializing state for specific libraries, as well as server-provided props for the top-level component. In addition, Airbnb itself has moved away from [`HyperNova`](https://github.com/airbnb/hypernova) citing concerns with having to write process supervisor trees in application code for larger projects. Since our solution is built from the ground up around letting the application code define its own serialization / deserialization needs, and make use of our service scaling infrastructure, we can avoid the problems they encountered.

Off-the-shelf solutions also exist for rendering react code from ERB files by embedding an ExecJS engine inside of Rails itself, forgoing Node entirely. The two most prominent of these are [`react-on-rails`](https://github.com/shakacode/react_on_rails) and [`react-rails`](https://github.com/reactjs/react-rails). Unfortunately, they have limited support for custom serialization and only specifically integrate with certain off-the-shelf libraries (eg. Redux, react-intl). Some teams at Shopify have attempted to use these but had issues with performance, scalability, and debugging flows. In some cases 'pro' versions of these tools are offered that support a wider array of features and increased performance, but seem to be more of a bespoke consultancy, and are based on separate Node servers anyway. In a previous investigation, we explored building our own ExecJS based server rendering service. In doing so we encountered similar issues around debugging and performance, as well as overcoming the mismatch between Ruby's threaded synchronous model and Node's asynchronous reactor model.

### Supporting documents
- [Rails+React SSR exploration](https://docs.google.com/document/d/1gsCN0z9t89zWpUuqp6rWa8wJi6HrN6_FJMPyGz-U34A/edit#heading=h.ketzgarmm35m)
-[SSR with ExecJS experiments](https://docs.google.com/document/d/1XQbkubnP7trxEf-43ZDG7flZj1dUCg2fuXp1bmUlYRw/edit#heading=h.q92vciekm7ds)
