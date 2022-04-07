
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

// Implementation of map function

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const empty = [];
const numbers = [5, 6, 7, 8];
const results1 = map(words, word => word[0]);// first way of using map
const resultsEmpty = map(empty, nada => nada[0]); // first way of using map
const numbersMult = map(numbers, number => number * 2); // second way of using map
const wordsAdded = map(words, word => word + " added phrase"); // third way of using map

// Test cases below

assertArraysEqual(["g", "c", "t", "m", "t"], results1);// pass, first way of using map
assertArraysEqual([], resultsEmpty);// pass, first way of using map
assertArraysEqual([10, 12, 14,16], numbersMult);//pass, second way og using map
assertArraysEqual(["ground added phrase", "control added phrase", "to added phrase", "major added phrase", "tom added phrase"], wordsAdded);//pass, third way of using map

// assertArraysEqual([10, 11, 14, 16], numbersMult);//fail
// assertArraysEqual(7, results1);// fail
