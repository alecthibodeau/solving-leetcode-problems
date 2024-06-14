/**
 * 2460. Apply Operations to an Array
 * Run locally: $ node apply-operations-to-an-array.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input example 1
const nums = [1,2,2,1,1,0];

// Input example 2

var applyOperations = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
  }
  for (const num of nums) {
    if (!num) nums.push(nums.splice(nums.indexOf(num), 1)[0]);
  }
  return nums;
};

console.log(applyOperations(nums));

/**
 * Accepted
 * Runtime: 60 ms, Beats 66.22% of users with JavaScript
 * Memory: 51.53 MB, Beats 55.63% of users with JavaScript
 */
