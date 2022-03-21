/**
 * 387. First Unique Character in a String
 * Run locally: $ node first-unique-character-in-a-string.js <string>
 */

const s = process.argv[2];

var firstUniqChar = function(s) {
    if (s.length === 1) return 0;
    const uniqueCharacters = [];
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i + 1) === -1 && uniqueCharacters.indexOf(s[i]) === -1) {
            if (i === 0 || s[i] !== s[i - 1] && s.slice(0, i - 1).indexOf(s[i]) === -1) {
                uniqueCharacters.push(s[i]);
            }
        }
    }
    return uniqueCharacters.length ? s.indexOf(uniqueCharacters[0]) : -1;
};

console.log(firstUniqChar(s));

/**
 * Success
 * Runtime: 131 ms, faster than 63.55% of JavaScript online submissions for First Unique Character in a String.
 * Memory Usage: 45.3 MB, less than 60.56% of JavaScript online submissions for First Unique Character in a String.
 */
