/**
 * 258. Add Digits
 * Run locally: $ node add-digits.js
 */

/**
 * @param {number} num
 * @return {number}
 */

// Testcase
const num = 38;

// Input example
// const num = 0;

var addDigits = function(num) {
  while (String(num).length > 1) {
    num = String(num).split('').map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  return num;
};

console.log(addDigits(num));

/**
 * Accepted
 * Runtime: 80 ms, Beats 34.31% of users with JavaScript
 * Memory: 54.02 MB, Beats 5.47% of users with JavaScript
 */
