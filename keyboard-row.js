/**
 * 500. Keyboard Row
 * Run locally: $ node keyboard-row.js
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */

const words = ['Hello', 'Alaska', 'Dad', 'Peace'];
// const words = ['adsdf', 'sfd'];
// const words = ['omk'];


var findWords = function(words) {
  const singleRowWords = [];
  words.forEach(word => {
    const rows = {
      qwertyuiop: 0,
      asdfghjkl: 0,
      zxcvbnm: 0
    }
    word.toLowerCase().split('').forEach(letter => {
      Object.keys(rows).forEach(key => {
        if (key.includes(letter)) rows[key] = 1;
      });
    });
    if (Object.values(rows).reduce((a, b) => a + b, 0) === 1) {
      singleRowWords.push(word);
    }
  });
  return singleRowWords;
};

console.log(findWords(words));

/**
 * Success
 * Runtime: 99 ms, faster than 25.85% of JavaScript online submissions for Keyboard Row.
 * Memory Usage: 42.1 MB, less than 41.88% of JavaScript online submissions for Keyboard Row.
 */
