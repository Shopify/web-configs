# TypeScript

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that we strongly advise projects to use in favour of vanilla JavaScript. This enables projects to leverage TypeScript's compiler to help catch a number of potential bugs and errors in projects well before it ships. In complement with TypeScript, the [VSCode editor](https://code.visualstudio.com/docs/languages/typescript) provides TypeScript language-specific features such as inline feedback from TypeScript's typechecker. 


## Table of contents

1. [Purpose of this guide](#purpose-of-this-guide)
1. [Complementary packages](#complementary-packages)
1. [Scaling large codebases](#scaling-large-codebases)

## Purpose of this guide

This guide covers Shopify's approach to using TypeScript. It also highlights our suite of TypeScript related packages and how we use [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) to scale our large TypeScript codebases. 


## Complementary packages

Additional tooling is heavily integrated into TypeScript projects at Shopify to improve our development experience and developer confidence.

* [`@shopify/typescript-configs`](https://github.com/Shopify/web-foundation/tree/master/packages/typescript-configs): Common base configuration files to simplify TypeScript project setup.
* [`@shopify/eslint-plugin` TypeScript config](https://github.com/Shopify/web-foundation/blob/master/packages/eslint-plugin/lib/config/typescript.js) ESLint config for TypeScript codebases
* [`graphql-typescript-definitions`](https://github.com/Shopify/graphql-tools-web/tree/master/packages/graphql-typescript-definitions): Tooling to generate TypeScript definition files from .graphql documents
* [`@shopify/useful-types`](https://github.com/Shopify/quilt/tree/master/packages/useful-types): A few handy TypeScript types.

## Scaling large codebases

As TypeScript projects grow in size, it's not uncommon to experience longer typechecking, compile times, increased memory usage, and most noticeably, slower feedback in VSCode's TypeScript Language features. To address these issues TypeScript provides [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html). To leverage this in your project, check out our [guide on Project References](./Project-References.md)


