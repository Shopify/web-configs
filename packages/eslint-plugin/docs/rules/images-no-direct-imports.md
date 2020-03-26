# Prevent directly importing image files and instead force usage of an index file (image-no-direct-imports)

Image files should live in a directory (e.g. `icons`, `illustrations` or `images`) that must contain a dedicated index file that re-exports all the images in that directory.

Files that consume images must import from that index file instead of importing images directly. This rule enforces that convention by disallowing importing directly from an image in any file except the index file in the same dorectory as the image.

## Rule Details

Example of **incorrect** code for this rule:


```js
// components/Foo/Foo.js
import icon1 from './icons/icon1.svg';
```


Example of **correct** code for this rule:

```js
// components/Foo/icons/index.js
export {default as icon1} from './icon1.svg';

// components/Foo/Foo.js
import {icon1} from './icons';
```

## When Not To Use It

If you do not wish to enforce import locations for images, then you can safely disable this rule.
