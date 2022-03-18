/**
 * 66. Plus One
 * Run locally: $ node plus-one.js
 */

const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(Number);
};

console.log(plusOne(digits));

/**
 * Success
 * Runtime: 93 ms, faster than 37.50% of JavaScript online submissions for Plus One.
 * Memory Usage: 42 MB, less than 47.96% of JavaScript online submissions for Plus One.
 */
