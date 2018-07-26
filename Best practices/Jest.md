# Jest

[Jest](https://facebook.github.io/jest/) is a popular testing library for JavaScript that includes a test runner, assertion library, spies, and code coverage. We strongly recommend Jest for any type of testing that can be run entirely in Node. Jest is the default test framework used by Sewing Kit.

## Complementary packages

We have a number of packages that handle common mocking scenarios that are built specifically for use with Jest:

* [@shopify/jest-dom-mocks](https://github.com/Shopify/quilt/blob/master/packages/jest-dom-mocks/README.md): mocks for commonly-used browser globals
* [@shopify/jest-mock-apollo](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-apollo/README.md): a mock Apollo client that supports custom fixtures returned in response to operations
* [@shopify/jest-mock-router](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-router/README.md): a mock React Router implementation
* [@shopify/jest-koa-mocks](https://github.com/Shopify/quilt/blob/master/packages/jest-koa-mocks/README.md): mocks for Koa’s context for middleware testing
* [@shopify/with-env](https://github.com/Shopify/quilt/blob/master/packages/with-env/README.md): safe switching of `process.env.NODE_ENV` for testing different handling of those environments

## Best Practices

* Avoid snapshot tests. As noted in the [basic testing principles](./Testing.md), we avoid taking too many shortcuts around the assertions a test is meant to perform. Jest’s snapshot feature is often used in place of many assertions (in which case, the test is doing too much). Even when used correctly, snapshot tests move the expected value of the test (and, by extension, the documentation value) into an external file that must be found and understood by the reader. More discussion can be found in our [decision log on snapshot tests](../Decision%20records/03%20-%20We%20do%20not%20use%20Jest%20snapshot%20tests.md).

  ```js
  // bad
  expect(doWork()).toMatchSnapshot();

  // good
  expect(doWork()).toHaveProperty('foo', 'bar');
  ```

* Mocks for modules should appear after import statements. Jest will hoist these above the imports, so this simply preserves the typical order of files where imports are at the top.

  ```js
  // bad
  jest.mock('my-module', () => ({
    foo: 'bar',
  }));

  import {foo} from 'my-module';

  // good
  import {foo} from 'my-module';

  jest.mock('my-module', () => ({
    foo: 'bar',
  }));
  ```

* When mocking out only part of an external module, include the full module as part of your mock.

  > Why? Helps prevent unexpected missing members.

  ```js
  // bad
  import {foo, bar} from 'my-module';

  jest.mock('my-module', () => ({
    // Missing bar!
    foo: jest.fn(() => true),
  }));

  // good
  import {foo, bar} from 'my-module';

  jest.mock('my-module', () => ({
    ...require.requireActual('my-module'),
    foo: jest.fn(() => true),
  }));
  ```

* Do not use `jest.doMock()`, `jest.unmock()`, or `jest.dontMock()`.

  > Why? `jest.doMock()` ends up forcing you to require your module directly in the body of tests, which makes the test harder to follow. `jest.unmock()` and `jest.dontMock()` are generally indicators that you have too much auto-mocking in place, or that mocking is not scoped sufficiently to only the tests that need it. In general, all tests should either operate on the assumption that a dependency is mocked or that it is not mocked, as this makes it easier to read through all tests in the file.

* Do not use `jest.resetAllMocks()`, `jest.clearAllMocks()`, `jest.restoreAllMocks()`, and `jest.resetModules()`.

  > Why? These methods are overly broad and do not have explicit connections to the contents of your test file. Instead, reset/ clear/ restore individual mocks that are set up explicitly for the purposes of your test suite.

* When mocking a default export, return your mock on the `default` key of the module if you are including other parts of the module, and return your mock directly if you are not exporting anything else.

  > Why? This helps prevent issues with how Babel/ TypeScript transpile default exports for the version of your file that Node executes.

  ```js
  // bad
  jest.mock('../my-module', () => ({
    // Probably doesn't do what you think! This will not be the value
    // brought in by a default import (`import myFunction from '../my-module';`)
    // because it is missing a special key that Babel/ TypeScript use to simulate
    // default imports in Node.
    default: jest.fn(),
  }));

  // good
  jest.mock('../my-module', () => ({
    ...jest.requireActual('../my-module'),
    default: jest.fn(),
  }));

  // or, if there are no other named imports:
  jest.mock('../my-module', () => jest.fn());
  ```

## Expectations

As noted in our [main testing guide](./Testing.md), you should prefer the “smartest” assertions available. Below are some common examples of applying this rule to Jest (note that you can always visit the [Jest expect guide](https://facebook.github.io/jest/docs/en/expect.html) for a list of available assertions).

```js
// .toHaveProperty()
// prefer:
expect(object).toHaveProperty('foo', 'bar');

// over:
expect(object.foo).toBe('bar');

// .toMatchObject()/ .toEqual()
// prefer:
expect(object).toMatchObject({foo: true, bar: false});
expect(array).toMatchObject([{foo: 'bar'}]);

// or (if you do not want to allow extra properties):

expect(object).toEqual({foo: true, bar: false});
expect(array).toEqual([{foo: 'bar'}]);

// over:
expect(object.foo).toBe(true);
expect(object.bar).toBe(false);
expect(array[0].foo).toBe('bar');

// .toContain()
// prefer:
expect(array).toContain('foo');

// over:
expect(array.includes('foo')).toBe(true);
```

## Coverage

Use Jest’s [built-in coverage tool](https://facebook.github.io/jest/docs/en/cli.html#coverage). If you are using Sewing Kit, coverage is automatically collected when running `sewing-kit test --coverage`.
