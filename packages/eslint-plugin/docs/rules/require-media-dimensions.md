# Require media elements have explicit dimensions specified

Rendering media elements like `img` and `video` in the browser without explicitly specifying `width` and `height` attributes often would cause an unexpected page movement/jump during load which could interrupt a user's current flow and potentially result in unintended actions which in some cases could be costly — this scenario is called a _layout shift_.

However, when the `width` _and_ `height` attributes are specified upfront, modern browsers are able to compute an aspect ratio and reserve the right amount of space while the media loads, leaving only a paint task once the media is ready.

## Rule Details

In order to minimize such jarring experience, this rule enforces the presence of `width` _and_ `height` attributes on standard media elements (`img`, `video`), the Polaris `Image` component, and provides an avenue to specify custom components and elements that should be analyzed for violations.

Examples of **incorrect** code for this rule:

```tsx
<img src="image.png" />
<video src="footage.mp4" width="800" />
// assuming "Image" is imported from `@shopify/polaris`
<Image source="image.png" height="500" />
```

Examples of **correct** code for this rule:

```tsx
<img src="image.png" width="300" height="300" />
<video src="footage.mp4" width="800" height="400" />
// assuming "Image" is imported from `@shopify/polaris`
<Image source="image.png" height="500" width="500" />
```


### Options

In addition to the Polaris `Image` component and standard media elements, you can specify custom elements and components to be analyzed for violations following along these lines...

```js
{
  '@shopify/require-media-dimensions': [
    'error',
    {
      mediaElements: ['CustomImage'],
    },
  ],
}
````


## Further Reading

* [Mapping the width and height attributes of media container elements to their aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/Media/images/aspect_ratio_mapping)
* [Cumulative Layout Shift (CLS)](https://web.dev/cls)
* [Optimize Cumulative Layout Shift](https://web.dev/optimize-cls)
