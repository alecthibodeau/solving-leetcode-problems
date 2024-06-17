

/**
 * 1748. Sum of Unique Elements
 * Run locally: $ node sum-of-unique-elements.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [1,2,3,2];

// Input example 2
// const nums = [1,1,1,1,1];

// Input example 3
const nums = [1,2,3,4,5];

var sumOfUnique = function(nums) {
  const elements = {};
  let sum = 0;
  for (const num of nums) {
    if (!elements[num]) {
      elements[num] = 1;
      sum += num;
    } else if (elements[num] === 1) {
      elements[num] += 1;
      sum -= num;
    }
  }
  return sum;
};

console.log(sumOfUnique(nums));

/**
 * Accepted
 * Runtime: 47 ms, Beats 89.64% of users with JavaScript
 * Memory: 49.18 MB, Beats 51.51% of users with JavaScript
 */
