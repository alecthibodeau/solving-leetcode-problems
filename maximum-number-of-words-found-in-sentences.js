/**
 * 2114. Maximum Number of Words Found in Sentences
 * Run locally: $ node maximum-number-of-words-found-in-sentences.js
 */

const sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much']

var mostWordsFound = function(sentences) {
    const words = [0];
    sentences.forEach(sentence => {
      if (sentence.split(' ').length > words[words.length - 1]) {
        words.push(sentence.split(' ').length);
      }
    })
    return words[words.length - 1];
};

console.log(mostWordsFound(sentences));

/**
 * Success
 * Runtime: 97 ms, faster than 35.92% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
 * Memory Usage: 44.2 MB, less than 74.00% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
 */
