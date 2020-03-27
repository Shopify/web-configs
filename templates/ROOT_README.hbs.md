[comment]: # (NOTE: This file is generated and should not be modify directly. Update `templates/ROOT_README.hbs.md` instead)
# Web foundation

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![Build Status](https://travis-ci.org/Shopify/web-foundation.svg?branch=master)](https://travis-ci.org/Shopify/web-foundation)
[![codecov](https://codecov.io/gh/Shopify/web-foundation/branch/master/graph/badge.svg)](https://codecov.io/gh/Shopify/web-foundation)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repo is the living guide to how we build web UI at Shopify. It captures the [principles](Principles) we use to make decisions, our [best practices](Best%20practices) and [styleguides](Styleguides) for writing UI code, and a [log of decisions](Decision%20records) that led us to this foundation. It also provides a list of [resources](Resources) for mastering the different parts of web UI development.

## Usage

The Web foundation repo is managed as a monorepo that is composed of many npm packages.
Each package has its own `README` and documentation describing usage.

### Package Index

| package |     |     |
| ------- | --- | --- |
{{#each jsPackageNames}}
| {{this}} | [directory](packages/{{this}}) | [![npm version](https://badge.fury.io/js/%40shopify%2F{{this}}.svg)](https://badge.fury.io/js/%40shopify%2F{{this}}) |
{{/each}}

## Want to contribute?

Check out our [Contributing Guide](./.github/CONTRIBUTING.md)

## Questions?

For Shopifolk, you can reach out to us in Slack in the `#web-foundation-tech` channel. For external inquiries, we welcome bug reports, enhancements, and feature requests via Github issues.

## License

MIT &copy; [Shopify](https://shopify.com/), see [LICENSE.md](LICENSE.md) for details.

<a href="http://www.shopify.com/"><img src="https://cdn.shopify.com/assets2/brand-assets/shopify-logo-main-8ee1e0052baf87fd9698ceff7cbc01cc36a89170212ad227db3ff2706e89fd04.svg" alt="Shopify" width="200" /></a>
