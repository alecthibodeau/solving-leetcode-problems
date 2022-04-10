/**
 * 520. Detect Capital
 * Run locally: $ node detect-capital.js <string>
 */

const word = process.argv[2];

var detectCapitalUse = function(word) {
  return (
    word === word.toLowerCase() ||
    word === word.toUpperCase() ||
    word === word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  ) ? true : false;
};

console.log(detectCapitalUse(word));

/**
 * Success
 * Runtime: 89 ms, faster than 47.86% of JavaScript online submissions for Detect Capital.
 * Memory Usage: 42.3 MB, less than 71.90% of JavaScript online submissions for Detect Capital.
 */
