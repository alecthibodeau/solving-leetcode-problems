/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * Run locally: $ node subtract-the-product-and-sum-of-digits-of-an-integer.js
 */

/**
 * @param {number} n
 * @return {number}
 */

// Input example 1
const n = 234;

// Input example 2
// const n = 4421;


var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;
  Array.from(String(n), Number).forEach(number => {
    product *= number;
    sum += number;
  });
  return product - sum;
};

console.log(subtractProductAndSum(n));

/**
 * Accepted
 * Runtime: 52 ms, Beats 58.14% of users with JavaScript
 * Memory: 48.78 MB, Beats 52.77% of users with JavaScript
 */
