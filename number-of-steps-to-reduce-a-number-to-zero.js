/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * Run locally: $ node number-of-steps-to-reduce-a-number-to-zero.js
 */

/**
 * @param {number} num
 * @return {number}
 */

const num = 8;

var numberOfSteps = function(num) {
  let steps = 0;
  while (num !== 0) {
    num = num % 2 === 0 ? num/2 : num - 1;
    steps++;
  }
  return steps;
};

console.log(numberOfSteps(num));

/**
 * Accepted
 * Runtime: 101 ms, Beats 25.88%
 * Memory: 41.5 MB, Beats 93.80%
 */
