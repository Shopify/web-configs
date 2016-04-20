// see https://github.com/evcohen/eslint-plugin-jsx-a11y

module.exports = {
  // Enforce that <img> JSX elements use the alt prop.
  'jsx-a11y/img-uses-alt': 'error',
  // Enforce that <label> elements have the htmlFor prop.
  'jsx-a11y/label-uses-for': 'error',
  // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
  'jsx-a11y/mouse-events-map-to-key-events': 'error',
  // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
  'jsx-a11y/no-access-key': 'error',
  // Enforce an anchor element's href prop value is not just #.
  'jsx-a11y/no-hash-href': 'error',
  // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
  'jsx-a11y/onclick-uses-role': 'off',
  // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
  'jsx-a11y/redundant-alt': 'warn',
  // Enforce that onBlur is used instead of onChange.
  'jsx-a11y/use-onblur-not-onchange': 'off',
  // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
  'jsx-a11y/valid-aria-role': 'error',
};
