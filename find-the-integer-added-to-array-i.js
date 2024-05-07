/**
 * 3131. Find the Integer Added to Array I
 * Run locally: $ node find-the-integer-added-to-array-i.js
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// Input example 1
// const nums1 = [2,6,4];
// const nums2 = [9,7,5];

// Input example 2
// const nums1 = [10];
// const nums2 = [5];

// Input example 3
const nums1 = [1,1,1,1];
const nums2 = [1,1,1,1];

var addedInteger = function(nums1, nums2) {
  return (
    nums2.reduce((a, b) => a + b, 0) - nums1.reduce((a, b) => a + b, 0)
  ) / nums1.length;
};

console.log(addedInteger(nums1, nums2));
