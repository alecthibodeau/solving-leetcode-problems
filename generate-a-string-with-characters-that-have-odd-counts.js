/**
 * 1374. Generate a String With Characters That Have Odd Counts
 * Run locally: $ node generate-a-string-with-characters-that-have-odd-counts.js
 */

/**
 * @param {number} n
 * @return {string}
 */

// Input example 1
// const n = 4;

// Input example 2
const n = 2;

var generateTheString = function(n) {
  let characters = '';
  for (let i = 0; i < n; i++) {
    characters += (i === n - 1 && !(n % 2)) ? 'b' : 'a';
  }
  return characters;
};

console.log(generateTheString(n));
