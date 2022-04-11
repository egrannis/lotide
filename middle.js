const middle = function(array) {
  let output = [];
  if (array.length === 1 || array.length === 2) {
    output = [];
  } else if (array.length % 2 !== 0) {// For arrays with odd number of elements, an array containing a single middle element should be returned.
    output.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    output.push(array[array.length / 2]);
  }
  return output;
};

module.exports = middle;





