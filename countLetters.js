const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const string = 'lighthouse Labs';

const countLetter = function(string) {
  const lowerCaseString = string.toLowerCase();
  const newObj = {};
  for (const letter of lowerCaseString) {
    if (letter !== ' ') {
        !newObj[letter] ? newObj[letter] = 1 : newObj[letter]++;
      }
    }
  return newObj;
};

console.log(countLetter(string));
