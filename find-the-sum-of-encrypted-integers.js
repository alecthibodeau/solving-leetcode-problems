/**
 * 3079. Find the Sum of Encrypted Integers
 * Run locally: $ node find-the-sum-of-encrypted-integers.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [1,2,3];

// Input example 2
const nums = [10,21,31];

var sumOfEncryptedInt = function(nums) {
  nums.forEach((num, i) => {
    const numStrings = num.toString().split('');
    nums[i] = +Math.max(...numStrings).toString().repeat(numStrings.length);
  });
  return nums.reduce((a, b) => a + b, 0);
};

console.log(sumOfEncryptedInt(nums));

/**
 * Accepted
 * Runtime: 67 ms, Beats 62.95% of users with JavaScript
 * Memory: 51.14 MB, Beats 72.59% of users with JavaScript
 */
