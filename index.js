const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetter: countLetter,
  countOnly: countOnly,
  eqObjects: eqObjects,

};