/**
 * 1389. Create Target Array in the Given Order
 * Run locally: $ node create-target-array-in-the-given-order.js
 */

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

// Input example 1
// const nums = [0,1,2,3,4];
// const index = [0,1,2,2,1];

// Input example 2
// const nums = [1,2,3,4,0];
// const index = [0,1,2,3,0];

// Input example 3
const nums = [1];
const index = [0];

var createTargetArray = function(nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

console.log(createTargetArray(nums, index));
