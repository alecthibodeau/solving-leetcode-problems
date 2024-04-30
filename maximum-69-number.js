/**
 * 1323. Maximum 69 Number
 * Run locally: $ node maximum-69-number.js
 */

/**
 * @param {number} num
 * @return {number}
 */

// Input example 1
// const num = 9669;

// Input example 2
// const num = 9996;

// Input example 3
const num = 9999;

var maximum69Number  = function(num) {
  const numString = String(num);
  let digits = '';
  for (let i = 0; i < numString.length; i++) {
    digits += '9';
    if (numString[i] === '6') {
      digits += numString.slice(i + 1);
      break;
    }
  }
  return +digits;
};

console.log(maximum69Number(num));

/**
 * Accepted
 * Runtime: 54 ms, Beats 40.70% of users with JavaScript
 * Memory: 48.76 MB, Beats 58.54% of users with JavaScript
 */
