/**
 * 824. Goat Latin
 * Run locally: $ node goat-latin.js
 */

const sentence = 'I speak Goat Latin';

var toGoatLatin = function(sentence) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if ('aeiou'.includes(words[i].toLowerCase().charAt(0))) {
            words[i] += 'ma' + 'a'.repeat(i + 1);
        } else {
            words[i] = words[i].substring(1) + words[i].charAt(0) + 'ma' + 'a'.repeat(i + 1);
        }
    }

    return words.join(' ');
};

console.log(toGoatLatin(sentence));

/**
 * Success
 * Runtime: 97 ms, faster than 22.80% of JavaScript online submissions for Goat Latin.
 * Memory Usage: 42.2 MB, less than 66.32% of JavaScript online submissions for Goat Latin.
 */
