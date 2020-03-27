# Testing

Testing is a vitally important part of writing code that is meant to withstand the test of time. Tests serve two primary purposes:

1. They prevent regressions, making it easier to iterate on code with confidence that you have not broken the behaviour for consumers.
2. They serve as a more thorough form of documentation for technically experienced users, detailing edge cases and expected behaviour that may not be obvious from the API or documentation in prose.

## Table of contents

1. [Core principles](#core-principles)
1. [Test files](#test-files)
1. [Additional topics](#additional-topics)
1. [Technology-specific best practices](#technology-specific-best-practices)

## Core principles

### Test the interface, not the implementation

Unless required by a limitation of the test framework, you should never have to change your code exclusively for testing. Decide what parts of your API should be private, and maintain this restriction in your tests. If you depend on external functions in the code under test, consider mocking out those dependencies or, at a minimum, avoid testing them directly. This is an important part of our principle of considering [API over implementation](../Principles/2%20-%20API%20over%20implementation.md).

Note that the meaning and size of “the interface” will depend greatly on the type of test, but that this rule applies regardless. When running unit tests, the interface is mostly comprised of functions. When running e2e tests, the interface includes things like the URL structure and user interface events.

Your tests should mirror how a consumer would actually use your code; they do not care or have access to the inner workings, and so neither should your tests.

Below are some specific applications of this principle:

* Do not rely excessively on dependency injection. Dependency injection might make tests easier to write, but they typically work by moving around the test complexity, not eliminating it. If you find that you are extracting parts of the logic exclusively to be able to provide mocked versions for test, you are probably not prioritizing the public API. Use dependency injection only for APIs on which a user will need to provide alternate behaviour in some cases.

* Do not over-mock. Mocking can be a useful tool for short-circuiting potentially expensive function calls or for more easily simulating a particular environment. However, overuse of mocks reduces the degree to which the tests represent the running system, and can indicate a design that has been excessively broken up solely for the purposes of being able to inject mocks into various points of the operation.

* Do not rely on test IDs of any kind. See the [test IDs](#test-ids) section below for alternative to test IDs, and read additional rationale for this decision in its [decision record](../Decision%20records/04%20-%20We%20do%20not%20use%20test%20IDs.md).

### Setup, perform, assert

All tests should follow a common pattern. First, do any necessary setup work (for example, instantiating an object, or mocking a dependency to return a particular value). Then, perform the action you are testing (for example, triggering a method). Finally, assert on the result, either on the value received from performing the action, or on the side effects that are expected as part of it.

If you find that tests are getting quite large, it can make sense to break common parts of setup and perform into utility functions scoped to the test file. You should not break assertions out into utility functions; these are the key part of your test, and if you have common assertions across tests (or many assertions per test), it is likely that you are testing too much in each test case. If the assertion itself is complex, consider using a custom assertion, which most frameworks support.

Below are some specific applications of this principle:

* Prefer factory functions for setting up variables under test rather than doing so in `beforeEach`/ `setup` blocks, except for mocks of globals (for the environment, or mocks of the module system) that must be restored in between tests.

  > Why? It is easy for test state to leak when using variables that are in scope of the entire test suite. It also means that the test has a clear "setup" step, allowing it to better stand on its own. Globals need to be mocked in these lifecycle hooks so that they can be restored correctly after the test; you should not restore mocks at the end of tests as it hurts the flow of the test and may not be run if the test fails.
  >
  > This preference is an example of [preferring explicit over automatic](../Principles/3%20-%20Explicit%20over%20automatic.md).

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

  > Why? These hooks almost always introduce shared state that is easy to leak between tests.

* Avoid using mocks with expectations established when creating them (for example, via `sinon.mock()`).

  > Why? These types of mocks invert the typical test order (putting the assertion first), which makes them harder to read.

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

The suite, test name, and test contents should read like a paragraph that tells future readers the following:

* What construct is being tested
* What behaviour of the construct is being tested
* How is that behaviour initiated by a consumer
* What is the expected result of the behaviour

It is often useful to organize your suites using the "unit of work - scenario/context - expected behaviour" pattern, as this provides all the information your test needs to be understandable on its own:

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

* Test names should read as english sentences in the present tense, not contain content that repeats the names of the nested suites in which the test is located, and should not end with a period.

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

In order to prioritize the [user over ourselves](../Principles/1%20-%20User%20over%20team%20over%20self.md), you should only write as many tests as you need to ensure quality and a lack of regressions over time. Do not be dogmatic about testing; don’t seek 100% code coverage for non-mission-critical systems, don’t test trivial code, and don’t test code that you already have confidence over through other mechanisms, like the type system.

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
  MyComponent/
  ├── MyComponent.tsx
  ├── index.ts
  └── tests
      ├── MyComponent.test.tsx
      └── fixtures
          └── my-fixture.json
  ```

## Additional topics

### Fake data

In order to provide clarity that the specific value used in a test is unimportant, it can be useful to use a library that abstracts away and randomizes the generation of mock data. In JavaScript, we recommend using [faker.js](https://github.com/marak/Faker.js/) for generating fake data.

### Test IDs

A common way in which developers accidentally break the barrier of public API in tests is by using test IDs to target specific elements rendered by their component. These identifiers are often used to mark parts of the component’s markup that are not truly important to the consumer of the component, but which include some details the developer wishes to test for. Common examples include:

* `div`s and `span`s that have no semantic value, but contain some content (text, child components, etc) that *are* a guarantee the developer wants to make.
* Markup that has an important effect on the visual output of a component, but which have no other defining characteristics (for example, an element on which we apply a particular class name or inline styles).
* A child component that is rendered multiple times, where the developer wishes to easily disambiguate between the instances (for example, a component that renders multiple `Modal`s from Polaris React).

We would like to avoid test IDs for handling the cases above, as they make it easy to reach into your component in ways that unnecessarily lock down the implementation. You can typically avoid test IDs by using one of the following strategies:

* If you are asserting that particular text exists in your component, simply check that the text exists *somewhere* in the component without noting a particular element that contains it. For example, you could do the following in Enzyme to assert that a particular string exists based on a `name` prop passed to a React component:

  ```ts
  it('greets the user with the provided name', () => {
    const name = 'Tobi';
    const greeting = mount(<Greeting name={name} />);
    expect(greeting.text()).toContain(`Welcome, ${name}`);
  });
  ```

* Similarly to the above, if you wish to assert that a property of a component is "injected" into the component’s end markup, assert that it appears *somewhere* in the component, without nailing down any particular element:

  ```ts
  // Example using React and Enzyme

  it('includes the children in the markup', () => {
    const children = <div>Contents</div>;
    const card = mount(<Card>{children}</Card>);
    expect(card).toContainReact(children);
  });
  ```

* If you are trying to assert that some markup exists that results in the correct visual appearance of your component, delete the unit test. Unit tests, as we describe them in this guide, can’t provide confidence over this aspect of the component. Even if you can find a `div` and assert that it has a particular class name, this does not guarantee that the CSS was written correctly, or that the class name is the one that has the necessary styles. We do not attempt to assert visual fidelity in unit tests, and would instead rely on tests that render the entire component (along with its styles, in a real browser environment). In this context, test IDs are not meaningful.

* If you are trying to find one of several instances of a component, use one of the following strategies (listed here from most to least preferred):

  * If the component makes sense as a separate, named component, extract and find it based on that new component. Use this strategy only when the component encapsulates sufficient logic to make it meaningful as a separate component instead of overloading the parent component with that responsibility.
  
    This is frequently the case for modals, which are often better off encapsulating all their logic in a separate component that can be found independently of other modals on the page:

    ```ts
    // instead of:

    <Modal
      testID="DeleteModal"
      title="Delete product?"
      open={this.state.deleteOpen}
    >
      {deleteContents}
    </Modal>
    <Modal
      testID="DuplicateModal"
      title="Duplicate product?"
      open={this.state.duplicateOpen}
    >
      {duplicateContents}
    </Modal>

    // make them into separate components:

    <DeleteModal open={this.state.deleteOpen} />
    <DuplicateModal open={this.state.duplicateOpen} />

    // and, in your test, you can now find based on this component,
    // shown here using Enzyme:

    expect(myComponent.find(DeleteModal)).toHaveProp('open', true);
    ```
  
  * If the component accepts an `id` property that is meaningful on its own, filter components by that property instead. This is frequently the case for form controls, where omitting `id` properties are allowed but result in non-deterministic IDs being used in their place:

    ```ts
    // instead of this (using the TextField component from Polaris React):

    <TextField testID="NameField" label="Name" value={this.state.name}>
    <TextField testID="AgeField" label="Age" value={this.state.age}>

    // use the real ID prop, which is eventually needed to associate
    // the label field with the input:

    <TextField id="NameField" label="Name" value={this.state.name}>
    <TextField id="AgeField" label="Age" value={this.state.age}>

    // and, in your test, you can now find based on this property,
    // shown here using Enzyme:

    expect(myComponent.find(TextField).filter({id: 'NameField'})).toHaveProp('value', '');
    ```

    To make this approach even easier, our [`enzyme-utilities` package](https://github.com/Shopify/quilt/tree/master/packages/enzyme-utilities) provides a `findById` utility function.
  
  * If neither of the above apply, filter the set of matched components based on the properties that are unique to them. If no properties are unique, fall back to the index of the item in the matched set.

## Technology-specific best practices

For some technologies that we use frequently, we have more specific testing guides. These can be found below:

* [Testing React applications](./React/Testing.md)
* [Testing GraphQL](./GraphQL/Testing.md)
* [Testing using Jest](./Jest.md)
* [Testing using Enzyme](./Enzyme.md)
