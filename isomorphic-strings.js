/**
 * 205. Isomorphic Strings
 * Run locally: $ node isomorphic-strings.js
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 const s = 'egg';
 const t = 'add';

var isIsomorphic = function(s, t) {
  const characters = {};
  for (let i = 0; i < s.length; i++) {
    if (!characters[s[i]]) {
      for (let j = 0; j < Object.keys(characters).length; j++) {
        if (t[j] === t[i]) {
          return false;
        }
      }
      characters[s[i]] = t[i];
    } else if (characters[s[i]] !== t[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic(s, t));

/**
 * Accepted
 * Runtime: 74 ms, Beats 95.60%
 * Memory: 48.6 MB, Beats 10.68%
 */
