/**
 * 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
 * Run locally: $ node check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence.js
 */

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

// Input example 1
// const sentence = "i love eating burger";
// const searchWord = "burg";

// Input example 2
// const sentence = "this problem is an easy problem";
// const searchWord = "pro";

// Input example 3
const sentence = "i am tired";
const searchWord = "you";


var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
};

console.log(isPrefixOfWord(sentence, searchWord));

/**
 * Accepted
 * Runtime: 42 ms, Beats 91.35% of users with JavaScript
 * Memory: 48.14 MB, Beats 93.27% of users with JavaScript
 */
