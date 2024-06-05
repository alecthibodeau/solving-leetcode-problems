/**
 * 2729. Check if The Number is Fascinating
 * Run locally: $ node check-if-the-number-is-fascinating.js
 */

/**
 * @param {number} n
 * @return {boolean}
 */

// Input example 1
// const n = 192;

// Input example 2
const n = 100;

var isFascinating = function(n) {
  const digits = {};
  const concatenated = String(n) + String(n * 2) + String(n * 3);
  for (let i = 0; i < concatenated.length; i++) {
    if (+concatenated[i] && !digits[concatenated[i]]) {
      digits[concatenated[i]] = 1;
    } else {
      return false;
    }
  }
  return Object.keys(digits).length === 9;
};

console.log(isFascinating(n));
