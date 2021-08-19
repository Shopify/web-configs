declare module '*.svg' {
  // In sewing-kit webpack builds the default export is ambigious, which means
  // it has to be typed as any. It will one of the following, depending on if
  // the file is in an 'icons' folder or not:
  // - a React SVG component if the file is in an 'icons' folder
  // - otherwise a string representing a data URI (the same as other image files)
  // That's confusing, so in the future where we use a more standard svgr
  // configuration the default export shall always be a data URI string, and
  // there shall be a ReactComponent named export that is a React SVG component
  const image: any;
  export default image;

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  >>;
}

declare module '*.png' {
  const image: string;
  export default image;
}

declare module '*.gif' {
  const image: string;
  export default image;
}

declare module '*.jpeg' {
  const image: string;
  export default image;
}

declare module '*.jpg' {
  const image: string;
  export default image;
}

declare module '*.ico' {
  const image: string;
  export default image;
}
