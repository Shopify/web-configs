# Testing

Testing is a vitally important part of writing code that is meant to withstand the test of time. Tests serve two primary purposes:

1. They prevent regressions, making it easier to iterate on code with confidence that you have not broken the behaviour for consumers.
2. They serve as a more thorough form of documentation for technically experienced users, detailing edge cases and expected behaviour that may not be obvious from the API or documentation in prose.

## Core principles

### Test the interface, not the implementation

Unless required by a limitation of the test framework, you should never have to change your code exclusively for testing. Decide what parts of your API should be private, and maintain this restriction in your tests. If you depend on external functions in the code under test, consider mocking out those dependencies or, at a minimum, avoid testing them directly. This is an important part of our principle of considering [API over implementation](https://github.com/Shopify/web-foundation/blob/master/Principles/2%20-%20API%20over%20implementation.md).

Note that the meaning and size of “the interface” will depend greatly on the type of test, but that this rule applies regardless. When running unit tests, the interface is mostly comprised of functions. When running e2e tests, the interface includes things like the URL structure and user interface events.

Your tests should mirror how a consumer would actually use your code; they do not care or have access to the inner workings, and so neither should your tests.

Below are some specific applications of this principle:

* Do not rely excessively on dependency injection. Dependency injection might make tests easier to write, but they typically work by moving around the test complexity, not eliminating it. If you find that you are extracting parts of the logic exclusively to be able to provide mocked versions for test, you are probably not prioritizing the public API. Use dependency injection only for APIs on which a user will need to provide alternate behaviour in some cases.

### Setup, perform, assert

All tests should follow a common pattern. First, do any necessary setup work (for example, instantiating an object, or mocking a dependency to return a particular value). Then, perform the action you are testing (for example, triggering a method). Finally, assert on the result, either on the value received from performing the action, or on the side effects that are expected as part of it.

If you find that tests are getting quite large, it can make sense to break common parts of setup and perform into utility functions scoped to the test file. You should not break assertions out into utility functions; these are the key part of your test, and if you have common assertions across tests (or many assertions per test), it is likely that you are testing too much in each test case. If the assertion itself is complex, consider using a custom assertion, which most frameworks support.

Below are some specific applications of this principle:

* Prefer factory functions for setting up variables under test rather than doing so in `beforeEach`/ `setup` blocks, except for mocks of globals (for the environment, or mocks of the module system) that must be restored in between tests.

  > Why? It is easy for test state to leak when using variables that are in scope of the entire test suite. It also means that the test has a clear "setup" step, allowing it to better stand on its own. Globals need to be mocked in these lifecycle hooks so that they can be restored correctly after the test; you should not restore mocks at the end of tests as it hurts the flow of the test and may not be run if the test fails.
  >
  > This preference is an example of [preferring explicit over automatic](https://github.com/Shopify/web-foundation/blob/master/Principles/3%20-%20Explicit%20over%20automatic.md).

  ```js
  // Example using Jest

  describe('<MyComponent />', () => {
    // Need to store in the suite so that it can be restored
    // after each test.
    let scrollSpy: jest.SpyInstance<any>;

    beforeEach(() => {
      scrollSpy = jest.spyOn(document.body, 'scrollTo');
    });

    afterEach(() => {
      scrollSpy.mockRestore();
    });

    it('calls body.scrollTo() with the specified position', () => {
      // A factory function to encapsulate setup logic
      const myComponent = createComponent();

      // Utility functions to perform complex actions are also fine!
      simulatePositionUpdate(myComponent, 100);

      expect(scrollSpy).toHaveBeenCalledWith(100);
    });
  });
  ```

* Never use `beforeAll`/ `afterAll` hooks.

  > Why? These hooks are almost always in a way that introduces shared state that is easy to leak between tests.

* Avoid using mocks (for example, via `sinon.mock()`).

  > Why? Mocks invert the order, putting the assertion first in the test, which makes them harder to read.

  ```js
  // bad
  const mock = sinon.mock(subject).expects('myMethod').once();
  subject.doSomething();
  mock.verify();

  // good
  const stub = sinon.spy(subject, 'myMethod');
  subject.doSomething();
  assert.calledOnce(stub);
  ```

### Tests should work and be useful in isolation

The suite, test name, and test contents should read like a paragraph that tell future readers the following:

* What construct is being tested
* What behaviour of the construct is being tested
* How is that behaviour initiated by a consumer
* What is the expected result of the behaviour

It is often useful to organize your suites using the "unit of work - scenario/context - expected behaviour" pattern, as this typically provides all the information your test needs to be understandable on its own:

```js
// Example using Jest:

describe('[unit of work]', () => {
  it('[expected behaviour] when [scenario/context]', () => {});
});

// Or, when there are multiple behaviours resulting from a scenario/ context:

describe('[unit of work]', () => {
  describe('[scenario/context]', () => {
    it('[expected behaviour]', () => {});
  });
});
```

As noted in the previous section, breaking out utilities that capture how the behaviour is initiated are absolutely acceptable; think of them as shorthand you might use in a real conversation. However, avoid constructs that use shorthand for the expected result; the success criteria of the behaviour should be clear from reading, as this will make it easier to diagnose future failures and provide better documentation for the technical reader.

Below are some specific applications of this principle:

* Test names should read as english sentences, not contain content that repeats the names of the nested suites in which the test is located, and should not end with a period.

  ```js
  // bad
  it('Sending a network request', () => {});

  describe('myFunction()', () => {
    it('returns true when calling myFunction() without arguments.', () => {});
  });

  // good
  it('returns a successful code when sending a network request', () => {});

  describe('myFunction()', () => {
    it('returns true when called without arguments', () => {});
  });
  ```

* Where available, use asynchronous tests (test that rely on a returned promise rather than on a done callback), particularly when async/ await is available.

  > Why? The test reads more sequentially and is entirely focused on your code, not managing the test runner.

  ```js
  // Example using Jest, which supports async tests

  // bad
  it('resolves to true', (done) => {
    myFunction().then(val => {
      expect(val).toBe(true);
      done();
    });
  });

  // good
  it('resolves to true', async () => {
    expect(await myFunction()).toBe(true);
  });
  ```

* Scope any utility functions (for setup, fake data creation, or complex perform procedures) scoped to the innermost test suite that needs them. File scope should be reserved for utilities that are used by most tests in the suite.

  > Why? This makes it easier to navigate test files, as code folding will hide details irrelevant to a test being focused, and it more clearly communicates the purpose for those utilities.

* Avoid words in your test name that do not adequately describe the success criteria of the test, such as ‘correct’ and ‘right’.

  > Why? Test names including these kinds of words force the user to dig deeper in order to understand the purpose of the test.

* Prefer the “smartest” assertions available in your expectations library.

  > Why? More specific assertions lead to more useful contextual information when the test fails, making it easier for future developers to understand and debug. See individual testing guides below for details on what this means for a given testing framework or tool.

* Do not rely on test ordering for your tests to run correctly. Imagine each test was going to be run in a separate process, and must therefore entirely setup any preconditions before running.

  > Why? Tests that depend on anything outside of them will inevitably break as more tests are added. Other developers will assume there is no shared context between tests; don’t violate that assumption!

* Tests should not have side effects. This includes changes to global objects (prefer mock versions that are restored between tests) and changes to variables that are shared between tests.

### Tests support building software, never hinder it

In order to prioritize the [user over ourselves](https://github.com/Shopify/web-foundation/blob/master/Principles/1%20-%20User%20over%20team%20over%20self.md), you should only write as many tests as you need to ensure quality and a lack of regressions over time. Do not be dogmatic about testing; don’t seek 100% code coverage for non-mission-critical systems, don’t test trivial code, and don’t test code that you already have confidence over through other mechanisms, like the type system.

In addition to the above, tests should be as simple as possible but no simpler. They should be easy to read and maintain, and should be as cheap to add and update as possible.

Below are some specific applications of this principle:

* When using fake data, attempt to use data that is as generic as possible while still representing potentially valid input. For example, if you need a fake product object for a test, use a `title` that could still be a sensible title for a real product, but when testing a function that operates on arbitrary strings, stand-ins like `’foo'` and `’bar'` will suffice.

* Avoid loops, conditions, and other logic in your tests.

  > Why? It makes the test harder to read, and introduces surface area for bugs in your tests (for example, having a failing assertion behind a conditional that ends up being false)

## Test files

Common patterns for organizing test and fixture files makes it easier to navigate codebases throughout Shopify. We recommend the following:

* Use a test setup file to create global state, including the installation of any necessary polyfills and the mocking of any environment globals that are needed by most test files. Create separate files, usually under `tests/utilities`, to consolidate any testing utilities used across multiple test files.

* Tests files should be named the same as the file they are testing, with an additional `.test` before the file extension. For example, a test of `MyComponent.tsx` becomes `MyComponent.test.tsx`.

* Tests files should be collocated with the code they cover, nested inside a `tests` folder. For smaller projects, a single `tests` folder at the root of the project is fine, but this should be avoided as the project grows and as modules become more deeply nested in the source directory. When fixture files are required, add them to a `fixtures` directory nested inside the `tests` directory that needs them.

  ```
  |- MyComponent/
  |  |- tests/
  |  |  |- fixtures/
  |  |  |  |- my-fixture.json
  |  |  |- MyComponent.test.tsx
  |  |- MyComponent.tsx
  ```

## Miscellaneous

### Fake data

In order to provide clarity that the specific value used in a test is unimportant, it can be useful to use a library that abstracts away and randomizes the generation of mock data. In JavaScript, we recommend using [faker.js](https://github.com/marak/Faker.js/) for generating fake data.

## Technology-specific best practices

For some technologies that we use frequently, we have more specific testing guides. These can be found below:

* [Testing React applications](./React/Testing.md)
* [Testing using Jest](./Jest.md)
* [Testing using Enzyme](./Enzyme.md)
