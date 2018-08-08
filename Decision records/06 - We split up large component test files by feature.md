# We split up large component test files by feature

## Date

July 30, 2018

## Contributors

* Chris Sauvé
* Mallory Allen
* Tzvi Melamed
* Ismail Syed
* Gord Pearson
* Matt Seccafien

## Summary

When a test file for a component grows too large, it should split into several sibling test files, each covering a feature of the larger component.

## History

In Shopify Web, some of our components have grown extremely large, despite good separation of discrete logical areas into separate subcomponents. These components are usually those that represent a "page", and are often needed because of the need to collocate form data and/ or GraphQL handling.

At the time of this decision, the largest of these components had test files anywhere from 3000–4500 lines long. Based on the complexity of other pages in the admin, we anticipate these not to be the largest test files in the app. The size of these files causes tooling like VSCode’s auto-formatting/ linting highlights not to function correctly, make navigating the file very difficult, and usually require a developer to focus a part of the test file to work on tests iteratively.

## Decision

Developer experience is a higher priority than technical purity, so we have decided these test files need to be split. Our existing directory structure can handle this fairly gracefully; a `Component/tests` directory already contains a single test file for the component (alongside directories for things like fixtures), so collocating all of the split test files in this directory is the natural next step.

There are different options for how we could split these files, though. We considered two main alternatives:

* By the "setup state" of the component. For example, all tests that cover the "empty state" case of the component under test would be grouped together.
* By feature. For example, all tests relating to SEO on a product would be grouped together.

Grouping the tests be their initial state makes it simpler to get the component under test in the right starting state, as every test in a given file will have nearly identical setup steps. This reduces the overhead of finding ways to share the utilities needed to get a component into this state across test files. However, it splits up tests for a feature across multiple test files, as you would need to check how the parts of a feature respond to the different states the component can start in.

Grouping the tests by feature essentially takes the inverse approach; all tests covering a feature are collocated together, at the cost of having many different initial states for those tests. It may also not always scale well, when most of the complexity of a component is in service of a single feature. However, we believe this form of test splitting is preferable because it does match well to how a component itself is broken down; a feature is often largely handled by a subcomponent, so this split also allows us to collocate most tests related to the subcomponent in charge of that UI (this maps nicely to the way we have currently nested `describe` blocks for components). This splitting also gives us a more natural place to store tests that do not really have an "initial state", such as functionality that runs on mount independent of the state of the component.

Note that "feature", as it used above, should be considered as a rough proxy for a user flow. "Saving" is not a feature, but is instead a test that needs to be added for every feature (for example, `it can save the new SEO title of a product` would be a test of the `seo` feature of a product page component).

With the above in mind, we have decided that tests should be organized by feature. Note that this decision applies only to a component where the test file has grown to the size where it feels the pains described earlier in this document (based on current tools and computation power, we believe this is happens to test files somewhere between 500–1000 lines).
