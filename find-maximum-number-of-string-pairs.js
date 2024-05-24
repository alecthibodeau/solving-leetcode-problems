/**
 * 2744. Find Maximum Number of String Pairs
 * Run locally: $ node find-maximum-number-of-string-pairs.js
 */

/**
 * @param {string[]} words
 * @return {number}
 */

// Input example 1

// const words = ["cd","ac","dc","ca","zz"];

// Input example 2
// const words = ["ab","ba","cc"];

// Input example 3
const words = ["aa","ab"];

var maximumNumberOfStringPairs = function(words) {
  let pairHalves = 0;
  for (const word of words) {
    if (word[0] !== word[1] && words.includes(word[1] + word[0])) pairHalves += .5;
  }
  return pairHalves;
};

console.log(maximumNumberOfStringPairs(words));

/**
 * Accepted
 * Runtime: 60ms ms, Beats 86.09% of users with JavaScript
 * Memory: 51.35 MB, Beats 74.76% of users with JavaScript
 */
