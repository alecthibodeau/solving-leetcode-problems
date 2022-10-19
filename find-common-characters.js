/**
 * 1002. Find Common Characters
 * Run locally: $ node find-common-characters.js
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */

const words = ['bella', 'label', 'roller'];

var commonChars = function(words, characters = []) {
  for (const letter of words[0]) {
      if (words.every(word => word.includes(letter))) {
          characters.push(letter);
          words = words.map(word => word.replace(letter, ''));
      }
  }
  return characters;
};

console.log(commonChars(words));

/**
* Success
* Runtime: 106 ms, faster than 81.76% of JavaScript online submissions for Find Common Characters.
* Memory Usage: 43.6 MB, less than 99.56% of JavaScript online submissions for Find Common Characters.
*/
