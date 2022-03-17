/**
 * 217. Contains Duplicate
 * Run locally: $ node contains-duplicate.js
 */

const nums = [1, 2, 1, 3, 4];

var containsDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate(nums));
