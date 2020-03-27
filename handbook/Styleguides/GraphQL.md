# GraphQL styleguide

This document outlines our stylistic preferences for authoring GraphQL queries, mutations, and subscriptions. It does cover building the APIs themselves. If you are looking for best practices on writing client-side code that interacts with GraphQL, you can read our [guide on the subject](../Best%20practices/GraphQL).

## Table of contents

1. [Using this guide](#using-this-guide)
1. [Naming](#naming)
1. [Whitespace and punctuation](#whitespace-and-punctuation)

## Using this guide

Any developer using Sewing Kit will automatically have their GraphQL documents formatted to match many of the rules below. If your editor supports [prettier](https://prettier.io), the rules will be applied on save. If not, simply install Sewing Kit and run the `format` command:

```sh
yarn add @shopify/sewing-kit
yarn run sewing-kit format
```

## Naming

* [1.1](#1.1) <a name="1.1"></a> Operation names should be pascal case.

  > Why? This is the way GraphQL does it in the documentation, and it more clearly differentiates the name from the fields, which are typically camelcase in most APIs.

  ```graphql
  # bad
  mutation example {
    field
  }

  # good
  mutation Example {
    field
  }
  ```

* [1.2](#1.2) <a name="1.2"></a> Operation names should not include the word `Query`, `Mutation`, or `Subscription`.

  > Why? The type of operation is already indicated by the keyword preceding the operation name.

  ```graphql
  # bad
  mutation ExampleMutation {
    field
  }

  # good
  mutation Example {
    field
  }
  ```

* [1.3](#1.3) <a name="1.3"></a> GraphQL documents should be named as the operation name, postfixed with the type of GraphQL operation.

  > Why? This helps make it easier to identify the operation contained in the document.

  ```graphql
  # all bad

  # Example.graphql
  # example.graphql
  # example-query.graphql
  # query.graphql
  
  query Example {
    field
  }

  # good

  # ExampleQuery.graphql
  
  query Example {
    field
  }
  ```

* [1.4](#1.4) <a name="1.4"></a> When importing GraphQL operations into JavaScript files (or using `graphql-tag`), the variable should be named as the operation name, camelcased. It should also include the `Query`/ `Mutation`/ `Subscription` postfix, as this information is not always immediately evident from the variable name otherwise.

  > Why? Pascal case names are typically reserved for "instantiable" structures (like classes and React components), and for types. Neither of these is true of importing GraphQL documents. Screaming snake case is sometimes used in examples online, but at Shopify, we reserve this for more primitive constants.

  ```js
  // all bad
  import Example from './ExampleQuery.graphql';
  import example from './ExampleQuery.graphql';
  import query from './ExampleQuery.graphql';

  const EXAMPLE_QUERY = gql`
    query Example {
      field
    }
  `;

  // good
  import exampleQuery from './ExampleQuery.graphql';

  const exampleQuery = gql`
    query Example {
      field
    }
  `;
  ```

* [1.5](#1.5) <a name="1.5"></a> Prefer the use of `.graphql` over `.gql` file extensions for GraphQL documents.

  > Why? Because there's no point in having both, and .graphql is easier to grok at a glance.

## Whitespace and punctuation

* [2.1](#2.1) <a name="2.1"></a> Do not place commas after each field in a multi-line selection set.

  ```graphql
  # bad
  query Example {
    fieldOne,
    fieldTwo,
  }

  # good
  query Example {
    fieldOne
    fieldTwo
  }
  ```

* [2.2](#2.2) <a name="2.2"></a> When adding multiple fields to a selection set, put each new field on its own line

  > Why? This makes for cleaner diffs when adding or removing additional fields from the selection

  ```graphql
  # bad
  query Example {
    anObject { fieldOne, fieldTwo }
  }

  # good
  query Example {
    anObject {
      fieldOne
      fieldTwo
    }
  }
  ```

* [2.3](#2.3) <a name="2.3"></a> Always place a space between a colon and the next character. This includes variable declarations, field arguments, and aliased fields.

  ```graphql
  # bad
  query Example($first:Int!) {
    aFewObjects:objects(first:$first)
  }

  # good
  query Example($first: Int!) {
    aFewObjects: objects(first: $first)
  }
  ```

* [2.4](#2.4) <a name="2.4"></a> Do not place a space between the operation name and the opening parenthesis for variables, or between field names and argument lists.

  ```graphql
  # bad
  query Example ($first: Int!) {
    objects (first: $first)
  }

  # good
  query Example($first: Int!) {
    objects(first: $first)
  }
  ```
