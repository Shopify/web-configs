// This script is a temporary solution until this project move to typescript.
const fs = require('fs');
const {join} = require('path');

const Watchpack = require('watchpack');

const packageDir = process.argv.slice(2)[0];

// We need to remove the local node_modules folder otherwise when tophat
// will try to copy it. This can cause an issue because you can't copy symlink.
deleteFolderRecursive(join(packageDir, 'node_modules'));

const wp = new Watchpack({
  aggregateTimeout: 1000,
  poll: true,
  ignored: /node_modules/,
});

wp.watch([], [packageDir], Date.now() - 10000);

console.log('Found 0 errors. Watching for file changes');

wp.on('change', () => {
  console.log(`File change detected. Starting incremental compilation`);
  console.log('Found 0 errors. Watching for file changes');
});

function deleteFolderRecursive(path) {
  if (!fs.existsSync(path)) {
    return;
  }

  fs.readdirSync(path).forEach((file) => {
    const curPath = join(path, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      deleteFolderRecursive(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(path);
}
