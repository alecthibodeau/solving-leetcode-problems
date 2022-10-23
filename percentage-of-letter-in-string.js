/**
 * 2278. Percentage of Letter in String
 * Run locally: $ node percentage-of-letter-in-string.js
 */

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */

const s = 'foobar';
const letter = 'o';

var percentageLetter = function(s, letter, count = 0) {
  s.split('').forEach(character => {if (character === letter) count++});
  return count ? Math.floor(count / s.length * 100) : 0;
};

console.log(percentageLetter(s, letter));

/**
 * Success
 * Runtime: 94 ms, faster than 46.78% of JavaScript online submissions for Percentage of Letter in String.
 * Memory Usage: 42.4 MB, less than 10.53% of JavaScript online submissions for Percentage of Letter in String.
 */
