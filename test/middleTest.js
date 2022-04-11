const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

/// TESTS BELOW USING assertArraysEqual function

assertArraysEqual(middle([1,2]), []); // length is 2, first condition
assertArraysEqual(middle([1]), []); // length is 1, first condition
assertArraysEqual(middle([1,2,3]), [2]); // odd
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // odd
assertArraysEqual(middle([1,2,3,4]), [2,3]);// even
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4, 5]);// even