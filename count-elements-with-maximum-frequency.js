

/**
 * 3005. Count Elements With Maximum Frequency
 * Run locally: $ node count-elements-with-maximum-frequency.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// Input example 1
// const nums = [1,2,2,3,1,4];

// Input example 2
// const nums = [1,2,3,4,5];

// Input example 3
const nums = [10,12,11,9,6,19,11];


var maxFrequencyElements = function(nums) {
  const frequencies = {};
  let count = 0;
  for (const num of nums) {
    frequencies[num] = frequencies[num] ? frequencies[num] + 1 : 1;
  }
  for (frequency in frequencies) {
    if (frequencies[frequency] === Math.max(...Object.values(frequencies))) {
      count = count + frequencies[frequency];
    }
  }
  return count;
};

console.log(maxFrequencyElements(nums));
