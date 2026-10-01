# Creating Releases

Changelogs and releases are managed using [`changesets`](https://github.com/changesets/changesets).

## Publishing authentication

Both mainline and snapshot releases use [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/) with GitHub Actions OIDC instead of a stored npm token.

Each public package in this repository needs two GitHub Actions trusted publisher configurations on npmjs.com:

- Organization: `Shopify`
- Repository: `web-configs`
- Workflow filenames: `release.yml` and `snapit.yml`, configured separately
- Environment name: leave empty; neither workflow uses a GitHub environment
- Allowed actions: enable direct `npm publish`; staged publishing alone is insufficient

Keep `NPM_TOKEN` and `NODE_AUTH_TOKEN` as literal empty strings in both publishing steps. Both workflows install an OIDC-capable npm CLI before Changesets publishes through pnpm.

When migrating from token authentication, verify a mainline release and a snapshot release before removing this repository's access to the organization-level `NPM_TOKEN` secret. Do not delete or revoke that shared credential globally unless its owner confirms no other repositories still need it. A dry-run validates packaging but does not verify OIDC authentication.

## Performing a mainline release

We have a [GitHub Action](https://github.com/Shopify/web-configs/blob/main/.github/workflows/release.yml) that leverages [`changesets/action`](https://github.com/changesets/action) to handle the release process.

Upon merging PRs with a changeset entry, it shall create a "Version Packages" PR that shall contain any changeset changes since the last release.

To perform a release:

- Find the [currently open "Version Packages" PR](https://github.com/Shopify/web-configs/pulls?q=is%3Apr+is%3Aopen+author%3Aapp%2Fshopify-github-actions-access+%22Version+Packages%22)
- Merge the PR by waiting for CI to complete and then choosing `Squash and merge`.

The `Release` action shall run on the merge commit on the `main` branch, and shall publish the npm packages and create a GitHub tag and release for each package that is referenced in the PR. You can find the action log by looking at the release commit status on the merge commit.

## Performing a snapshot release

[Snapshot releases](https://github.com/changesets/changesets/blob/main/docs/snapshot-releases.md) publish the state of a single PR. This lets you rapidly test a PR in a consuming project without dealing with `yalc` and its occasional weirdness.

To perform a snapshot release:

- Ensure your PR contains at least one changeset entry.
- Comment `/snapit` on your PR.

The `Snapit` action shall run, and shall publish a new version of the packages in your PR's changeset entry with the `snapshot` dist tag. On sucessful publication a comment shall be posted in the issue detailing the published packages and details on how to use them in your consuming project.

This functionality is only available in PRs that point to a branch in the `Shopify/web-configs` repository - PRs from forks are not supported.
