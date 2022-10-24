/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * Run locally: $ node how-many-numbers-are-smaller-than-the-current-number.js
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const nums = [8, 1, 2, 2, 3];

var smallerNumbersThanCurrent = function(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
};

console.log(smallerNumbersThanCurrent(nums));

/**
 * Success
 * Runtime: 141 ms, faster than 30.76% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 * Memory Usage: 44.4 MB, less than 38.35% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
 */
