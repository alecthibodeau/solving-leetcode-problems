/**
 * 1. Two Sum
 * Run locally: $ node two-sum.js
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [2,7,11,15];
const target = 9;

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));

/**
 * Success
 * Runtime: 197 ms, faster than 17.46% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.3 MB, less than 76.66% of JavaScript online submissions for Two Sum.
 */
