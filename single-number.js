/**
 * 136. Single Number
 * Run locally: $ node single-number.js
 */

let nums = [4,1,2,1,2]

var singleNumber = function(nums) {
    const sorted = nums.sort((a, b) => { return a - b; });
    for (let i = 0; i < nums.length; i++) {
        if (sorted[i] !== sorted[i - 1] && sorted[i] !== sorted[i + 1]) {
            return sorted[i];
        }
    }
};

console.log(singleNumber(nums));

/**
 * Success
 * Runtime: 76 ms, faster than 84.24% of JavaScript online submissions for Single Number.
 * Memory Usage: 45.1 MB, less than 54.81% of JavaScript online submissions for Single Number.
 */
