/**
 * 20. Valid Parentheses
 * Run locally: $ node valid-parentheses.js <string>
 */

const s = process.argv[2];

var isValid = function(s) {
    const originalLength = s.length;
    let i = 0;
    while (i < originalLength) {
        s = s.replace(/\(\)/g, '').replace(/{}/g, '').replace(/\[\]/g, '');
        i++;
    }
    return s ? false : true;
};

console.log(isValid(s));
