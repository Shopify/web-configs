# Requires that React component state be typed in TypeScript. (react-type-state)

TypeScript will not correctly check your state instance property against the state declared in the component’s type initialization unless an explicit type annotation is provided. This rule enforces that the type annotation is provided when it detects a meaningful state type in a TypeScript React component.

## Rule Details

The following pattern is considered a warning:

```ts
class MyComponent extends React.Component<{}, State> {
  state = {};
}
```

The following patterns are not warnings:

```ts
class MyComponent extends React.Component<Props, never> {}
class MyComponent extends React.Component<Props, State> {
  state: State = {};
}
```
