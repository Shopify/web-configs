# Enforce Pascal case when naming enums. (typescript/prefer-pascal-case-enums)

Provides consistency when naming [Enums](https://www.typescriptlang.org/docs/handbook/enums.html) within TypeScript code.

## Rule Details

This rule enforces all TypeScript enums to be in pascal case. An error will occur if another capitalization rule is used (such as snake case or lowercase) when naming TypeScript Enums.

Examples of **incorrect** code for this rule:

```ts
enum sortorder {
  most_recent,
  LEAST_RECENT,
  newest,
  OLDEST
}
```

Examples of **correct** code for this rule:

```ts
enum SortOrder {
  MostRecent,
  LeastRecent,
  Newest,
  Oldest
}
```

## When Not To Use It

If you have established coding standards using a different naming convention for TypeScript Enums, you can safely disable this rule.
