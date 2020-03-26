module.exports = {
  extends: ['plugin:shopify/typescript', 'plugin:shopify/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
