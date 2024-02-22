/**
 * 3028. Ant on the Boundary
 * Run locally: $ node ant-on-the-boundary.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Testcase
// const nums = [2,3,-5];

// Input example
const nums = [3,2,-3,-4];

var returnToBoundaryCount = function(nums) {
  let position = 0;
  let returnCount = 0;
  nums.forEach(number => {
    position = position + number;
    if (position === 0) returnCount++;
  });
  return returnCount;
};

console.log(returnToBoundaryCount(nums));

/**
 * Accepted
 * Runtime: 57 ms, Beats 66.56% of users with JavaScript
 * Memory: 50.51 MB, Beats 43.23% of users with JavaScript
 */
