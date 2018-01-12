const {resolve} = require('path');

function fixtureFile(fixture) {
  return resolve(__dirname, './fixtures', fixture);
}

module.exports = {
  fixtureFile,
};
