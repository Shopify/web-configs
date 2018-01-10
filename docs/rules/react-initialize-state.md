# Requires that React component state be initialized when it has a non-empty type (react-initialize-state)

Forgetting to initialize a React component’s state can lead to hard-to-understand errors when you try to access that state during the component’s lifecycle. This rule forces you to initialize state when you have provided a non-empty Flow or TypeScript type for state to `React.Component` or `React.PureComponent`.

## Rule Details

The following patterns are considered warnings:

```ts
class MyComponent extends React.Component<Props, State> {}
class MyComponent extends React.PureComponent<{}, {visible?: boolean}> {
  state = null;
}
```

The following patterns are not warnings:

```ts
class MyComponent extends React.Component<Props, {}> {}
class MyComponent extends React.Component<Props, never> {}
class MyComponent extends React.Component<Props, State> {
  state = {};
}
class MyComponent extends React.Component<Props, State> {
  state = getState();
}
class MyComponent extends React.Component<Props, State> {
  constructor() {
    this.state = {};
  }
}
```

