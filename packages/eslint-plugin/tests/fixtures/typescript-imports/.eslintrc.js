module.exports = {
  extends: ['plugin:@shopify/typescript', 'plugin:@shopify/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
