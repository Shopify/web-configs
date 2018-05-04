# We do not use Jest snapshot tests

## Date

December 1, 2017

## Contributors

* Chris Sauvé
* Mallory Allen
* Utkarsh Saxena

## Summary

We prefer explicit tests that show the writer’s intent over relying on
[Jest’s snapshot tests](https://facebook.github.io/jest/docs/en/snapshot-testing.html).

## Description

Jest includes a popular feature that allows you to assert that a value has not
changed from some stored value in a previous test. This feature, called
[snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html),
allows for very succinct expectations on the non-changing of any value (complex
values are serialized) using the `toMatchSnapshot()` expectation. In general,
these tests typically replace more traditional assertions like `toBe`,
`toEqual`, and `toMatchObject`.

## Decision

Snapshot tests have a number of benefits over traditional tests:

* They are easy to write, which can lead to more tests being written.
* They are much shorter than comparable assertions showing the full value,
  making test suites easier to read.
* They offer easy-to-read diffs when the snapshot is no longer matched.
* They are very easy to update using Jest’s interactive test runner.

However, there are a number of
[drawbacks](https://twitter.com/searls/status/919594505938112512):

* The assertion does not indicate the developer’s intention. Instead, we must
  rely on the test name for intention, and hope that the name accurately
  reflects what the snapshot is trying to capture.
* They tend to have high false negatives, which can lead to the team losing
  trust in their value.
* They rely on generated files, which can be difficult to maintain discipline
  around in a larger project.
* Their ease of use can lead to using a single test to cover wide swaths of
  logic in a single test, making test failures less meaningful.
* You must navigate between the snapshot and test file in order to determine
  what it is testing and what the intended result is.
* It is typically not much more effort to write a test that provides a more
  specific, meaningful assertion.

Additionally, when discussed in the context of React components, they have an
additional drawback: they lock in the structure of the React tree/ DOM. We treat
the rendering of a component as an implementation detail, but snapshot tests
effectively add it as part of the public API (or, at least, causes tests to fail
unecessarily when markup is changed). (Note: shallow rendering of components can
resolve this deficiency, but shallow tests are often not usable because of
components that accept content as children).

For these reasons, we discourage the use of snapshot testing in applications.
