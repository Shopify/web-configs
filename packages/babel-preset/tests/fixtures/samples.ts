const testScript = `
export default function memoize(): any {
  return function <T>(
    _target: {[key: string]: unknown},
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const {value: method} = descriptor;

    if (!method || !(method instanceof Function)) {
      return descriptor;
    }

    return {
      get: function get() {
        const newDescriptor = {
          configurable: true,
          value: () => 'foo',
        };

        Object.defineProperty(this, propertyKey, newDescriptor);
        return newDescriptor.value;
      },
    };
  };
}

class ExampleClass {
  @memoize()
  method() {
    return 'bar';
  }
}

(() => {
  const example = new ExampleClass();
  console.log(example.method());
})();
`;

const testScriptOutput = `
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = memoize;

var _dec, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function memoize() {
  return function (_target, propertyKey, descriptor) {
    const {
      value: method
    } = descriptor;

    if (!method || !(method instanceof Function)) {
      return descriptor;
    }

    return {
      get: function get() {
        const newDescriptor = {
          configurable: true,
          value: () => 'foo'
        };
        Object.defineProperty(this, propertyKey, newDescriptor);
        return newDescriptor.value;
      }
    };
  };
}

let ExampleClass = (_dec = memoize(), (_class = class ExampleClass {
  method() {
    return 'bar';
  }

}, (_applyDecoratedDescriptor(_class.prototype, "method", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "method"), _class.prototype)), _class));

(() => {
  const example = new ExampleClass();
  console.log(example.method());
})();
`;

const noDecorators = `
export class ExampleClass {
  method() {
    return 'bar';
  }
}

(() => {
  const example = new ExampleClass();
  console.log(example.method());
})();
`;

const noDecoratorsOutput = `
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExampleClass = void 0;

class ExampleClass {
  method() {
    return 'bar';
  }

}

exports.ExampleClass = ExampleClass;

(() => {
  const example = new ExampleClass();
  console.log(example.method());
})();
`;

export {testScript, testScriptOutput, noDecorators, noDecoratorsOutput};
