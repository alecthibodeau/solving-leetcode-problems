/**
 * 2129. Capitalize the Title
 * Run locally: $ capitalize-the-title.js
 */

const title = 'First leTTeR of EACH Word';

var capitalizeTitle = function(title) {
    const words = title.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
        }
    }
    return words.join(' ');
};

console.log(capitalizeTitle(title));

/**
 * Success
 * Runtime: 56 ms, faster than 98.67% of JavaScript online submissions for Capitalize the Title.
 * Memory Usage: 42.5 MB, less than 61.70% of JavaScript online submissions for Capitalize the Title.
 */
