# Isolation over integration

Integrated systems are often an appealing way to write simple looking code, and so are often leaned on when addressing complex problems. However, systems where the pieces are deeply connected are often much harder to understand and debug, and make it difficult to extract common functionality for use in a related problem.

In most cases, we prefer to write code that exists independently within the codebase, exposing only a thoughtful public API for use by other developers. This isolation makes code easier to test, reuse, refactor, and remove, without any impact on the rest of the codebase.

Below are a few examples of decisions that demonstrate this principle:

* We prefer composition over inheritance, particularly when the inheritance chain is more than two levels deep, or when overwritten methods are needed to remove or slightly modify behaviour of the base class (see the [refused bequest code smell](https://refactoring.guru/smells/refused-bequest)).

* We collocate everything needed for a component in a single place, including tests, logic, styling, markup, and assets.

* Components never apply layout styles to themselves (that is, properties like `margin`, `position`, or `transform` on the "root" of a component), and instead apply those layout styles only to children that the component owns.

* We prefer forking components or copying styles over adding so much API surface area to a component that it becomes unusable, or mutating it such that it has a distinct connection to specific use cases/ pages on which it appears.

* Components that handle purely presentational roles are separate from components that are connected to the business logic of the application. This is most true of our Polaris components, but can also be true of application-specific components as well; in general, any connection to application-level constructs (GraphQL, shared store, etc) should be held by components that then render "dumb" components.

* We never subclass a custom component; instead, we build components that wrap the component in question and use its public API.

* Components higher on the page handle progressively less visual styling. "Leaf" components typically handle the majority of the styling, with more complex components handling only limited layout of those leaf components (if no existing component can accomplish the desired layout).
