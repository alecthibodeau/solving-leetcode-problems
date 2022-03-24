/**
 * 485. Max Consecutive Ones
 * Run locally: $ node max-consecutive-ones.js
 */

const nums = [1,0,1,1,1,1,0,1]

var findMaxConsecutiveOnes = function(nums) {
    let maxConsecutive = 0;
    let tempConsecutive = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] ?  tempConsecutive++ : tempConsecutive = 0;
        if (tempConsecutive > maxConsecutive) {
            maxConsecutive = tempConsecutive;
        }
    }

    return maxConsecutive;
};

console.log(findMaxConsecutiveOnes(nums));

/**
 * Success
 * Runtime: 133 ms, faster than 10.86% of JavaScript online submissions for Max Consecutive Ones.
 * Memory Usage: 44.4 MB, less than 73.43% of JavaScript online submissions for Max Consecutive Ones.
 */
