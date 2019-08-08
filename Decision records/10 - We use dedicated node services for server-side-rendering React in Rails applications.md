# We use dedicated node services for server-side-rendering React in Rails applications

## Date

July 19th 2019

## Contributors

- Mathew Allen
- Matthew Seccafien
- Michelle Chen
- Gord Pearson

## Summary

We use a node server living in the same repository but deployed as a separate service to provide server rendering for React components in our Rails based React applications.

## Problem space

[Server-side-rendering](https://reactjs.org/docs/react-dom-server.html) (SSR) is a performance optimization available to React applications aimed at bringing their time-to-first-byte and first contentful paint time down, and at allaying some of the issues associated with conventional single-page-applications. Since rendering React applications on the server necessarily requires a JavaScript runtime, the server-side-rendering is done in Node.

SSR is further complicated by the need to have the client side app rehydrate using the same state as the server render. This is usually accomplished with serialization of state on the server and deserialization of state in the client entry point. In our projects we have historically used [`@shopify/react-html`](https://github.com/Shopify/quilt/tree/master/packages/react-html) for managing serializations to good effect, so support for the patterns it uses is ideal.

## Prior Art #1 - client-side-rendering

Many applications opt out of SSR entirely and simply render a client-side React application from a Rails view. Since Rails ultimately controls all server-side concerns backend developers are able to stick to the stack they know best, and no inter-service communication must be managed.

Unfortunately, this approach eschews the performance (and SEO if applicable) benefits of SSR, making it less than ideal in a world where performance is increasingly important.

## Prior Art #2 - separate React service

Our largest React applications are totally independent node applications which interact with Rails entirely as an API server. They typically handle their own authentication, metrics and API proxying concerns.

This strategy allows them the maximimum amount of control over their behaviour and ideal performance characteristics, but involves significant increases in complexity. Complexity becomes especially high in cases where the node server must share a domain with conventionally rendered Rails views, as both services must become aware of when to yield to the other, and complex NGINX incantations become entwined with the way the services communicate.

## Prior Art #3 - embedded JS interpreters

Libraries such as [react_on_rails](https://github.com/shakacode/react_on_rails) and [react-rails](https://github.com/reactjs/react-rails#server-side-rendering) exist to provide mechanisms to render react by executing JavaScript directly from Ruby, using tools such as `ExecJS`. These can provide a simple and familiar API for Rails developers integrating React into their applications while providing similar levels of control to the Rails server as a straightforward client-side-rendering approach. They also offer similar performance benefits to server rendering using node.

Unfortunately, these libraries have limits around how much of the node/React ecosystem they support, often being built around one or more common open-source libraries with limited support for rehydrating other components. They also struggle to cope with the impedance mismatch between asynchronous event-based JavaScript and the synchronous threaded nature of Ruby, making debugging especially difficult. Another concern comes with the performance characteristics of embedding javascript execution inside of Ruby, and the requirement for configuration of the execution environment living inside of application code.

The limitations of this approach are severe enough that those who have used it at Shopify have stated they would not use it again, and at least one of the common off-the-shelf libraries actually switching strategy to a separate node server through their [paid pro plan](https://github.com/reactjs/react-rails#server-side-rendering).

## Prior Art #4 - Hypernova

Airbnb maintains a project called [`HyperNova`](https://github.com/airbnb/hypernova) which provides a simple API for building a server-rendering enabled react application, as well as a companion Ruby library for connecting to a Rails application.

Unfortunately, [`HyperNova`](https://github.com/airbnb/hypernova) has its own opinionated runtime which precludes the use of arbitrary serialization, and instead focuses on serializing state for specific libraries, as well as server-provided props for the top-level component. In addition, Airbnb itself has moved away from [`HyperNova`](https://github.com/airbnb/hypernova) citing concerns with having to write process supervisor trees in application code for larger projects.

## Solution

We maintain a JavaScript library, [`@shopify/react-server`](https://github.com/Shopify/quilt/tree/master/packages/react-server), built from the ground up to support [`@shopify/react-html`](https://github.com/Shopify/quilt/tree/master/packages/react-html) consuming React applications. On the Rails side we provide [`quilt_rails`]https://github.com/Shopify/quilt/tree/master/gems/quilt_rails) to proxy requests to the rendering service.

By proxying requests to Node in this way we allow both our React and Rails patterns to remain consistent. Rails developers continue to handle authentication, API requests, and other server-side concerns the same way they would in a conventional Rails application, and React developers are able to build applications the same way that they would in a totally standalone node app. We use Shopify Build, Cloud Platform and ServicesDB to provide a template for shipping the Rails+React app as a single deploy from the same repo, while still allowing the two services to be scaled and monitored independentally.

This solution is actually quite similar to [`HyperNova`](https://github.com/airbnb/hypernova), but since our solution is built from the ground up around letting the application code define its own serialization / deserialization needs and make use of our service scaling infrastructure, we can avoid the problems they encountered.

### Supporting documents
- [Rails+React SSR exploration](https://docs.google.com/document/d/1gsCN0z9t89zWpUuqp6rWa8wJi6HrN6_FJMPyGz-U34A/edit#heading=h.ketzgarmm35m)
- [SSR with ExecJS experiments](https://docs.google.com/document/d/1XQbkubnP7trxEf-43ZDG7flZj1dUCg2fuXp1bmUlYRw/edit#heading=h.q92vciekm7ds)
