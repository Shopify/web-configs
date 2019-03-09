# Enzyme

[Enzyme](http://airbnb.io/enzyme/) is a library that makes it easy to traverse and manipulate the output of React components. We recommend it for all React applications complex enough to warrant tests, as the readability it provides outweighs the additional API surface area to learn.

## Table of contents

1. [Complementary packages](#complementary-packages)
1. [Best practices](#best-practices)
1. [Expectations](#expectations)
1. [Event simulations](#event-simulations)

## Complementary packages

We have one utility package for Enzyme, [@shopify/enzyme-utilities](https://github.com/Shopify/quilt/blob/master/packages/enzyme-utilities/README.md). Importantly, this package exposes `trigger`, which lets you call an arbitrary `prop` on a React wrapper (optionally throw a keypath for complex `prop`s). This is our recommended strategy for interacting with components rendered by the component under test, and it will work in cases that Enzyme’s native `simulate()` does not.

## Best practices

* When attempting to find components in Enzyme, try to find using the component itself directly, optionally filtered by props or index when multiple instances of a component are rendered.

  ```js
  // bad
  const myComponent = mount(<MyComponent />);
  const childComponent = myComponent.children().at(0);

  // good
  const myComponent = mount(<MyComponent />);
  const childComponent = myComponent.find(ChildComponent);
  ```

  ```js
  // bad
  const myComponent = mount(<MyComponent />);
  const childComponent = myComponent
    .findWhere((child) =>
      child.type().displayName === 'ChildComponent' &&
      child.prop('foo') === 'bar'
    );

  // good
  const myComponent = mount(<MyComponent />);
  const childComponent = myComponent
    .find(ChildComponent)
    .filter({foo: 'bar'});
  ```

* When assigning an Enzyme wrapper to a variable, name it with a camelcase version of the component’s name.

  > Why? It draws a line between the component being stored and the reference to the wrapper for it, making the test easier to follow.

  ```js
  // bad
  const wrapper = mount(<MyComponent />);

  // good
  const myComponent = mount(<MyComponent />);
  ```

## Expectations

As noted in our [main testing guide](./Testing.md), you should prefer the “smartest” assertions available. When making heavy use of Enzyme and Jest, we recommend including [enzyme-matchers](https://github.com/FormidableLabs/enzyme-matchers), which provide more meaningful assertions for Enzyme wrappers. Below are a couple of common examples where these smarter assertions are useful:

```js
const myComponent = mount(<MyComponent />);

// .toExist()
// prefer:
expect(myComponent.find(ChildComponent)).toExist();

// or:
expect(myComponent).toContainReact(<ChildComponent />);

// over:
expect(myComponent.find(ChildComponent).exists()).toBe(true);
```

Projects not using these matchers should prefer the most meaningful Jest assertion instead:

```js
const myComponent = mount(<MyComponent />);

// .toHaveLength()
// prefer:
expect(myComponent.find(ChildComponent)).toHaveLength(1);

// over:
expect(myComponent.find(ChildComponent).exists()).toBe(true);
```

## Event simulations

* When triggering events on a composite component, use `trigger` on the prop; when doing it for raw DOM elements, use `simulate`.

```js
const myComponent = mount(<MyComponent />);

// prefer:
trigger(myComponent.find(SomeComponent), 'onClick');

// over:
myComponent.find(SomeComponent).simulate('click');
```

```js
const myComponent = mount(<MyComponent />);

// prefer:
myComponent.find('button').simulate('click');

// over:
trigger(myComponent.find('button'), 'onClick');
```
