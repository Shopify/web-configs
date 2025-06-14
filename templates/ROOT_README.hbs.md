[comment]: # 'NOTE: This file is generated and should not be modify directly. Update `templates/ROOT_README.hbs.md` instead'

# Web Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

This repository contains common configurations for building web apps at Shopify.

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Package Index

| Name | NPM | Size |
| ---- | --- | ---- |

{{#each jsPackageNames}}
| [{{this}}](packages/{{this}}) | [![npm version](https://badge.fury.io/js/%40shopify%2F{{this}}.svg)](https://badge.fury.io/js/%40shopify%2F{{this}}) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@shopify/{{this}}.svg)](https://img.shields.io/bundlephobia/minzip/@shopify/{{this}}.svg) |
{{/each}}

## Contribution

This repository has a CLA-Bot running which will ask contributors to sign a Contributor License Agreement (CLA).

Shopify has also adopted a Code of Conduct that we expect contributors to adhere to. Please read the [full text](./CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

### Ways to contribute

There are many ways to contribute, some of which are:

- Filing [bug reports](https://github.com/Shopify/web-configs/issues/new?template=BUG_REPORT.md)
- Requesting new features or packages via [an issue](https://github.com/Shopify/web-configs/issues/new/choose)
- Improving the existing codebase by picking up an issue, improving tests, or furthering documentation

### Development

#### Getting Started

```bash
# Shopify Employee
dev clone web-configs
dev up

# External Contributor - To start working on the codebase, first fork the repo, then clone it
git clone git@github.com:{your-username}/web-configs.git # replace {your-username} with your GitHub handle
pnpm i # install project dependencies
```

##### What is `dev`?

`dev` is a tool to standardize a small set of common tasks across all projects at Shopify. If you're wondering how to execute the dev <cmd> commands as an external contributor, you can see where they are defined in this project's `dev.yml` file.

#### Testing your changes in a local project

Run `/snapit` on a PR to generate a snapshot version that can be installed like any package, and install it in your local package.

#### Documentation

If your change affects the public API of any packages within this repository (i.e. adding or changing arguments to a function, adding a new function, changing the return value, etc), please ensure the documentation is updated, and a changelog is added to reflect this. Documentation is in the `README.md` files of each package. If further documentation is needed please communicate via a GitHub issue.

#### Testing

The packages in this repository are used in mission-critical production scenarios. As such, we do not merge any untested code.

To run the full test suite, simply run `dev test` or `pnpm run test`.

### Releasing

The release process currently involves some manual steps to complete. Once your PR has been merged, our team will orchestrate when to cut a new release.

**Note** Version numbers in `package.json` files should never be altered manually. This will be done via scripts as part of the release process.

## License

MIT &copy; [Shopify](https://shopify.com/), see [LICENSE.md](LICENSE.md) for details.

<a href="http://www.shopify.com/"><img src="https://cdn.shopify.com/assets2/brand-assets/shopify-logo-main-8ee1e0052baf87fd9698ceff7cbc01cc36a89170212ad227db3ff2706e89fd04.svg" alt="Shopify" width="200" /></a>
