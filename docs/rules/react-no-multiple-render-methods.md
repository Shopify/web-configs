# Disallow multiple render methods in React components. (react-no-multiple-render-methods)

As a React component grows to render many elements, it is tempting to split the render method into multiple “sub-render” methods. While this may seem like an improvement in readability, the component's state, props, and class methods are still shared, making it difficult to identify which are used by each additional render method. The entire class becomes objectively more complicated, and it would be more effective to break those additional elements into entirely new components instead.

## Rule Details

This rule disallows any `renderFoo` methods on a class.

Examples of **incorrect** code for this rule:


```ts
class MyComponent extends React.Component {
  renderFoo() {
    return (
      <div>
        {this.state.bar}
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.renderFoo()}
      </div>
    )
  }
}
```

Examples of **correct** code for this rule:

```ts
import Foo from './components/Foo';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <Foo bar={this.state.bar} />
      </div>
    )
  }
}
```

## When Not To Use It

If you do not want to restrict render methods on React class components, you can safely disable this rule.
