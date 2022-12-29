/**
 * 14. Longest Common Prefix
 * Run locally: $ node longest-common-prefix.js
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

const strs = ['flower', 'flow', 'flight'];

var longestCommonPrefix = function(strs) {

  const sorted = strs.sort((a, b) => {
    return a.length - b.length;
  });

  let output = '';

  for (let i = 0; i < sorted[0].length; i++) {
    const common = sorted[0][i];
    for (let j = 1; j < sorted.length; j++) {
      if (sorted[j][i] !== common) return output;
    }
    output = output + common;
  }

  return output;
};

console.log(longestCommonPrefix(strs));

/**
 * Accepted
 * Runtime: 80 ms, Beats 71.46%
 * Memory: 41.9 MB, Beats 92.82%
 */
