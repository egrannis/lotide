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

module.exports = eqArrays;

//// Rationale I worked through problem with below ////

// take in 2 arrays
//compare element 1 of first array to element 1 of second array etc.
// if the arrays aren't the same length, return false
// if any elements within arrays of the same length aren't congruent, return false
// if passes through, return true

// below is the for each loop of equal arrays that I did prior to using the .every method

/* const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length) {
    return false;
  }
return array1.every(function(element,index) {
  return element === array2[index]});
} */
