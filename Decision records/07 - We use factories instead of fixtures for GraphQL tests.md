# We use factories insead of fixtures for GraphQL tests

## Date

November 6, 2018

## Contributors

* Chris Sauvé
* Mallory Allen
* Tzvi Melamed
* Matt Seccafien

## Summary

We prefer using factory functions, which take a GraphQL document and intelligently fill out custom mock data for that document, rather than using hardcoded fixture data.

## History

When initially building Shopify Web, we relied on JSON fixture files for GraphQL operations. As the number of fixtures increased, we built [`graphql-validate-fixtures`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-validate-fixtures), which ran in CI to ensure that the data in GraphQL fixture files lined up with the actual queries and mutations they were meant to represent.

In our attempt at handling GraphQL test data, we had one key requirement: it had to make use of our typed languages (GraphQL and TypeScript) to prevent developers from providing invalid fixture data. We also wanted to make sure it was easy to author and understand the fixture data.

## Decision

Fixture files have a number of benefits:

* They are static and not programatically generated, so they are easier to understand at a glance (and can be analyzed easily by tools, as we did with [`graphql-validate-fixtures`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-validate-fixtures))
* They are familiar to Rails developers, where fixtures are used regularly for test data
* They remove fixture data from test files, which can help focus large test suites

However, as our usage of these fixtures increased, we noticed many downsides:

* When fields were added to the matching query/ mutation, developers would have to manually update dozens of fixture files, including some they had no context into, to add relevant values for those fields
* It was unclear what data was actually important in a fixture, and what data was simply there to fill out the required shape of the operation
* It was difficult to know whether data that needed to be asserted upon should be manually hardcoded in tests (resulting in it being duplicated between fixture and test file), or referenced by looking into the fixture data (which required navigating deeply nested, untyped objects)
* In an effort to reduce the number of fixtures, many fixture files grew to handle more than one test case, resulting in a lot of built-in assumptions that were impossible to know from the fixture file alone
* The connection between fixture file and GraphQL operation was entirely determined by the directory a fixture was nested in, which was a bit of magic that tripped up many developers (but was necessary to have safety over the contents of the fixtures)

These many downsides forced us to consider an alternative approach: a factory function that could automatically fill out the data needed for an operation. Though this method ends up bringing more code into the test files themselves, it addresses most of the problems we saw with fixtures:

* Because we can see the shape of a GraphQL operation when filling the data, only a subset of the data (the part that is relevant for the test) needs to be provided
* We can generate a fixture per test, which is more in keeping with our desire for [isolation](../4%20-%20Isolation%20over%20integration), but would have been prohibitively hard to maintain with dedicated fixture files
* We reduce duplication between the fixture and test by having the fixture be computed from values that will then be asserted upon
* Because our tools encode type information about a GraphQL query/ mutation (through [`graphql-typescript-definitions`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-typescript-definitions)), we can retain confidence that the data being supplied actually matches the types we will get from the GraphQL API in practice

Overall, using a factory function was much more scalable as the number of GraphQL-connected components increases in an app, and it does not impose much of a burden on smaller apps, either. It is therefore our recommended approach for supplying mock data to GraphQL.
