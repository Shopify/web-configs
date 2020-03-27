# Things that need work

The guidance in this repo is far from perfect. There are many patterns that we currently use that either completely violate our principles, or that have bad developer ergonomics. The list below documents some of these "bad parts", in no particular order. Hopefully, it will shrink over time, and if you are ever looking for a way to push UI development forward at Shopify, this is a great place to start.

- Having no good patterns for avoiding the "god" component problem (where the top-level component for a route accumulates the majority of the application logic).
- Having no "default" option for visual regression, performance, or end-to-end tests.
- Having to import so many Shopify libraries for any given app.
- Having no solid patterns for how to write or test a Node.js application.
- The significant gap between the libraries for production visibility in Node.js as compared to Rails.
- Missing libraries for basic application constructs in Node.js (loggers, error handlers, etc).
- Missing libraries and documentation for building a Node.js app on Shopify Cloud.
- Missing tools for generating components and complete applications that conform to our best practices.
- Insufficient documentation on best practices for state management.
- Insufficient documentation on best practices for component design.
- Our approach to styling. Sass is not aging gracefully, and we have not opened a path for people to experiment with newer CSS techniques.
- Lack of approachability for contibuting to some libraries, particularly sewing kit.
- Difficulty in implementing code-split components that still support server rendering.
- Having no clear pattern for building Rails applications that can coexist with (and server render) our React applications.
- The boilerplate for attaching translations to components using `@shopify/react-i18n`, particularly when using dynamic imports.
- GraphQL mutations in general. Some specifically bad parts: having to write error-prone `update` functions, and the necessity to collocate them with any queries they may impact.
