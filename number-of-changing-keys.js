/**
 * 3019. Number of Changing Keys
 * Run locally: $ node number-of-changing-keys.js
 */

/**
 * @param {string} s
 * @return {number}
 */

// Testcase
// const s = "aAbBcC";

// Input example
const s = "AaAaAaaA";

var countKeyChanges = function(s) {
  let changeCount = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (![0, 32].includes(Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1)))) changeCount++;
  }
  return changeCount;
};

console.log(countKeyChanges(s));

/**
 * Accepted
 * Runtime: 64 ms, Beats 46.39% of users with JavaScript
 * Memory: 51.33 MB, Beats 47.39% of users with JavaScript
 */
