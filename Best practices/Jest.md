# Jest

## Complementary packages

We have a number of packages that handle common mocking scenarios:

* [@shopify/jest-dom-mocks](https://github.com/Shopify/quilt/blob/master/packages/jest-dom-mocks/README.md): mocks for commonly-used browser globals
* [@shopify/jest-mock-apollo](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-apollo/README.md): a mock Apollo client that supports custom fixtures returned in response to operations
* [@shopify/jest-mock-router](https://github.com/Shopify/quilt/blob/master/packages/jest-mock-router/README.md): a mock React Router implementation
* [@shopify/jest-koa-mocks](https://github.com/Shopify/quilt/blob/master/packages/jest-koa-mocks/README.md): mocks for Koa’s context for middleware testing
* [@shopify/with-env](https://github.com/Shopify/quilt/blob/master/packages/with-env/README.md): safe switching of `process.env.NODE_ENV` for testing different handling of those environments

## Expectations

As noted in our main testing guide, you should [prefer the “smartest” assertions available](). Below are some common examples of applying this rule to Jest (note that you can always visit the [Jest expect guide](https://facebook.github.io/jest/docs/en/expect.html) for a list of available assertions).

```js
// .toHaveProperty()
// prefer:
expect(object).toHaveProperty('foo', 'bar');

// over:
expect(object.foo).toBe('bar');

// .toMatchObject()
// prefer:
expect(object).toMatchObject({foo: true, bar: false});
expect(array).toMatchObject([{foo: 'bar'}]);

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

## Styleguide

* Avoid snapshot tests. As noted in the [basic testing principles](), we avoid taking too many shortcuts around the assertions a test is meant to perform. Jest’s snapshot feature is often used in place of many assertions (in which case, the test is doing too much), and even when used correctly, takes the expected value of the test (and, by extension, the documentation value) out-of-band. More discussion can be found in our [decision log on snapshot tests](https://github.com/Shopify/web/blob/master/documentation/decisions/04%20-%20We%20do%20not%20use%20Jest%20snapshot%20tests).

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

  > Why? This prevent unexpected missing members.

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

  > Why? `jest.doMock()` ends up forcing you to require your module directly in the body of tests, which makes the test harder to follow. `jest.unmock()` and `jest.dontMock()` are generally indicators that you have too much automocking in place.

* Do not use `jest.resetAllMocks()`, `jest.clearAllMocks()`, `jest.restoreAllMocks()`, and `jest.resetModules()`.

  > Why? These methods are overly broad and do not have explicit connections to the contents of your test file. 

* When mocking a default export, return your mock on the `default` key of the module if you are including other parts of the module, and return your mock directly if you are not exporting anything else.

  > Why? This helps prevent issues with how Babel/ TypeScript transpile default exports for the version of your file that Node executes.

  ```js
  // bad
  jest.mock('../my-module', () => ({
    // Probably doesn't do what you think!
    default: jest.fn(),
  }));

  // good
  jest.mock('../my-module', () => ({
    ...jest.requireActual('../my-module'),
    default: jest.fn(),
  }));

  // or:
  jest.mock('../my-module', () => jest.fn());
  ```
