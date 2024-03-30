/**
* 2413. Smallest Even Multiple
* Run locally: $ node smallest-even-multiple.js
*/

/**
 * @param {number} n
 * @return {number}
 */

// Input example 1
// const n = 5;

// Input example 2
const n = 6;

var smallestEvenMultiple = function(n) {
  if (n % 2 !== 0) {
    n = n * 2;
  } else {
    while (n % 2 !== 0) n = n / 2;
  }
  return n;
};

console.log(smallestEvenMultiple(n));

/**
* Accepted
* Runtime: 42 ms, Beats 95.28% of users with JavaScript
* Memory: 48.12 MB, Beats 95.82% of users with JavaScript
*/
