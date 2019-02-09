const {RuleTester} = require('eslint');
const {fixtureFile} = require('../../utilities');
const rule = require('../../../lib/rules/images-no-direct-imports');

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
});

function errors(type, folderPath, filePath) {
  return [
    {
      type,
      message: `Prefer importing image files from the index file of the directory ("${folderPath}") instead of the direct path to the image file ("${filePath}").`,
    },
  ];
}

ruleTester.run('images-no-direct-imports', rule, {
  valid: [
    // Importing / Exporting svg files from the folder index is valid
    {
      code: "import icon1 from './icon1.svg'",
      filename: fixtureFile('basic-app/app/components/Foo/icons/index.js'),
    },
    {
      code: "import * as icon1 from './icon1.svg'",
      filename: fixtureFile('basic-app/app/components/Foo/icons/index.js'),
    },
    {
      code: "export {default as icon1} from './icon1.svg'",
      filename: fixtureFile('basic-app/app/components/Foo/icons/index.js'),
    },
    {
      code: "export * from './icon1.svg'",
      filename: fixtureFile('basic-app/app/components/Foo/icons/index.js'),
    },
    // Importing / Exporting icon index file contents from a component is valid
    {
      code: "import {icon1} from './icons'",
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "import * as icon1 from './icons'",
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "export {default as icon1} from './icons'",
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "export * from './icons'",
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    // Exports without a source file
    {
      code: 'export {a, b}; export default c;',
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
  ],

  invalid: [
    // Importing / Exporting an icon directly from component file is invalid
    {
      code: "import icon1 from './icons/icon1.svg'",
      errors: errors('ImportDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "import * as icon1 from './icons/icon1.svg'",
      errors: errors('ImportDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: "export {default as icon1} from './icons/icon1.svg'",
      errors: errors('ExportNamedDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    {
      code: "export * from './icons/icon1.svg'",
      errors: errors('ExportAllDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/Foo.js'),
    },
    // Importing / Exporting an icon directly from some other index file
    {
      code: "import icon1 from './icons/icon1.svg'",
      errors: errors('ImportDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: "import * as icon1 from './icons/icon1.svg'",
      errors: errors('ImportDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: "export {default as icon1} from './icons/icon1.svg'",
      errors: errors('ExportNamedDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
    {
      code: "export * from './icons/icon1.svg'",
      errors: errors('ExportAllDeclaration', './icons', './icons/icon1.svg'),
      filename: fixtureFile('basic-app/app/components/Foo/index.js'),
    },
  ],
});
