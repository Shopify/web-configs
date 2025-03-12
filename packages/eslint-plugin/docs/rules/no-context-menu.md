# Disallow contextmenu event listeners (custom right-click behavior)

Overriding the browser's default right-click menu should be avoided in almost all cases. It goes against users expectations and can degrade accessibility.

## Rule Details

The following patterns are considered incorrect by the lint rule:

```jsx
<div onContextMenu={handler} />

element.addEventListener("contextmenu", handler);

useEventListener("contextmenu", handler);
```

## When not to use it

If you want to override the default right click menu. This may be acceptable in rare situations, like in a full-screen web application (eg. The Online Store Theme Editor, Figma, Google Docs).
