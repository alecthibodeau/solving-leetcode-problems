/**
 * 2124. Check if All A's Appears Before All B's
 * Run locally: $ check-if-all-as-appears-before-all-bs.js
 */

const s = 'aabba';

var checkString = function(s) {
    if (s.length === 1) return true;
    for (let i = 0; i < s.length; i++) {
        if (s[i] + s[i + 1] === 'ba') {
            return false;
        }
    }
    return true;
};

console.log(checkString(s));

/**
 * Success
 * Runtime: 62 ms, faster than 88.40% of JavaScript online submissions for Check if All A's Appears Before All B's.
 * Memory Usage: 42.6 MB, less than 14.11% of JavaScript online submissions for Check if All A's Appears Before All B's.
 */
