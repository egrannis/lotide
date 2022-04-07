// eqArrays function leveraged in eqObjects function
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

// eqObjects function created to compare objects
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

// New function implementation of assertObjectsEqual
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1,obj2)) {
    console.log(` ✅ Assertion passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(` ❌ Assertion failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// TESTING CODE BELOW
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const cd = { c: "1", d: ["2"] };
const dc = { d: ["2"], c: "1" };
const cd2 = { c: "1", d: {a: 1} };
const eg = { c: "1", d: ["2", 3] };
const sm = { d: ["2", 3], c: "1" };
const cd3 = { c: "1", d: ["2", 3, 4] };
const fg = {a: "1", f: [2,3,4,5,6], g: 4, m: "emma"};
const gf = {m: "emma", g:4, a: "1", f: [2,3,4,5,6]};

assertObjectsEqual(cd, dc); // pass
assertObjectsEqual(eg, sm); //pass
assertObjectsEqual(ab, ba); //pass
assertObjectsEqual(fg, gf); // pass
assertObjectsEqual(cd, cd2); // fail
assertObjectsEqual(dc, cd2); // fail
assertObjectsEqual(ab, cd3); // fail
assertObjectsEqual(cd3, eg); // fail
