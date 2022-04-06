const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅🆒 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {// if the value within the itemsToCount array is truthy (ie we want it to be included / counted)
      if (results[item]) {// AND if the item (i.e. name) within the array is truthy (in this case not 0), we add 1
        results[item] += 1;
      } else {// otherwise
      results[item] = 1;// Otherwise, we just assign the item (i.e. name) as a key and give it a value of 1 since we know it occurs at least once.
      }
    }
  }
  return results;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);