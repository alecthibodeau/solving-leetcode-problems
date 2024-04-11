/**
 * 2283. Check if Number Has Equal Digit Count and Digit Value
 * Run locally: $ node check-if-number-has-equal-digit-count-and-digit-value.js
 */

/**
 * @param {string} num
 * @return {boolean}
 */

// Input example 1
// const num = "1210";

// Input example 2
const num = "030";

var digitCount = function(num) {
  for (let i = 0; i < num.length; i++) {
    let count = 0;
    for (let j = 0; j < num.length; j++) {
      if (+num[j] === i) count++;
      if ((count > +num[i]) || (j === num.length - 1 && count !== +num[i])) return false;
    }
  }
  return true;
};

console.log(digitCount(num));

/**
 * Accepted
 * Runtime: 57 ms, Beats 53.10% of users with JavaScript
 * Memory: 49.07 MB, Beats 70.34% of users with JavaScript
 */
