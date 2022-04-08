/**
 * 434. Number of Segments in a String
 * Run locally: $ node number-of-segments-in-a-string.js
 */

const s = '    Hello, my name is John ';

var countSegments = function(s) {
    const segments = s.trim().replace(/\s+/g, ' ').split(' ');
    return segments[0] ? segments.length : 0;
};

console.log(countSegments(s));

/**
 * Success
 * Runtime: 113 ms, faster than 7.63% of JavaScript online submissions for Number of Segments in a String.
 * Memory Usage: 41.9 MB, less than 56.11% of JavaScript online submissions for Number of Segments in a String.
 */
