/**
 * 283. Move Zeroes
 * Run locally: $ node move-zeroes.js
 */

nums = [0,1,0,3,0,12];

var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0]);
        }
    }
    return nums;
};

console.log(moveZeroes(nums));
