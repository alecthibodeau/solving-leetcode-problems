/**
 * 2810. Faulty Keyboard
 * Run locally: $ node faulty-keyboard.js
 */

/**
 * @param {string} s
 * @return {string}
 */

// Testcase
const s = "string";

// Input example
// const s = "poiinter";

var finalString = function(s) {
  let characters = [];
  for (let i = 0; i < s.length; i++) {
    s.charAt(i) === 'i' ? characters = characters.reverse() : characters.push(s.charAt(i));
  }
  return characters.join('');
};

console.log(finalString(s));

/**
 * Accepted
 * Runtime: 113 ms, Beats 37.87% of users with JavaScript
 * Memory: 52.50 MB, Beats 72.48% of users with JavaScript
 */
