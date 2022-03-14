/*
  412. Fizz Buzz
  Run locally: $ node fizz-buzz.js <number>
 */

const n = process.argv[2];

var fizzBuzz = function(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            array.push('FizzBuzz');
        } else if (i % 3 === 0) {
            array.push('Fizz');
        } else if (i % 5 === 0) {
            array.push('Buzz');
        } else {
            array.push(i.toString());
        }
    }
    return array;
};

console.log(fizzBuzz(n));

/*
  Success
  Runtime: 56 ms, faster than 99.77% of JavaScript online submissions for Fizz Buzz.
  Memory Usage: 44.4 MB, less than 53.13% of JavaScript online submissions for Fizz Buzz.
 */
