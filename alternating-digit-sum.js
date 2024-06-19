/**
 * 2544. Alternating Digit Sum
 * Run locally: $ node alternating-digit-sum.js
 */

/**
 * @param {number}
 * @return {number}
 */

// Input example 1
// const n = 521;

// Input example 2
// const n = 111;

// Input example 3
const n = 886996;

var alternateDigitSum = function(n) {
  let sum = 0;
  const stringN = String(n);
  for (let i = 0; i < stringN.length; i++) {
    i % 2 ? sum -= +stringN[i] : sum += +stringN[i];
  }
  return sum;
};

console.log(alternateDigitSum(n));
