/**
 * 2506. Count Pairs Of Similar Strings
 * Run locally: $ node count-pairs-of-similar-strings.js
 */

/**
 * @param {string[]} words
 * @return {number}
 */

// Input example 1
const words = ["aba","aabb","abcd","bac","aabc"];

// Input example 2
// const words = ["aabb","ab","ba"];

var similarPairs = function(words) {
  const counts = {};
  words.forEach((word) => {
    word = Array.from(new Set(word.split('').sort())).join('');
    counts[word] = (counts[word] || 0) + 1;
  });
  return Object.values(counts).reduce((a, b) => a + (b > 1 ? (b * (b - 1)) / 2 : 0), 0);
};

console.log(similarPairs(words));
