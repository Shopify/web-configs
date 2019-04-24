# React Testing

In addition to the guide below, you should read through our [Jest](../Jest.md) best practices. These two tools are strongly recommended for testing a React application. While we now recommend [`@shopify/react-testing`](https://github.com/Shopify/quilt/tree/master/packages/react-testing) for mounting and testing React components, we also have recommendations for projects using [Enzyme](../Enzyme.md).

## Table of contents

1. [Complementary packages](#complementary-packages)
1. [Strategy](#strategy)
1. [Hooks](#hooks)
1. [Split test files](#split-test-files)
1. [Style and naming](#style-and-naming)

## Complementary packages

* [`@shopify/react-testing`](https://github.com/Shopify/quilt/tree/master/packages/react-testing): utilities for testing React components as detailed in this guide
* [`@shopify/graphql-testing`](https://github.com/Shopify/quilt/tree/master/packages/graphql-testing): test infrastructure for simulating GraphQL queries, which includes a mock Apollo client for your tests
* [`@shopify/jest-dom-mocks`](https://github.com/Shopify/quilt/tree/master/packages/jest-dom-mocks): mock versions of browser globals including clock, timers, animation frames, and more
* [`@shopify/jest-mock-router`](https://github.com/Shopify/quilt/tree/master/packages/jest-mock-router): a mock version of the React Router 3.x router

## Strategy

React components lend themselves extremely well to testing, as there is a very clear unit of work to test (a component) and a clear public API (`props`). Regardless of the size or complexity of React components, their basic structure (and thus, the structure of their tests) remains consistent. When writing your tests, you should arrange them around testing the following features, using nested `describe`s as needed:

* **The outcome of passing particular values as `props`**. These will usually be the main category of test, primarily for components closer to the "edge" of the component hierarchy. When multiple tests apply to a given prop, you should name them after the prop (`describe('propOne')` or `describe('onAction()')`). Note that these might not always be passed directly as `props` to the component; components that are connected to context (for example, a Redux or Apollo store) may have custom context for a test that eventually delegates the correct props to the underlying component.

Tests for props will usually fall into one of a few categories:

  * **Callbacks:** test that the callback was called in response to the relevant action, and that it was called with the appropriate arguments. This is usually done by simulating a call on a subcomponent (for example, simulating a click on a contained `button`, which eventually leads to the callback being called). Tests should pass in a spy function for the prop under test to verify the calls.

    ```js
    // Example using Jest and @shopify/react-testing:

    describe('onAction()', () => {
      it('is called when the child component is clicked', () => {
        const spy = jest.fn();
        const myComponent = mount(<MyComponent onAction={spy} />);
        myComponent.find(ChildComponent)!.trigger('onClick');
        expect(spy).toHaveBeenCalled();
      });
    });
    ```

  * **Rendering logic:** test that some set of components are rendered as a result of the prop value passed in.

    ```js
    // Example using Jest and @shopify/react-testing:

    describe('products', () => {
      it('renders an empty state when the list is empty', () => {
        const productList = mount(<ProductList products={[]} />);
        expect(productList).toContainReactComponent(EmptyState);
      });
    });
    ```

  * **Content:** test that a particular prop is rendered within the component (as discussed below, avoid attempts to test that children markup is rendered with any particular styles).

    ```js
    // Example using Jest and @shopify/react-testing:

    describe('children', () => {
      it('renders within a card', () => {
        const children = <div>Test</div>;
        const myComponent = mount(<MyComponent>{children}</MyComponent>);
        expect(myComponent.find(Card)).toContainReactText('Test');
      });
    });
    ```

* **Subcomponents rendered to manage the behaviour of your component**. You will sometimes render components entirely to manage internal state. This is very common in "controller" components — these will have very few props, but may render components that manage internal state. For example, a component might render a button that toggles some other part of the UI to be visible. In these cases, group the tests under `describe`s named after the subcomponent name (i.e., `describe('<ChildComponent />')`).

  ```js
  // Example using Jest and @shopify/react-testing:

  describe('<MyModal />', () => {
    it('is rendered open when the update action is triggered', () => {
      const myComponent = mount(<MyComponent />);
      triggerUpdateAction(myComponent);
      expect(myComponent.find(MyModal)).toHaveReactProps({open: true});
    });
  });
  ```

  These tests will often assert that specific `props` are set on the rendered component based on the internal state of the main component under test.

### Implementation details

There are many parts of React components that should not be tested as they are internal details of React, despite being technically accessible in a testing context:

* `state`. State is not directly manipulable from other components, and so should be treated as private. In order to simulate setting state, trigger the props of components rendered by your component with arguments that result in the component getting into that state. Once a component is in a state, do not assert on the state having a particular shape; instead, assert that the subcomponents being rendered have the expected props.

* What hooks were used in a component. The hooks you use generally end up doing one of three things: pull in context, store local state, or create side effects. How context is pulled in to a component is an implementation detail; `useContext`, `contextType`, and `Context.Consumer` are all acceptable and interchangeable. As noted above, local state is never tested. Finally, we should test that the side effects themselves happened, not how they were triggered.

* Instances for class components. All methods should be private on your React components, as you will otherwise be encouraging users to break out of the declarative model of React. This includes React’s lifecycle methods, which are implementation details of the framework itself. Never call any of these methods directly. Similarly, function components should never use the `useImperativeHandle` hook to provide a public API.

* `className`s. Classes have no meaning outside of visual tests; the presence of a class does not provide any real confidence over the correctness of the rendered UI. `style` props of subcomponents may be tested if they rely on internal computations involving `state` or `props`.

Additionally, the rendered output of any components rendered by your component (your "grandchildren") should be treated as a black box. For example, you should not rely on the fact that a component that your component renders eventually renders a `button` element with a particular property. Instead, trigger the prop on the composite component you render directly, and allow its tests to assert that the `button` is eventually rendered with the appropriate props. This can be enforced using shallow rendering, or by individually mocking out components that you depend on to simply return `null`.

### Environment

Another benefit of testing React components is that they typically abstract away the DOM as an implementation detail of being rendered. As a result, we unit test our React components entirely in Node, not by running them in a real browser with a runner like Karma.

[Jest](https://facebook.github.io/jest/), our recommended test runner, internally uses [JSDom](https://github.com/jsdom/jsdom), which creates an all-JavaScript version of the DOM for the purpose of these tests. If you find that something is missing from JSDom, (for example, a browser global that does not behave as expected in the test environment), consider mocking out that global. Note that anything related to style calculation will not work correctly; this is a feature, not a bug. Your unit tests should not attempt to test style-related concerns directly, as these are typically better handled with visual regression tests, integration tests, or manual verification.

## Hooks

React hooks present an interesting testing challenge. They are not quite React components, but they are attached to the React lifecycle because of their reliance on primitive hooks like `useEffect`. However, whether a component uses hooks or not (and, in fact, whether it is a class or function component) is strictly an implementation detail, which we [don’t test](#test-the-interface-not-the-implementation).

You should test hooks by testing that they have the expected effect on a component that uses them. This is commonly done with a "dummy" component written exclusively for tests that calls the hook and returns no actual markup. Once you have a simple component to act as a test harness, ask yourself what feature your hook actually provides, and then have your test component accept props that will allow you to test that feature.

As an example, consider a `useEventListener` hook that attaches an event listener to window, calls one of the hook arguments when that event listener is triggered, and removes the event listener on unmount. The feature this hook provides is that it calls a function when a particular event is dispatched, contingent on the component still being mounted. In order to test this, our test component must accept a spy function that we can track during the test, and the event to listen for. The resulting test component might look like this:

```tsx
// Our hook.
function useEventListener(event: string, listener: () => void) {}

// Our test component. We recommend keeping this function at the top
// of the file, near the imports, so that the tests read a bit more
// linearly.
function EventListenerUser({event, listener}: {event: string; listener: () => void}) {
  useEventListener(listener);
  return null;
}
```

During tests, we would follow the same process outlined in the rest of this document: we’ll mount the component, get it in a particular state, and assert that the effects we expect have happened:

```tsx
// These tests are **not** exhaustive: we are missing tests for non-matching
// events, events on other nodes, etc.

it('calls the listener when a matching event is dispatched', () => {
  const spy = jest.fn();
  const eventName = 'my-event';
  mount(<EventListenerUser event={eventName} listener={spy} />);

  const event = new CustomEvent(eventName);
  window.dispatchEvent(event);
  
  expect(spy).toHaveBeenCalled();
});

it('does not call the listener when the component has unmounted', () => {
  const spy = jest.fn();
  const eventName = 'my-event';
  const eventListenerUser = mount(<EventListenerUser event={eventName} listener={spy} />);

  eventListenerUser.unmount();

  const event = new CustomEvent(eventName);
  window.dispatchEvent(event);

  expect(spy).not.toHaveBeenCalled();
});
```

If you are testing a library that exports a hook and a component that uses the hook and returns nothing (like our `EventListenerUser` component above), you only need to test one. We recommend testing the component version only; otherwise, it can be confusing why you have a component for tests that so closely mirrors a component that is actually exported from the library.

### Side effect-only hooks

The only exception to the rules above is for hooks that **only** have a side effect that is never reflected in the component tree. This is commonly the case for hooks that build on top of [`@shopify/react-effect`’s `useServerEffect` hook](https://github.com/Shopify/quilt/tree/master/packages/react-effect#useservereffect). In these cases, you can instead mock out the hook and simply ensure that it was called with the expected value:

```tsx
// @shopify/react-network’s `useStatus` hook has no effect beyond
// a side effect that occurs during the server render.

import {useStatus, StatusCode} from '@shopify/react-network';

jest.mock('@shopify/react-network', () => ({
  ...require.requireActual('@shopify/react-network'),
  useStatus: jest.fn(),
}));

describe('<MyComponent />', () => {
  beforeEach(() => {
    (useStatus as jest.Mock).mockReset();
  });

  it('sets the status code to not found', () => {
    mount(<MyComponent />);
    expect(useStatus).toHaveBeenCalledWith(StatusCode.NotFound);
  });
});
```

## Split test files

As noted in the [decision record](../../Decision%20records/06%20-%20We%20split%20up%20large%20component%20test%20files%20by%20feature.md), when a component’s test file gets large enough that is hard to navigate and/ or stresses editor tooling, we split the test file by feature. Below are some best practices for naming and structure of these split files:

* Name the split files in the format `Component-feature.test.tsx`. For example, a test file for the SEO feature of a `ProductDetails` component would be found at `ProductDetails/tests/ProductDetails-seo.test.tsx`.
* Tests that do not directly relate to a particular feature, or are too small to warrant a separate test file, should remain in a test file named after the component (for example, `ProductDetails/tests/ProductDetails.test.tsx`).
* Nest all tests for a component in a describe block named after the component, followed by a describe block for the feature. This allows the results to be grouped together by the test runner.

  ```ts
  // ProductDetails-seo.test.tsx
  describe('<ProductDetails />', () => {
    describe('seo', () => {
      // tests
    });
  });

  // ProductDetails-images.test.tsx
  describe('<ProductDetails />', () => {
    describe('images', () => {
      // tests
    });
  });
  ```

## Style and naming

* The top-level describe block of a React component should be a self-closing JSX tag of the component’s name. You should use the same format for nested describe blocks meant to test the rendering of particular subcomponents.

  ```js
  // bad
  describe('MyComponent', () => {});

  // good
  describe('<MyComponent />', () => {});
  ```

* When there are multiple tests for the same prop, they should be wrapped in a single describe block.

  ```js
  // bad
  describe('<MyComponent />', () => {
    it('disabled gets passed to <MySubComponent />', () => {});
    it('renders if disabled is true', () => {});
    it('does not render if disabled is false', () => {});
  });

  // good
  describe('<MyComponent />', () => {
    describe('disabled', () => {
      it('gets passed to <MySubComponent />', () => {});
      it('renders if true', () => {});
      it('does not render if false', () => {});
    });
  });
  ```

* When mocking out React components, keep the mocked version as simple as possible. This usually involves a named function that returns `null` (as this is a minimal requirement for a React component with a meaningful display name), but might instead involve returning `children` or some other `prop` directly if you embed props in the final JSX of the component being mocked.

  ```js
  // Typical component mocks look like one of these:

  jest.mock('../../MyComponent', () => function MyComponent() {
    return null;
  });

  jest.mock('../../MyComponent', () =>
    function MyComponent({children}) {
      return children || null;
    }
  );
  ```

* When importing a React component for testing, import it from the named file, not the index file for the directory.

  > Why? Importing the named file means you can export some things exclusively for the purposes of tests, like constants or enums used internally by your component, without exposing them to other consumers.

  ```js
  // bad
  import MyComponent, {ShouldBeInternalEnum} from '..';

  // good
  import MyComponent, {ShouldBeInternalEnum} from '../MyComponent';
  ```

* Use "mock" props that satisfy the required `prop` types for a component that are spread into each component under test. Only customize the `prop` that is under test, using a value specified in your test file.

  > Why? This prevents misconfigued components, and keeps the focus on the part of the component actually being tested.

  ```js
  // bad
  describe('<MyComponent />', () => {
    it('calls onAction() when clicked', () => {
      const spy = jest.fn();
      const myComponent = mount(
        // What is important here?
        <MyComponent products={createProducts()} disabled={false} onAction={spy} />
      );
    });
  });

  // good
  describe('<MyComponent />', () => {
    // A couple of cautions:
    // 1. Do not use spies here, as they can then leak state between tests.
    //    Prefer `noop` instead.
    // 2. It can be useful to use the typing for props to ensure your default
    //    satisfies the required props.
    // 3. Make these props as simple as possible.
    const mockProps: Props = {
      products: [],
      onAction: noop,
    };

    it('calls onAction() when clicked', () => {
      const spy = jest.fn();
      const myComponent = mount(
        <MyComponent {...mockProps} onAction={spy} />
      );
    });
  });
  ```

* If you find that you need to share utilities between test files (for example, because you have split a single component’s tests among several files), put them in the nearest shared `tests/utilities` file or directory. This differentiated test files from "support" files, and mirrors how we store fixtures.

  ```
  # Bad
  MyComponent/
  └── tests
      ├── feature-one.test.tsx
      ├── feature-two.test.tsx
      └── non-test-file.ts

  # Good
  MyComponent/
  └── tests
      ├── feature-one.test.tsx
      ├── feature-two.test.tsx
      └── utilities.ts

  # Also good
  MyComponent/
  └── tests
      ├── feature-one.test.tsx
      ├── feature-two.test.tsx
      └── utilities/
          └── index.ts
  ```
