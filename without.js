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

// pasting in assertArraysEqual function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`The assertion has passed. ${array1} === ${array2}`);
  } else {
    console.log(`The assertion has failed. ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let filtered = source.filter(item => !itemsToRemove.includes(item)); // need to return a false value for filter to remove
  return filtered;
};

module.exports = without;

// TESTING
assertArraysEqual([2, 3], without([1, 2, 3], [1])); // => [2, 3]
assertArraysEqual(["1", "2"], without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function

// PREVIOUS FOR LOOP BEFORE USING METHOD

/* const without = function (source, itemsToRemove) {
  let newArr = [];
  for (i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      newArr;
    } else {
      newArr.push(source[i])
    }
  }
 return newArr;
} */