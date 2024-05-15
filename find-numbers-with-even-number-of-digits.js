/**
 * 1295. Find Numbers with Even Number of Digits
 * Run locally: $ node find-numbers-with-even-number-of-digits.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [12,345,2,6,7896];

// Input example 2
const nums = [555,901,482,1771];

var findNumbers = function(nums) {
  let count = 0;
  for (const num of nums) {
    if (num.toString().length % 2 === 0) count++;
  }
  return count;
};

console.log(findNumbers(nums));
