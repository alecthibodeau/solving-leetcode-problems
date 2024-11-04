/**
 * 804. Unique Morse Code Words
 * Run locally: $ node unique-morse-code-words.js
 */

/**
 * @param {string[]} words
 * @return {number}
 */

// Input example 1
// const words = ["gin","zen","gig","msg"];

// Input example 2
// const words = ["a"];

// Input example 3
const words = ["rwjje","aittjje","auyyn","lqtktn","lmjwn"];

var uniqueMorseRepresentations = function(words) {
  const morseCodeTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  const transformations = words.map(word => {
    let transformation = '';
    for (let i = 0; i < word.length; i++) {
      transformation += morseCodeTable[word.charCodeAt(i) - 97];
    }
    return transformation;
  });
  return new Set(transformations).size;
};

console.log(uniqueMorseRepresentations(words));

/**
 * Accepted
 * Runtime: 1 ms, Beats 85.71% of users with JavaScript
 * Memory: 49.26 MB, Beats 92.45% of users with JavaScript
 */
