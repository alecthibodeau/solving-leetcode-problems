/**
 * 415. Add Strings
 * Run locally: $ node add-strings.js <num1 as string> <num2 as string>
 */

 const num1 = process.argv[2];
 const num2 = process.argv[3];

var addStrings = function(num1, num2) {
    const reverseList = (num) => num.split('').reverse();
    const longer = num1.length > num2.length ? reverseList(num1) : reverseList(num2);
    const shorter = num2.length < num1.length ? reverseList(num2) : reverseList(num1);
    let carry = 0;
    for (let i = 0; i < longer.length; i++) {
        if (shorter[i] || carry) {
            let sum = (+longer[i] + (shorter[i] ? +shorter[i] : 0) + carry).toString();
            longer[i] = sum.length > 1 ? sum[1] : sum;
            carry = sum.length > 1 ? 1 : 0;
        } else {
            break;
        }
    }
    if (carry) longer.push(carry.toString());
    return longer.reverse().join('');
};

console.log(addStrings(num1, num2));

/**
 * Success
 * Runtime: 101 ms, faster than 49.83% of JavaScript online submissions for Add Strings.
 * Memory Usage: 45 MB, less than 29.84% of JavaScript online submissions for Add Strings.
 */
