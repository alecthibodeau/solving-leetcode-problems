/**
 * 2899. Last Visited Integers
 * Run locally: $ node last-visited-integers.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Testcase
// const nums = [1,2,-1,-1,-1];

// Input example
const nums = [1,-1,2,-1,-1];

var lastVisitedIntegers = function(nums) {
  const seen = [];
  const ans = [];
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== -1) {
      if (k !== 0) k = 0;
      seen.unshift(nums[i]);
    } else {
      k++;
      ans.push(k <= seen.length ? seen[k - 1] : -1);
    }
  };
  return ans;
};

console.log(lastVisitedIntegers(nums));

/**
 * Accepted
 * Runtime: 73 ms, Beats 46.83% of users with JavaScript
 * Memory: 51.56 MB, Beats 85.37% of users with JavaScript
 */
