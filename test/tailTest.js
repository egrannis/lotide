const tail = require('../tail');
const assertEqual = require('../assertEqual');


// Testing Code Below
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

// Circumventing issue with trying to convert arrays
assertEqual(result.length, 2); // True, ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // True, ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // True, ensure second element is "Labs"

// ensuring that we are not modifying the OG array below
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // checking that the original array still has 3 elements

const empty = tail([]); // creating empty array to test
const single = tail([2]); // creating array with a single element to test
assertEqual(empty.length, 0); //true, An empty array should yield an empty array for its tail, so I am stating array length to compare
assertEqual(single.length, 0); // true, An array with only one element should yield an empty array for its tail