// function, takeUntil, which takes in 2 parameters: 1) array to work with, 2) callback (lodash calls predciate)

const takeUntil = function(array, callback) {
  let emptyArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return emptyArray;
    } else {
      emptyArray.push(array[i]);
    }
  }
  return emptyArray;
};


// pasting in eqArrays function from previous exercise
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Adding in assertArraysEqual function to test code
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅ The assertion has passed. ${array1} === ${array2}`);
  } else {
    console.log(`❌ The assertion has failed. ${array1} !== ${array2}`);
  }
};


/// Testing below

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual([ 1, 2, 5, 7, 2 ], results1);
console.log('---');
assertArraysEqual([ 'I\'ve', 'been', 'to', 'Hollywood' ], results2);