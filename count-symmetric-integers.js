/**
 * 2843. Count Symmetric Integers
 * Run locally: $ node count-symmetric-integers.js
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

// Input example 1
// const low = 1;
// const high = 100;

// Input example 2
const low = 1200;
const high = 1230;

const sum = function(iString, start, end) {
  return iString.slice(start, end).split('').reduce((a, b) => +a + +b);
};

var countSymmetricIntegers = function(low, high) {
  let count = 0;
  for (let i = low; i <= high; i++) {
    const iString = String(i);
    if (iString.length % 2 === 0) {
      const half = iString.length/2;
      if (sum(iString, 0, half) === sum(iString, -half, iString.length)) count++;
    }
  }
  return count;
};

console.log(countSymmetricIntegers(low, high));
