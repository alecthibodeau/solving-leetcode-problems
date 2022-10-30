/**
 * 2325. Decode the Message
 * Run locally: $ node decode-the-message.js
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */

const key = 'the quick brown fox jumps over the lazy dog';
const message = 'vkbs bs t suepuv';

var decodeMessage = function(key, message, code = {}) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  key = [...new Set(key.split(''))].filter(item => item !== ' ');
  for (let i = 0; i < alphabet.length; i++) {
    code[key[i]] = alphabet[i];
  }
  return message.split('').map(character => character === ' ' ? ' ' : code[character]).join('');
};

console.log(decodeMessage(key, message));

/**
 * Success
 * Runtime: 116 ms, faster than 44.75% of JavaScript online submissions for Decode the Message.
 * Memory Usage: 43.7 MB, less than 97.58% of JavaScript online submissions for Decode the Message.
 */
