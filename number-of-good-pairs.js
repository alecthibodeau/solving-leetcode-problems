/**
 * 1512. Number of Good Pairs
 * Run locally: $ node number-of-good-pairs.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 2, 3, 1, 1, 3];

var numIdenticalPairs = function(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }

  return count;
};

console.log(numIdenticalPairs(nums));

/**
 * Accepted
 * Runtime: 59 ms, Beats 93.99%
 * Memory: 41.2 MB, Beats 98.11%
 */
