# Declarative over imperative

Imperative code is often a natural choice for developers who have spent a lot of time in C-style languages. The primitives of most programming languages make it easy to write imperative code. However, imperative code can lead to more error prone systems and more difficult to read code. Imperative code can make it difficult to discern the intention from the implementation for a given piece of logic.

We prefer to write declarative code. This style allows us to define the relationships between data and UI to describe what results we would like to see, rather than the way we want them to happen. Declarative code is generally more concise, readable and composable.

Below are a few examples of decisions that demonstrate this principle:

* We chose React over more traditional imperative DOM manipulation, or technologies like web components, for its declarative API.

* We chose GraphQL over REST for its declarative query language and the declarative components provided by its client libraries.

* We prefer to render a component that encapsulates a series of imperative DOM actions, such as `<EventListener />` or `<ScrollLock />`, than to expose classes or functions that one would call directly.

* We prefer to use declarative APIs on top of complex state heavy operations. Examples include managing form state with `<FormState />`, handling graphql requests and caching with `apollo-client`, and tracking long running jobs with `<JobPoller />`.

* We prefer to build declarative components to express HTTP response behavior than to write imperative server code. For example; we built `<Redirect />` to replace imperative calls to `location.assign`.

* We prefer to build components as pure functions when we can avoid writing a class. Classes can often result in more imperative code since they encourage manipulation of instance state.

* We prefer declarative decorators for enhancing the behavior of class methods, such as `@autobind` or `@memoize`, over imperatively overwriting fields with wrapped versions or writing memoization logic by hand.

* We prefer to express program logic through a series of `const` assignments rather than mutating a single variable.

* We prefer to express list and object manipulation through functional constructs (map/filter/reduce) rather than build up a new list through imperative looping.

## Conflicts

Sometimes it's correct to choose the more imperative path on a problem. This usually happens when the declarative path to a solution negatively affects user experience. In these cases the best path forward is to, as always, think of the user first. We should always write the code in the way that best addresses the problems our users face.

 Usually these spots are relatively isolated and can be abstracted behind a declarative API for future use, or they speak to a missing component or tool that would let us accomplish them more gracefully in the long term. This doesn't always have to be addressed immediately, or even at all, but it can be a good way to look at particularly ugly pieces of code.
