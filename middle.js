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

// new function utilizing eqArrays function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`The assertion has passed. ${array1} === ${array2}`);
  } else {
    console.log(`The assertion has failed. ${array1} !== ${array2}`);
  }
};


const middle = function(array) {
  let output = [];
  if (array.length === 1 || array.length === 2) {
    output = [];
  } else if (array.length % 2 !== 0) {// For arrays with odd number of elements, an array containing a single middle element should be returned.
    output.push(array[Math.floor(array.length / 2)]);
  } else {
    output.push(array[(array.length / 2) - 1]);//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    output.push(array[array.length / 2]);
  }
  return output;
};

/// TESTS BELOW USING assertArraysEqual function

assertArraysEqual(middle([1,2]), []); // length is 2, first condition
assertArraysEqual(middle([1]), []); // length is 1, first condition
assertArraysEqual(middle([1,2,3]), [2]); // odd
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // odd
assertArraysEqual(middle([1,2,3,4]), [2,3]);// even
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4, 5]);// even



