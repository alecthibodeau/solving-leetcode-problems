/**
 * 2710. Remove Trailing Zeros From a String
 * Run locally: $ node remove-trailing-zeros-from-a-string.js
 */

/**
 * @param {string} num
 * @return {string}
 */

// Input example 1
// const num = "51230100";

// Input example 1
const num = "123";

var removeTrailingZeros = function(num) {
  for (let i = num.length - 1; i < num.length; i--) {
    if (+num[i]) {
      break
    } else {
      num = num.slice(0, -1);
    }
  }
  return num;
};

console.log(removeTrailingZeros(num));

/**
 * Accepted
 * Runtime: 68 ms, Beats 43.68% of users with JavaScript
 * Memory: 53.47 MB, Beats 24.72% of users with JavaScript
 */
