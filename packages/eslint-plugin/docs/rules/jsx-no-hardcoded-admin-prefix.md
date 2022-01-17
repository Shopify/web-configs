# Prevent hardcoding /admin prefix to routes. (jsx-no-hardcoded-admin-prefix)

We are on our way to remove the path prefix `/admin` as part of Unified Admin project.
The prefix is being extracted into a global state/variable to be shared across web as much as we can.
In the meantime, we draw the line with this rule so we don't keep adding routes with the hardcoded prefix.

## Rule Details

`path` attribute of `Route` components can not contain `/admin` at the beginning of their string literals or templates.

Examples of **incorrect** code for this rule:

```tsx

<Route path="/admin/orders">...</Route>

```

Examples of **correct** code for this rule (please search for `adminPathPrefix` in the code to see where you can grab it from):

```tsx

<Route path={`${adminPathPrefix}/orders`}>...</Route>

```
