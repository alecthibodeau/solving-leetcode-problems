/**
 * 1592. Rearrange Spaces Between Words
 * Run locally: $ node rearrange-spaces-between-words.js
 */

/**
 * @param {string} text
 * @return {string}
 */

const text = '  this   is  a sentence ';

var reorderSpaces = function(text) {
  let currentWord = '';
  let totalSpacesCount = 0;
  const words = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      totalSpacesCount++;
      if (currentWord) {
        words.push(currentWord);
        currentWord = '';
      }
    } else {
      currentWord += text[i];
      if (i === text.length - 1) words.push(currentWord);
    }
  }
  if (words.length === 1) return words[0] + ' '.repeat(totalSpacesCount);
  const spaceSection = Math.floor(totalSpacesCount / (words.length -  1));
  const extraSpaces = totalSpacesCount % (words.length -  1);
  return words.join(' '.repeat(spaceSection)) + ' '.repeat(extraSpaces);
};

console.log(reorderSpaces(text));

/**
 * Accepted
 * Runtime: 105 ms, Beats 20.13%
 * Memory: 42 MB, Beats 65.10%
 */
