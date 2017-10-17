# Community over ownership

In most cases, the value obtained from using well-supported community projects far outweighs the benefit of building something ourselves. Documentation, community, speed of improvement, coverage of edge cases, size of hiring pool, and integration with other tools are extremely expensive to build ourselves, and are often ignored entirely in home-grown solutions. These are usually very well done by community projects, particularly for popular libraries.

Some caution is warranted in applying this principle. It is important to remember the first principle: we place the user above ourselves. This means that, if no external library provides the user experience we desire, or if a library has such a significant performance impact that it would negatively affect user experience, we should build our own, more tailored solution instead.

We also have to make sure to avoid [cargo culting](https://en.wikipedia.org/wiki/Cargo_cult_programming) that can spring up around popular tools; the patterns and conventions we develop should make sense in the context of the community, but need to address the real problems faced at Shopify first and foremost. Be cognizant of community standards, but do not defer to them arbitrarily.

Below are a few examples of decisions that demonstrate this principle:

* We avoid using esoteric or non-standard languge features that would create a significant barrier to entry for new developers who are familiar with community standards.

* We prefer a federated model for the core pieces of our architecture (foundation, Polaris, etc), where members from many teams across Shopify can provide input and make changes.

* We prefer a well-supported default used by most projects over artisanal solutions for every project, particularly when all available options add some level of complexity. This is best demonstrated by Sewing Kit, which takes a set of tools we believe to be best-in-class and makes them trivially easy to use.

## Conflicts between community and minimal API

There can be a conflict between this principle a particular extension of the "API over implementation" principle:

> Strive to make the default behaviour completely automatic, and acceptable variations on that behaviour extremely easy to dictate.

Community libraries often need to be extremely broad in the API they expose in order to address the many use cases they support. However, our use of that library is often restricted to a particular set of features. For example, we may use a charting library, but we want to expose simple, easy-to-use charting components for use by other developers and teams. In these cases, this application of the "API over implementation" principle is important to follow:

> Unless it is a foundational part of the stack, try to avoid exposure of exactly what tool/ community package is in use to accomplish a feature. Always wrap components pulled in as dependencies to expose the API we explicitly want to support.

Doing so gives us many advantages: a feature that is modeled to the domain of Shopify, continuous improvements to the underlying library, and easier refactoring should we find a different tool to be better for our needs.
