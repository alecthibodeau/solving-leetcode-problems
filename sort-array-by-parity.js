/**
 * 905. Sort Array By Parity
 * Run locally: $ node sort-array-by-parity.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [3, 1, 2, 4];

var sortArrayByParity = function(nums) {
  const answer = [];
  nums.forEach(number => {
    number % 2 === 0 ? answer.unshift(number) : answer.push(number);
  });
  return answer;
};

console.log(sortArrayByParity(nums));

/**
 * Accepted
 * Runtime: 150 ms, Beats 12.61%
 * Memory Usage: 44.9 MB, Beats 33.80%
 */
