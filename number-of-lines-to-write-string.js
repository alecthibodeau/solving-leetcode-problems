/**
 * 806. Number of Lines To Write String
 * Run locally: $ node number-of-lines-to-write-string.js
 */

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */

// Testcase
// const widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
// const s = "abcdefghijklmnopqrstuvwxyz";

// Input example
const widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
const s = "bbbcccdddaaa";

var numberOfLines = function(widths, s) {
  const alphabetWidths = {};
  const stringWidths = [];
  let currentLineWidth = 0;
  const result = [0, 0];

  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    alphabetWidths[letter] = widths[i - 97];
  }

  for (let i = 0; i < s.length; i++) {
    stringWidths.push(alphabetWidths[s[i]]);
  }

  for (let i = 0; i < stringWidths.length; i++) {
    currentLineWidth = currentLineWidth + stringWidths[i];
    if (!stringWidths[i + 1] || (currentLineWidth + stringWidths[i + 1] > 100)) {
      result[0] = result[0] + 1;
      result[1] = currentLineWidth;
      currentLineWidth = 0;
    }
  }
  return result;
};

console.log(numberOfLines(widths, s));

/**
 * Accepted
 * Runtime: 53 ms, Beats 71.78% of users with JavaScript
 * Memory: 50.50 MB, Beats 7.43% of users with JavaScript
 */
