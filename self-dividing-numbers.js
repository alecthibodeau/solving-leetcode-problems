/**
 * 728. Self Dividing Numbers
 * Run locally: $ node self-dividing-numbers.js
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

// Input example 1
// const left = 1;
// const right = 22;

// Input example 2
const left = 47;
const right = 85;

var selfDividingNumbers = function(left, right) {
  const output = [];
  for (let i = left; i <= right; i++) {
    const iToString = i.toString();
    let validCount = 0;
    for (let j = 0; j < iToString.length; j++) {
      if (i % +iToString[j] === 0) validCount++;
    }
    if (validCount === iToString.length) output.push(i);
  }
  return(output);
};

console.log(selfDividingNumbers(left, right));

/**
 * Accepted
 * Runtime: 55 ms, Beats 72.73% of users with JavaScript
 * Memory: 48.92 MB, Beats 92.49% of users with JavaScript
 */
