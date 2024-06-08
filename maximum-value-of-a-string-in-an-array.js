/**
 * 2496. Maximum Value of a String in an Array
 * Run locally: $ node maximum-value-of-a-string-in-an-array.js
 */

/**
 * @param {string[]} strs
 * @return {number}
 */

// Input example 1
const strs = ["alic3","bob","3","4","00000"];

// Input example 2
// const strs = ["1","01","001","0001"];

var maximumValue = function(strs) {
  let max = 0;
  for (const str of strs) {
    let value = 0;
    for (const character of str) {
      if (+character >= 0) {
        value = +str;
      } else {
        value = str.length;
        break;
      }
    }
    if (value > max) max = value;
  }
  return max;
};

console.log(maximumValue(strs));
