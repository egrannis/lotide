const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};


// Testing Code Below
const result = tail(["Hello", "Lighthouse", "Labs"]);
const words = ["Yo Yo", "Lighthouse", "Labs"];

// Circumventing issue with trying to convert arrays
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// ensuring that we are not modifying the OG array below
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const empty = tail([]); // creating empty array to test
const single = tail([2]); // creating array with a single element to test
console.log(empty);
console.log(single);