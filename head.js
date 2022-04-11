const assertEqual = require('./assertEqual');

const head = function(array) {
  return array.at(0);
};

module.exports = {
  assertEqual,
  head
};