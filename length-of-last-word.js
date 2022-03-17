/**
 * 58. Length of Last Word
 * Run locally: $ node length-of-last-word.js <string>
 */

const s = process.argv[2];

var lengthOfLastWord = function(s) {
    const array = s.trim().split(' ');
    return array[array.length - 1].length;
};

console.log(lengthOfLastWord(s));

/**
 * Success
 * Runtime: 52 ms, faster than 99.15% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 41.8 MB, less than 64.47% of JavaScript online submissions for Length of Last Word.
 */
