[comment]: # (NOTE: This file is generated and should not be modify directly. Update `templates/ROOT_README.hbs.md` instead)

# Web Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repository contains common configuration and living [guidances](handbook) that Shopify uses to build web UI.

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Package Index

| package |     |     |
| ------- | --- | --- |
{{#each jsPackageNames}}
| {{this}} | [directory](packages/{{this}}) | [![npm version](https://badge.fury.io/js/%40shopify%2F{{this}}.svg)](https://badge.fury.io/js/%40shopify%2F{{this}}) |
{{/each}}

## Want to contribute?

Check out our [Contributing Guide](./.github/CONTRIBUTING.md). We welcome bug reports, enhancements, and feature requests via Github issues.

## License

MIT &copy; [Shopify](https://shopify.com/), see [LICENSE.md](LICENSE.md) for details.

<a href="http://www.shopify.com/"><img src="https://cdn.shopify.com/assets2/brand-assets/shopify-logo-main-8ee1e0052baf87fd9698ceff7cbc01cc36a89170212ad227db3ff2706e89fd04.svg" alt="Shopify" width="200" /></a>
