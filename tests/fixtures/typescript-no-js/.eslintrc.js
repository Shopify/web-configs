module.exports = {
  plugins: ['self'],
  extends: ['plugin:self/typescript', 'plugin:self/node'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
