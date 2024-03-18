/**
 * 2733. Neither Minimum nor Maximum
 * Run locally: $ node neither-minimum-nor-maximum.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [3,2,1,4];

// Input example 2
const nums = [1,2];

var findNonMinOrMax = function(nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return nums.filter(num => num !== min && num !== max)[0] || -1;
};

console.log(findNonMinOrMax(nums));

/**
 * Accepted
 * Runtime: 120 ms, Beats 96.88% of users with JavaScript
 * Memory: 59.11 MB, Beats 76.30% of users with JavaScript
 */
