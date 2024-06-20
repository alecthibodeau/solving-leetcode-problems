

/**
 * 69. Sqrt(x)
 * Run locally: $ node sqrtx.js
 */

/**
 * @param {number} x
 * @return {number}
 */

// Input example 1
// const x = 4;

// Input example 2
const x = 8;

var mySqrt = function(x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;
    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(mySqrt(x));
