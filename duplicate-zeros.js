/**
 * 1089. Duplicate Zeros
 * Run locally by adding a line in duplicateZeros() to return arr: $ node duplicate-zeros.js
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

let arr = [1,0,2,3,0,4,5,0];

var duplicateZeros = function(arr) {
  const length = arr.length;
  for (let i = 0; i < length + 1; i++) {
    if (arr[i - 1] === 0) {
      arr.splice(i, 0, 'zero');
      arr.pop();
    }
    if (arr[i - 1] === 'zero') {
      arr[i - 1] = 0;
    }
  }
};

console.log(duplicateZeros(arr));

/**
 * Success
 * Runtime: 99 ms, faster than 49.53% of JavaScript online submissions for Duplicate Zeros.
 * Memory Usage: 44.2 MB, less than 58.51% of JavaScript online submissions for Duplicate Zeros.
 */