// Function for testing to be used at the bottom
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrays function pasted in from previous work
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

// new eqObjects function created to compare objects
const eqObjects = function(object1, object2) {
  const keysList1 = Object.keys(object1);
  const keysList2 = Object.keys(object2);
  if (keysList1.length !== keysList2.length) {
    return false;
  }
  for (let k of keysList1) {
    if (Array.isArray(object1[k],object2[k])) {
      return eqArrays(object1[k],object2[k]);
    } else {
      if (object1[k] !== object2[k]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

// TESTING INPUTS BELOW
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2"] };
const dc = { d: ["2"], c: "1" };
const cd2 = { c: "1", d: {a: 1} };
const eg = { c: "1", d: ["2", 3] };
const sm = { d: ["2", 3], c: "1" };
const cd3 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(dc, cd2), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(eg, sm), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, cd3), false);
assertEqual(eqObjects(cd3, ab), false);