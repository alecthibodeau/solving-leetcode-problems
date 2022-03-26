/**
 * 268. Missing Number
 * Run locally: $ node missing-number.js
 */

const nums = [9,6,4,2,3,5,7,0,1];

var missingNumber = function(nums) {
    const sorted = nums.sort((a, b) => { return a - b; });
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] !== 1) {
            return sorted[i] - 1;
        }
    }
    return sorted[0] === 1 ? 0 : sorted.length;
};

console.log(missingNumber(nums));

/**
 * Success
 * Runtime: 92 ms, faster than 63.58% of JavaScript online submissions for Missing Number.
 * Memory Usage: 44.9 MB, less than 26.84% of JavaScript online submissions for Missing Number.
 */
