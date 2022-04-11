const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// only if file contains a large # of functions
// const myFunction = require('../eqArrays'); // importing the whole object as a variable
// // myFunction.assertEqual(myfunction.eqArrays)... etc.

// TESTS BELOW
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);