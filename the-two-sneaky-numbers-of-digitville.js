/**
 * 3289. The Two Sneaky Numbers of Digitville
 * Run locally: $ node the-two-sneaky-numbers-of-digitville.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Input example 1
// const nums = [0,1,1,0];

// Input example 2
// const nums = [0,3,2,1,3,2];

// Input example 3
const nums = [7,1,5,4,3,4,6,0,9,5,8,2];

var getSneakyNumbers = function(nums) {
  const sortedNums = nums.sort();
  const sneakyNumbers = [];
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      sneakyNumbers.push(sortedNums[i]);
      if (sneakyNumbers.length === 2) return sneakyNumbers;
    }
  }
};

console.log(getSneakyNumbers(nums));

/**
 * Accepted
 * Runtime: 4 ms, Beats 100% of users with JavaScript
 * Memory: 51.58 MB, Beats 44.26% of users with JavaScript
 */
