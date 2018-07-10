# We do not use test IDs in tests

## Date

July 10, 2018

## Contributors

* Chris Sauvé
* Mallory Allen

## Summary

Test IDs make it too easy to test implementation details of components. They should be avoided in favor of [alternatives](../Best%20practices/Testing.md#test-ids) that emphasize the guarantees a component actually makes.

## Description

Developers sometimes feel the need to add "hooks" that allow their tests to easily find parts of the component subtree and assert details about those subtrees in tests. In the React ecosystem, this is a key recommendation of an alternative to Enzyme (our preferred React testing library), [`react-testing-library`/ `dom-testing-library`](https://github.com/kentcdodds/dom-testing-library/blob/master/README.md#faq).

## History

In building the initial version of Shopify Web, we took several steps to encourage and facilitate the use of test IDs:

* A [babel plugin](https://github.com/lemonmade/babel-plugin-react-test-id) to remove the unnecessary attribute in production
* Allowing the `testID` prop implicitly with TypeScript and adding a `findByTestId` utility to Shopify Web

These were originally introduced to facilitate differentiation between the same React component rendered multiple times within a tree (specifically, to target multiple `TextField` components rendered by a card in the product section of the admin). No analysis of alternatives was performed at the time. The cases in which this attribute was used expanded and, as of July 10, 2018, it is used 280 times in the Web codebase.

## Decision

`testID` provides some benefits that have made it attractive to developers working in the Web stack:

* It clearly indicates its intent: it is meant to identify an element exclusively for tests
* Our implementation in Shopify Web allows it to be used on any HTML element or custom component (without changes to the component’s API)
* It has no runtime impact because the attribute is stripped in production builds

However, implementing `testID` for a project involves several steps, and all of them are clearly monkey patches:

* You must augment an internal React interface for TypeScript to not complain about the unexpected attribute
* You must prevent console warnings that React prints by default complaining about an unexpected `testID` prop on DOM elements
* You must be sure to include our custom Babel plugin to strip the attribute in production builds

Additionally, in reviewing the use of `testID` in Web, we found that the ways it were used were better addressed using other strategies. We have detailed common patterns we found (along with alternative strategies to `testID`) in our [testing best practices](../Best%20practices/Testing.md#test-ids), but in summary, we found that `testID` was used to:

* Filter a collection of the same component (`TextField`, `Modal`, etc), where it would be preferable either to create a component that composes each individual component, or filter on the `id` or other "true" property that was unique between the instances,
* Find a wrapper around text they wanted to assert was present, where asserting that the content appeared anywhere in the component would suffice, or
* Find a DOM node that was not semantically important for the test, but which allowed them to partially assert something about the visual fidelity of the component

Given the downsides noted above, and the fact that we have preferred alternative approaches to all common use cases for `testID`, we discourage the use of this and similar attributes in all projects.
