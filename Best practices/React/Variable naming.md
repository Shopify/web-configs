# Variable naming

### Abbreviations

In order to be consistent with GraphQL arguments looking for ids, never capitalize the `D` in `id` when the referring to a GraphQL generated id. Use either `<noun>Id` in camel case or simply `id`.

```javascript
// bad
const productID = product.id;

// good
const productId = product.id;
```

All other abbreviations should be named with all uppercase letters unless the variable starts with the abbreviation, in which case it should be all lowercase.

```javascript
// bad
const SKU = product.sku;
const SKULabel = product.sku;
const resourceSku = resource.sku;

// good
const sku = product.sku;
const skuLabel = 'SKU';
const resourceSKU = resource.sku;
```

### Enums

Use pascal case when naming enums, even if the enum contains an abbreviation.


```ts
// bad
enum sortorder {
  most_recent,
  LEAST_RECENT,
  newest,
  OLDEST,
}

// good
enum SortOrder {
  MostRecent,
  LeastRecent,
  Newest,
  Oldest
}
```


### Sub-component Markup

Use `<componentName>Markup` in camel case for storing generated partial jsx output within a render function.

```javascript
// good
render () {
  const someComponentMarkup = <SomeComponent />;
	const anotherComponentMarkup = <AnotherComponent />;


  return (
    <>
      {someComponentMarkup}
      {anotherComponentMarkup}
    </>
  );
}
```

### Booleans

Omit redundant `is/can/has` prefixes and when tracking an asynchronous operation use `<operation>InProgress`.

```javascript
// bad
const isOpen = this.state.open;
const isModalVisible = true;
const isDeleting = true;

// good
const open = this.state.open;
const modalVisible = true;
const deleteInProgress = true;
```

The same rule applies when used as props.

```javascript
// bad
<Component open={isOpen} loading={isDeleting} />

// good
<Component open={open} loading={deleteInProgress} />
```

### Functions

Use `handle<Event>` for methods that are called in response to events, and for props that act as event listeners use `on<Event>`.

```javascript
<Component onClick={this.handleClick} />
```

More complicated components often require prefixed `Event` names in order to specify the part of the component the handler is applied. In these cases use `on<Noun><Event>` and `handle<Noun><Event>`.

```javascript
<Component
  onTitleChange={this.handleTitleChange}
  onDescriptionChange={this.handleDescriptionChange}
/>
```

### Arrays/Sets

Use plurals for state or props that store multiples.

```javascript
<Component keys={['j', 'k']} />
```
