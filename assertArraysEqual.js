const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅ The assertion has passed. ${array1} === ${array2}`);
  } else {
    console.log(`😡 The assertion has failed. ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
