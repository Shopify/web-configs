# React API design

## Components

TODO

## Hooks

When building custom hooks, make sure to use the built-in hooks React provides as a guide. These hooks will be the most familiar to developers, and will make composing them in to your custom hook much easier. In particular, follow these rules of thumb:

* Where possible, return two or fewer values from a hook, and return them in a tuple, like `React.useState` (if you have no choice but to return more than three values, return them as a single object instead)

* If your hook runs any kind of function in a `React.useEffect` block, you should accept an array of inputs as the second argument to the hook, like `React.useEffect`. These can be merged with any inputs that your function depends on. Similarly, you should preserve the ability of the custom hook to return a cleanup function:

  ```tsx
  function useEffectWithMyContext(
    effect: (object: MyObject) => void | (() => void),
    inputs: unknown[] = [],
  ) {
    const myObject = React.useContext(MyContext);

    React.useEffect(() => {
      const cleanup = effect(myObject);
      return () => {
        myObject.cleanup();

        if (cleanup) {
          cleanup();
        }
      };
    }, [myObject, ...inputs]);
  }
  ```

* If your component requires that the user pass an argument that can be expensive to construct, allow them to pass a "lazy" version (a function that returns the object) instead, like `React.useState`.
