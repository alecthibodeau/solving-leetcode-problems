/**
 * 657. Robot Return to Origin
 * Run locally: $ node robot-return-to-origin.js
 */

const moves = 'LLLRRDUU';

var judgeCircle = function(moves) {
    const position = [0,0];
    const axes = {
        x: {
            R: 1,
            L: -1
        },
        y: {
            U: 1,
            D: -1
        }
    }
    for (let i = 0; i < moves.length; i++) {
        axes.x[moves[i]] ? position[0] += axes.x[moves[i]] : position[1] += axes.y[moves[i]];
    }
    return !position[0] && !position[1];
};

console.log(judgeCircle(moves));

/**
 * Success
 * Runtime: 104 ms, faster than 46.48% of JavaScript online submissions for Robot Return to Origin.
 * Memory Usage: 44.4 MB, less than 43.19% of JavaScript online submissions for Robot Return to Origin.
 */
