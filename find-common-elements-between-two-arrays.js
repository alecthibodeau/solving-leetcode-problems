/**
 * 2956. Find Common Elements Between Two Arrays
 * Run locally: $ node find-common-elements-between-two-arrays.js
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Input example 1
// const nums1 = [2,3,2];
// const nums2 = [1,2];

// Input example 2
// const nums1 = [4,3,2,3,1];
// const nums2 = [2,2,5,2,3,6];

// Input example 3
const nums1 = [3,4,2,3];
const nums2 = [1,5];

var findIntersectionValues = function(nums1, nums2) {
  return [
    nums1.filter((element) => nums2.includes(element)).length,
    nums2.filter((element) => nums1.includes(element)).length
  ];
};

console.log(findIntersectionValues(nums1, nums2));

/**
 * Accepted
 * Runtime: 82 ms, Beats 83.37% of users with JavaScript
 * Memory: 53.50 MB, Beats 79.63% of users with JavaScript
 */
