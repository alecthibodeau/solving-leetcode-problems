/**
 * 2553. Separate the Digits in an Array
 * Run locally: $ node separate-the-digits-in-an-array.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input example 1
// const nums = [13,25,83,77];

// Input example 2
const nums = [7,1,3,9];

var separateDigits = function(nums) {
  const output = [];
  for (num of nums) {
    for (digit of num.toString()) {
      output.push(+digit);
    }
  }
  return output;
};

console.log(separateDigits(nums));

/**
 * Accepted
 * Runtime: 62 ms, Beats 74.53% of users with JavaScript
 * Memory: 52.80 MB, Beats 30.90% of users with JavaScript
 */
