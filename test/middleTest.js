const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

/// TESTS BELOW USING assertArraysEqual function

assertArraysEqual(middle([1,2]), []); // length is 2, first condition, pass
assertArraysEqual(middle([1]), []); // length is 1, first condition, pass
assertArraysEqual(middle([1,2,3]), [2]); // odd, pass
assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // odd, pass
assertArraysEqual(middle([1,2,3,4]), [2,3]);// even, pass
assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4, 5]);// even, pass