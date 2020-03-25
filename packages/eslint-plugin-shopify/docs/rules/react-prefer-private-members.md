# Disallow public members within React component classes (react-prefer-private-members)

This rule enforces all non-React-specific members be marked private in React class components.

## Rule Details

When a member of class is marked private, it cannot be accessed from outside of its containing class. This restriction is prefered when writing React components, where encapsulation is almost always desireable.

The following patterns are considered warnings:

```ts
class MyComponent extends React.Component<Props, State> {
  publicMethod() {}
  alsoPublic: string;
}
```

The following patterns are not warnings:
```ts
class MyComponent extends React.Component<Props, State> {
  private publicMethod() {}
  private alsoPublic: string;
}
```

The Lifecycle methods and static properties that are part of the React API are not required to be private for this rule.

```ts
class MyComponent extends React.Component<Props, State> {
  private publicMethod() {}
  private alsoPublic: string;
  static propTypes = {}
  static defaultProps = {}
  static childContextTypes = {}
  static contextTypes = {}
  getDerivedStateFromProps() {}
  componentWillMount() {}
  UNSAFE_componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  UNSAFE_componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  UNSAFE_componentWillUpdate() {}
  getSnapshotBeforeUpdate() {}
  componentDidUpdate() {}
  componentDidCatch() {}
  componentWillUnmount() {}
  render() {}
}
```

Exposing subcomponents as public static members is not considered a warning for this rule.

```ts
class MyComponent extends React.Component<Props, State> {
  static MySubComponent = MySubComponent;
  render() {}
}
```

## When Not To Use It

If you do not want to restrict public members on React class components, you can safely disable this rule.
