

/**
 * 219. Contains Duplicate II
 * Run locally: $ node contains-duplicate-ii.js
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Input example 1
// const nums = [1,2,3,1];
// const k = 3;

// Input example 2
// const nums = [1,0,1,1];
// const k = 1;

// Input example 3
// const nums = [1,2,3,1,2,3];
// const k = 2;

// Input example 4
const nums = [0,2,1,3,4,1,1];
const k = 1;

var containsNearbyDuplicate = function(nums, k) {
  const integers = {};
  for (let i = 0; i < nums.length; i++) {
    if (integers[nums[i]] >= 0 && i - integers[nums[i]] <= k) {
      return true;
    } else {
      integers[nums[i]] = i;
    }
  }
  return false;
};

console.log(containsNearbyDuplicate(nums, k));
