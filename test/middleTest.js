const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns an empty array when we perform tail on an array one or two element", () => {
    assert.deepEqual(middle([1]), []);
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns an array containing a single middle element when we perform tail on an array with an odd number of elements", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });

  it("returns an array containing the two elements in the middle when we perform tail on an array with an even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4, 5]);
  });

});