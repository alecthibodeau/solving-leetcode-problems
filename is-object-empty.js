/**
 * 2727. Is Object Empty
 * Run locally: $ node is-object-empty.js
 */

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

// Testcase
const obj = {"x": 5, "y": 42};

// Input example
// const obj = {};

// Input example
// const obj = [null, false, 0];

var isEmpty = function(obj) {
  return !Object.keys(obj).length;
};

console.log(isEmpty(obj));

/**
 * Accepted
 * Runtime: 56 ms, Beats 30.51% of users with JavaScript
 * Memory: 49.48 MB, Beats 29.07% of users with JavaScript
 */
