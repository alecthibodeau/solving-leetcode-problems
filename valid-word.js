/**
 * 3136. Valid Word
 * Run locally: $ node valid-word.js
 */

/**
 * @param {string} word
 * @return {boolean}
 */

// Input example 1
// const word = "234Adas";

// Input example 2
// const word = "b3";

// Input example 3
const word = "a3$e";

var isValid = function(word) {
  if (word.length < 3) return false;
  const vowels = 'aeiou';
  let hasVowel = false;
  let hasConsonant = false;
  for (let i = 0; i < word.length; i++) {
    const code = word.charCodeAt(i);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      if (vowels.includes(word[i].toLowerCase())) {
        if (!hasVowel) hasVowel = true;
      } else {
        if (!hasConsonant) hasConsonant = true;
      }
    } else if (code < 48 || code > 57) {
      return false;
    }
  }
  return hasVowel && hasConsonant;
};

console.log(isValid(word));
