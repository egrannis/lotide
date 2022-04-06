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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`The assertion has passed. ${array1} === ${array2}`);
  } else {
    console.log(`The assertion has failed. ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  const lowerCaseSentence = sentence.toLowerCase();
  for (let i = 0; i < lowerCaseSentence.length; i++) {
    const letter = lowerCaseSentence[i];
    if (letter !== ' ') {
      !results[letter] ? results[letter] = [i] : results[letter].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("Lighthouse Labs").l, [0,11]);

// Old Code using if else statement

// const letterPositions = function(sentence) {
//   const results = {};
//   const lowerCaseSentence = sentence.toLowerCase();
//   for (let i = 0; i < lowerCaseSentence.length; i++) {
//     const letter = lowerCaseSentence[i];
//     if (letter !== ' ') {
//       if (!results[letter]) {
//       results[letter] = [i];
//       } else {
//       results[letter].push(i);
//       }
//     }
//   }
//   console.log(results);
//   return results;
// };