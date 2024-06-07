/**
 * 2455. Average Value of Even Numbers That Are Divisible by Three
 * Run locally: $ node average-value-of-even-numbers-that-are-divisible-by-three.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [1,3,6,10,12,15];

// Input example 2
// const nums = [1,2,4,7,10];

// Input example 3
const nums = [94,65,82,40,79,74,92,84,37,19,16,85,20,79,25,89,55,67,84,3,79,38,16,44,2,54,58,94,69,71,14,24,13,21];

var averageValue = function(nums) {
  const hits = nums.filter((num) => num % 6 === 0);
  return hits.length ? Math.floor(hits.reduce((a, b) => a + b, 0)/hits.length) : 0;
};

console.log(averageValue(nums));

/**
 * Accepted
 * Runtime: 50 ms, Beats 87.68% of users with JavaScript
 * Memory: 50.61 MB, Beats 52.13% of users with JavaScript
 */
