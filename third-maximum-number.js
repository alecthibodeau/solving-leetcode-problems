/**
 * 414. Third Maximum Number
 * Run locally: $ node third-maximum-number.js
 */

const nums = [5,-4,-3,0];

var thirdMax = function(nums) {
    numsSorted = [...new Set(nums.sort((a, b) => { return b - a; }))];
    return numsSorted.length > 2 ? numsSorted[2] : numsSorted[0];
};

 console.log(thirdMax(nums));

 /**
 * Success
 * Runtime: 79 ms, faster than 71.44% of JavaScript online submissions for Third Maximum Number.
 * Memory Usage: 44.1 MB, less than 55.39% of JavaScript online submissions for Third Maximum Number.
 */
