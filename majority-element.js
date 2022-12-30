/**
 * 169. Majority Element
 * Run locally: $ node majority-element.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2];

var majorityElement = function(nums) {
  const elements = {};
  const majority = { number: 1, count: 1 };
  nums.forEach(element => {
    if (elements[element]) {
      elements[element]++;
    } else {
      elements[element] = 1;
    }
  });
  for (const key in elements) {
    if (elements[key] > majority.count) {
      majority.number = key;
      majority.count = elements[key];
    }
  }
  return majority.number;
};

console.log(majorityElement(nums));

/**
 * Accepted
 * Runtime: 75 ms, Beats 81.53%
 * Memory: 43 MB, Beats 96.61%
 */
