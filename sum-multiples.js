/**
 * 2652. Sum Multiples
 * Run locally: $ node sum-multiples.js
 */

/**
 * @param {number} n
 * @return {number}
 */

// Input example 1
// const n = 7;

// Input example 2
const n = 10;

// Input example 3
// const n = 3;

var sumOfMultiples = function(n) {
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    if ([3, 5, 7].some(num => i % num === 0)) sum = sum + i;
  }
  return sum;
};

console.log(sumOfMultiples(n));

/**
 * Accepted
 * Runtime: 79 ms, Beats 32.39% of users with JavaScript
 * Memory: 57.34 MB, Beats 5.49% of users with JavaScript
 */
