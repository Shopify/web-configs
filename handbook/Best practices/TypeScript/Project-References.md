# Project References

## Table of contents

1. [What are Project References?](#what-are-project-references)
1. [Migrating a codebase](#migrating-a-codebase)
1. [Tips](#tips)
1. [Caveats](#caveats)

## What are Project References?

[Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) is a new feature in TypeScript 3.0 that provides projects with built-in scalability by allowing you to better structure your code. By doing this, you can greatly improve build times, enforce logical separation between components, and organize your code in new and better ways.

### Code structure

Project references provide developers tools to separate their code into smaller blocks. This enforces logical guidelines across the codebase which results in healthier code over time. 

### Performance

The logical guidelines enforced by Project References enable [incremental compiles](https://www.typescriptlang.org/docs/handbook/project-references.html#build-mode-for-typescript). This in turn improves responsiveness and tightens the feedback between the VSCode and the TypeScript Language Server. 

## Migrating a codebase

TypeScript's documentation and guidance on [Project References](https://www.typescriptlang.org/docs/handbook/project-references.html) are trivial to implement in new codebases. In larger codebases, leveraging Project References can be cumbersome. This section outlines our best practices on migrating a large codebase to gradually adopt Project References.

### Understanding your codebase

In most large codebases, migrating to Project References in one go is likely, not feasible. The migration would have to be done gradually over time. 

We recommend starting out but identifying the leaf nodes in your project's dependency graph. These leaf nodes generally include the most widely used parts of your codebase. A good place to start might be the `packages/`, `tests/` or `app/utilities`. 

In our experience, we've noticed that some `app/utilties` may be tightly coupled with `tests` utilties, `app` code and `packages/` . In some cases even resulting in circular dependencies. We suggest you identifying some of the these utilties and extracting them into isolated project references hosted in `packages/@<project>-utilties`.

### Starting at the leaf nodes

Start by creating an entrypoint for your project references. For simplicity, let's assume the leave nodes of your app consists of a `packages/` and `tests` directory. 

```jsonc
// config/typescript/project-references.tsconfig.json

{
  "extends": "./tsconfig.base.json",
  "files": [],
  "include": [],
  "references": [{"path": "../../packages"}, {"path": "../../tests"}]
}

// config/typescript/tsconfig.base.json

{
  "extends": "@shopify/typescript-configs/application.json",
  "compilerOptions": {
    "composite": true,
    "noEmit": false,
    // remaining default config
  }
}
```

Whenever a project is referenced, that respective folder requires a root level `tsconfig.json` specifying the dependencies that project references in turn. In the case of the above mentioned `project-references.tsconfig.json`, the `../../packages` path reference looks for a `packages/tsconfig.json`. 

```jsonc
// packages/tsconfig.json

{
  "extends": "../config/typescript/tsconfig.base.json",
  "files": [],
  "include": [],
  "references": [
    {"path": "./@shopify/packages-a"},
    {"path": "./@shopify/package-b"},
  ]
}
```

```jsonc
// packages/@shopify/package-a/tsconfig.json

{
  "extends": "../../../config/typescript/tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": "../../../",
    "rootDir": "../../../",
    "outDir": "../../../build/ts",
    "resolveJsonModule": true,
    "paths": {
      "@shopify/package-b": ["packages/@shopify/package-b"],
    }
  },
  "include": ["."],
  "references": [{"path": "../package-b"}]
}
```

### Running a build

With the leaf nodes migrated to project references, you can now run the TypeScript compiler

```bash
$ yarn run tsc -b config/typescript/project-references.tsconfig.json
```

> Protip: Use the ` --diagnostics` flag to get insight into what the compiler is doing. 

It's very likely that you'll get a number of errors. The most common being that compiler can't find a module that your a project is referencing. The solution here would be to create a root level `tsconfig.json` for the module being depended on. Then add the reference to the `tsconfig.json` it in the project that fails to build. Keep in mind that you'll have the respect the following restrictions for project references:

* The `include`/`files` compiler option must include all the input files that the project reference relies on.
* Any project that is referenced must itself have a references array (which may be empty).
* Specify the path mapping entries for module name to locations relative to the baseUrl. This is set in `#compilerOptions#paths`.

### Next steps

With the leaf nodes migrated, the rest of the codebase should be better equipped to start migrating over. Start by deciding which top-level folders you would like to migrate. Then gradually pick which sections you would like to convert over and create a `tsconfig.json` for that respective section. 

```jsonc
// app/sections/tsconfig.json

{
  "extends": "../../config/typescript/tsconfig.base.json",
  "files": [],
  "include": [],
  "references": [
    {"path": "./Home"}
  ]
}

// app/sections/Home/tsconfig.json

{
  "extends": "../../../config/typescript/tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": "../../../",
    "rootDir": "../../../",
    "outDir": "../../../build/ts",
    "resolveJsonModule": true,
    "paths": {
      // List out all the project refeece path this section references
    }
  },
  "include": ["."],
  "references": [
    // Include all the projec references this section relies on
  ]
}
```

## Tips

* We've built a VSCode plugin ([TypeTrack](https://github.com/Shopify/typetrack)) for teams to leverage when migrating their codebase to Project References

* Use relative imports when referencing code within it's own project reference. 

Eg:
```
// packages/@web-utilities/package-a/foo.ts

// bad
import {barThing} from '@web-utilities/package-a';

// good
import {barThing} from './bar-thing';
```

##  Caveats 

Since dependent projects make use of `.d.ts` files that are built from their dependencies you'll have to build a project after cloning it before VSCode can navigate the project in the editor without seeing spurious errors.
