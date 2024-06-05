/**
 * 2778. Sum of Squares of Special Elements
 * Run locally: $ node sum-of-squares-of-special-elements.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [1,2,3,4];

// Input example 2
const nums = [2,7,1,19,18,3];

var sumOfSquares = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length % (i + 1) === 0) sum += nums[i] ** 2;
  }
  return sum;
};

console.log(sumOfSquares(nums));

/**
 * Accepted
 * Runtime: 72 ms, Beats 93.73% of users with JavaScript
 * Memory: 53.18 MB, Beats 77.74% of users with JavaScript
 */
