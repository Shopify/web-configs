# Explicit over automatic

We prefer explicit solutions over "clean" solutions that require a lot of implicit understanding. New developers being onboarded, existing developers switching projects, and other developers simply trying to get an understanding of a new area will always benefit from a solution that can be followed explicitly between files, even if that solution is more verbose than alternatives. The main beneficiary of more automatic/ "magical" is the developer who wrote the code initially, but since we read code much more than we write it is important not to optimize exclusively for the author.

Below are a few examples of decisions that demonstrate this principle:

* We prefer more statically analyzable features, such as native JavaScript imports, as these lead to better tooling and provide an explicit path for an uninitiated reader to understand the code. Avoid globals and other features that are not as easily analyzed by tooling.

* We use explicit, self-documenting names for variables, functions, types, and classes, even when these are verbose.

* We accept the additional code (and occasional unnecessary type check) of TypeScript as it provides compile-time correctness checks and editor integration showing future developers how to use our code.

* We avoid relying on the CSS cascade, and instead try to explicitly provide styles at a component level.

* We prefer more verbose class naming conventions. Using BEM- or SUIT-style naming conventions allows the CSS to stand on its own (as you can see the structure of the component in the way the classes are named), and makes it so you can understand what different nodes in the markup are responsible for (by naming them in the context of the component, rather than in the context of the styles they provide).

* Don’t construct class names programatically. Doing so makes it hard for future developers to find what a particular class does.

* Avoid deep class hierarchies that hide the implementation of particular methods somewhere in a superclass.

## Conflicts between explicitness and minimal API

There is a natural conflict between this principle a particular extension of the "API over implementation" principle:

> Strive to make the default behaviour completely automatic, and acceptable variations on that behaviour extremely easy to dictate.

This often comes for things like accessibility attributes on components: there is a struggle beyween exposing significant API to set these attributes or trying to make the "correct" behaviour work automatically. As a general rule, prefer the automatic API in cases like these, as they provide the most certainty that all UI meets our quality standards.

However, if you can’t provide the correct behaviour automatically in 100% of cases, you are better off exposing the necessary API for consumers to set it manually. Exposing no API and getting the behaviour right is ideal, but it is better to provide a larger, more explicit API than to occasionally provide the incorrect behaviour, particularly when that behaviour has an impact on the end user.
