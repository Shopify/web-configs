import {resolve as resolvePath} from 'path';

import {transform} from '@babel/core';

import shopifyCommonPreset from '../index';

import {
  testScript,
  testScriptOutput,
  noDecorators,
  noDecoratorsOutput,
} from './fixtures/samples';

describe('babel-preset-e2e-test', () => {
  describe('legacy decorator tests', () => {
    it('runs babel successfully when typescript is true', async () => {
      const baseConfig = configFactory({typescript: true});
      const {code} = transform(testScript, baseConfig);
      expect(baseConfig.assumptions).toStrictEqual(
        expect.objectContaining({
          setPublicClassFields: true,
          privateFieldsAsProperties: true,
        }),
      );
      expect(code).toBe(testScriptOutput.trim());
    });

    it('runs babel without decorator proposals when typescript is false', async () => {
      const noDecorConfig = configFactory();
      const {code} = transform(noDecorators, noDecorConfig);
      expect(noDecorConfig.assumptions).toStrictEqual({});
      expect(code).toBe(noDecoratorsOutput.trim());
    });
  });
});

type FactoryOptions = Partial<{
  targets: string;
  env: 'test' | 'development';
  modules: string;
  typescript: boolean;
  legacyDecorators: boolean;
}>;

function configFactory({
  targets = 'current node',
  env = 'test',
  modules = 'commonjs',
  typescript = false,
}: FactoryOptions = {}) {
  const config = shopifyCommonPreset(
    {
      env() {
        return env;
      },
    },
    {modules, typescript},
  );
  config.filename = 'test-script.ts';
  config.targets = targets;
  config.configFile = false;
  return config;
}
