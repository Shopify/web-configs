# Declarative over imperative APIs

Imperative APIs are often a natural choice for developers who have spent a lot of time in C-style languages. The primitives of most popular programming languages are very easy to get started with writing highly imperative code. However, building imperative APIs can lead to much more error prone systems, more difficult to read code, and it being harder to discern the intention from the implementation for a given piece of logic.

We prefer to write code that exposes a declarative API than an imperative API. A declarative API will let you define what results you would like to see, rather than the way you want them to happen. This type of API leads to simpler code with a higher degree of readability, maintainability, and composability. Where imperative code must exist we often counsel using more declarative and immutable styles within it.

Below are a few examples of decisions that demonstrate this principle, some at the highest level of technology choice, and some at the smallest level of individual function implementations:

* We prefer foundational technologies that are declarative, such as JSX and GraphQL, rather than imperative DOM manipulation and REST calls. On the build tooling side we choose the declarative Webpack over more imperative tools like Gulp.

* We prefer to render a component that encapsulates a series of imperative DOM actions, such as `<EventListener />` or `<ScrollLock />`, than to expose classes or functions that one would call directly.

* We prefer to use or build declarative APIs, such as `<FormState />` or `<JobPoller />` on top of complex state heavy operations such as managing form state, handling graphql requests and caching, and tracking long running jobs.

* We prefer to expose server modules as declarative middleware functions rather than as stateful imperative classes.

* We prefer to write stateless functional components wherever it is feasible.

* We prefer to express program logic through a series of `const` assignments rather than mutating a single variable.

* We prefer to express list and object manipulation, through functional constructs (map / reduce) than to build up a new list through a for loop.

## Conflicts

Sometimes it's correct to choose the more imperative path on a problem. This usually happens when the declarative path to a solution negatively effects user experience. In these cases the best path forward is to, as always, think of the user first. We should always write the code in the way that best addresses the problems our users face.

 Usually these spots are relatively isolated and can be abstracted behind a declarative API for future use, or they speak to a missing component or tool that would let us accomplish them more gracefully in the long term. This doesn't always have to be addressed immediately, or even at all,but it can be a good way to look at particularly ugly pieces of code.
