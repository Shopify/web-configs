module.exports = {
  plugins: ['self'],
  extends: ['plugin:self/typescript', 'plugin:self/prettier'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
