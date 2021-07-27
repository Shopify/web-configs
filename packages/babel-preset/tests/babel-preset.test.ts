import {transform} from '@babel/core';

import shopifyCommonPreset from '../index';

describe('babel-preset-e2e-test', () => {
  describe('legacy decorator tests', () => {
    it('transforms code without errors or warnings', async () => {
      const {code} = transform(
        testContent,
        configFactory({presetOptions: {typescript: true}}),
      );
      expect(code).toBe(testContentOutput.trim());
    });

    it('throws an error when encountering invalid code, if decorator transforms are not enabled', async () => {
      expect(() => {
        transform(testContent, configFactory());
      }).toThrow('Unexpected token');
    });
  });
});

interface FactoryOptions {
  presetOptions?: Parameters<typeof shopifyCommonPreset>[1];
  targets?: string;
}

function configFactory({
  presetOptions = {},
  targets = 'current node',
}: FactoryOptions = {}) {
  return {
    presets: [[shopifyCommonPreset, presetOptions]],
    targets,
    filename: 'test-script.ts',
    configFile: false,
  };
}

const testContent = `
function uppercase() {
  return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
      return originalMethod.apply(this, args).toUpperCase();
    };
    return descriptor;
  };
};

class ExampleClass {
  @uppercase()
  method() {
    return 'test';
  }
}

console.log(new ExampleClass().method());
`;

const testContentOutput = `
"use strict";

var _dec, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function uppercase() {
  return function (_target, _propertyKey, descriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      return originalMethod.apply(this, args).toUpperCase();
    };

    return descriptor;
  };
}

;
let ExampleClass = (_dec = uppercase(), (_class = class ExampleClass {
  method() {
    return 'test';
  }

}, (_applyDecoratedDescriptor(_class.prototype, "method", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype)), _class));
console.log(new ExampleClass().method());
`;
