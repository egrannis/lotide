const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const lowerCaseString = string.toLowerCase();
  const newObj = {};
  for (const letter of lowerCaseString) {
    if (letter !== ' ') {
      !newObj[letter] ? newObj[letter] = 1 : newObj[letter]++;
    }
  }
  return newObj;
};

module.exports = countLetters;

const string = 'lighthouse Labs';
assertEqual(countLetter(string)['l'],2);
assertEqual(countLetter(string)['i'],1);
assertEqual(countLetter(string)[' '], undefined);
