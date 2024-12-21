---
'@shopify/eslint-plugin': major
---

Remove configuration of deprecated formatting rules.

Per https://eslint.org/blog/2023/10/deprecating-formatting-rules/ and https://typescript-eslint.io/blog/deprecating-formatting-rules several formatting related rules have been deprecated from `eslint` core and `typescript-eslint` and moved into `@stylistic/eslint-plugin`. These rules are removed in typescript-eslint v8 (released) and probably eslint v10 (unreleased).

To prepare for future updates we are removing our configuration of these rules. We recommend that you use Prettier (https://prettier.io/) for formatting considerations - either by running it in parallel with ESLint or as part of ESLint through using `eslint-plugin-prettier` via the `prettier` config provided by `@shopify/eslint-plugin`. If you do not wish to use Prettier, then we suggest you configure rules from `@stylistic/eslint-plugin` (https://eslint.style/packages/default).

Note that if you already use the `prettier` config then this removal will have no effect as all these rules were already turned off.

Configuration for the following rules in the `es5`, `esnext` and `typescript` configs have been removed:

From `typescript-eslint`:

- @typescript-eslint/brace-style
- @typescript-eslint/func-call-spacing
- @typescript-eslint/indent
- @typescript-eslint/keyword-spacing
- @typescript-eslint/member-delimiter-style
- @typescript-eslint/no-extra-parens
- @typescript-eslint/quotes
- @typescript-eslint/semi
- @typescript-eslint/space-infix-ops
- @typescript-eslint/type-annotation-spacing

From ESLint core:

- array-bracket-spacing
- arrow-parens
- arrow-spacing
- block-spacing
- brace-style
- comma-dangle
- comma-spacing
- comma-style
- computed-property-spacing
- dot-location
- eol-last
- func-call-spacing
- function-paren-newline
- generator-star-spacing
- indent-legacy
- jsx-quotes
- key-spacing
- keyword-spacing
- lines-around-comment
- lines-between-class-members
- max-statements-per-line
- new-parens
- newline-per-chained-call
- no-confusing-arrow
- no-extra-semi
- no-floating-decimal
- no-mixed-operators
- no-mixed-spaces-and-tabs
- no-multi-spaces
- no-multiple-empty-lines
- no-tabs
- no-trailing-spaces
- no-whitespace-before-property
- object-curly-spacing
- one-var-declaration-per-line
- operator-linebreak
- padding-line-between-statements
- quote-props
- quotes
- rest-spread-spacing
- semi
- semi-spacing
- semi-style
- space-before-blocks
- space-before-function-paren
- space-in-parens
- space-infix-ops
- space-unary-ops
- spaced-comment
- switch-colon-spacing
- template-curly-spacing
- template-tag-spacing
- wrap-iife
- yield-star-spacing

We retain configuration for the following rules for the moment - even though they are depreated - as prettier does not have opinions about whitespace in these cases:

- lines-between-class-members
- padding-line-between-statements
- spaced-comment
