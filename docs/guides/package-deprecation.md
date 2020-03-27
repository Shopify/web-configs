# Deprecating a package

## 1. Update `packages/{deprecated-package-name}/README.md` and `packages/{deprecated-package-name}/CHANGELOG.md`

A note should be added to both of those files.

Showing prominently

- The last version supported.
- Alternative to the deprecated package.

## 2. Delete most files in `packages/{deprecated-package-name}`

Leave only `README.md` and `CHANGELOG.md`
(It is important to delete `package.json` so lerna will no longer pick it up for future releases.)

## 3. Global search deprecated package

Do a global search for

- Any package with `{deprecated-package-name}` listed as dependency
- Any documentation that reference `{deprecated-package-name}`

and update those accordingly.

## 4.Update README

run `yarn plop docs` to remove `{deprecated-package-name}` from the main README

## 5. Create your deprecation PR

Create your PR with all the above changes and follow the normal PR review protocol to merge into master.

## 6. Deprecate the package on npm

While your PR is being reviewed, follow [npm doc](https://docs.npmjs.com/cli/deprecate) to construct and run the deprecation command.

(**Note** Your will need npm permission to run this command, Shopifolk should follow the instructions from this [Discourse issue](https://discourse.shopify.io/t/how-can-i-deprecate-an-npm-package-version/6652) or ping @Shopify/web-foundation team to do so.)
