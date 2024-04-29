/**
 * 1470. Shuffle the Array
 * Run locally: $ node shuffle-the-array.js
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// Input example 1
// const nums = [2,5,1,3,4,7];
// const n = 3;

// Input example 2
// const nums = [1,2,3,4,4,3,2,1];
// const n = 4;

// Input example 2
const nums = [1,1,2,2];
const n = 2;

var shuffle = function(nums, n) {
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(nums[i], nums[i + n]);
  }
  return output;
};

console.log(shuffle(nums, n));

/**
 * Accepted
 * Runtime: 63 ms, Beats 44.26% of users with JavaScript
 * Memory: 51.99 MB, Beats 34.07% of users with JavaScript
 */
