/**
 * 1207. Unique Number of Occurrences
 * Run locally: $ node unique-number-of-occurrences.js
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

const arr = [1, 2, 2, 1, 1, 3];
// const arr = [1, 2];

var uniqueOccurrences = function(arr) {
  const counts = {};
  arr.forEach(integer => {
    if (counts[integer]) {
      counts[integer] += 1;
    } else {
      counts[integer] = 1;
    }
  });
  return new Set(Object.values(counts)).size === Object.values(counts).length;
};

console.log(uniqueOccurrences(arr));

/**
 * Success
 * Runtime: 83 ms, faster than 65.32% of JavaScript online submissions for Unique Number of Occurrences.
 * Memory Usage: 42.9 MB, less than 41.20% of JavaScript online submissions for Unique Number of Occurrences.
 */
