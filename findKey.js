// assertEqual function to validate outputs of findKey function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey function
const findKey = function(object,callback) {
  let keyFound = undefined; // assume that the key is falsy and only change if it is truthy
  for (let key in object) {
    if (callback(object[key])) { // if the callback function using the key is truthy, we want to return the key
      keyFound = key;
      return keyFound; // we want to only return the first key that is truthy
    }
  }
  return keyFound;
};

// Testing of findKey function
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)), "noma");


assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)), undefined);
