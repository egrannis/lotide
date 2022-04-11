const tail = require('../tail');
const assert = require('chai').assert;

// Testing Code Below

describe("#tail", () => {
  it("returns [2, 3] when we perform tail on an array of numbers [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it("returns 'Lighthouse' when we perform tail on an array of strings ['Hello', 'Lighthouse']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse']), ['Lighthouse']);
  });

  it("returns an empty array when we perform tail on an empty array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty array when we perform tail on an array with one element", () => {
    assert.deepEqual(tail([2]), []);
  });

  it("doesn't modify the original input array when we perform tail it", () => {
    let words = ['Hello', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
    assert.deepEqual(words, ['Hello', 'Lighthouse', 'Labs']);
  });

});