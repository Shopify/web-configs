# User over team over self

The most important needs to consider are always those of the end user of your code. In most cases, this will be the merchant, but it may also be other developers or Shopifolk, depending on your project. Whenever there is ambiguity about the right path to take, you should take the path that provides the best experience for the end user.

When a choice does not impact the end user, or where multiple choices have negligible impact on the user experience, choose the option that works best for the team, rather than the option that works best for the developer doing the work. Optimize for reducing the impact of any given developer moving on to other projects, and minimize the impact of individual preferences on the end product.

This is the one rule to always remember, as all other rules end up being more specific applications of this prioritization.

Below are a few examples of decisions that demonstrate this principle:

* "Quality" encompasses many things, and some should be dropped more readily than others. Accessibility, performance, and good behaviour across different devices and input methods (mouse, keyboard, touch, mobile, etc) should be the last things to drop because they directly impact the user. Testing and documentation should be next to last to drop as they directly impact the team’s ability to understand and maintain the codebase. Bikeshedding is the first thing to drop, as it is often a reflection of personal taste.

* Follow conventions for naming, style, documentation, code structure, and organization, even if they do not match your own personal style.

* Adopt modern features that make the user experience better, even if they add tooling complexity (service workers, split bundles, etc). For features that require polyfills, make sure to measure the performance impact when making the decision.

* Adopt modern features that make code more readable, even if there is an initial education burden (async/ await, decorators, etc).

* We should only drop a browser when it allows us to greatly simplify code, tooling, or testing, *and* if the browser has extremely minimal use. We might drop a browser earlier if it enables some user-facing performance optimizations, such as the removal of polyfills.

* Prefer tools that the team (including the members of the team yet to be hired) are familiar with, rather than sticking to a technology that a few technical leaders know extremely well.

* Optimize for things like editor integrations (for instance, by having different files for styles, GraphQL, etc), as this lowers the barrier to entry for new developers on the team.
