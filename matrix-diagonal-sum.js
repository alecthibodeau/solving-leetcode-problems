/**
 * 1572. Matrix Diagonal Sum
 * Run locally: $ node matrix-diagonal-sum.js
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */

// Input example 1
// const mat = [[1, 2, 3],
//              [4, 5, 6],
//              [7, 8, 9]];

// Input example 2
// const mat = [[1,1,1,1],
//              [1,1,1,1],
//              [1,1,1,1],
//              [1,1,1,1]];

// Input example 2
const mat = [[5]];

var diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i] + (i * 2 + 1 !== mat[i].length ? mat[i].at(-(i + 1)) : 0);
  }
  return sum;
};

console.log(diagonalSum(mat));

/**
 * Accepted
 * Runtime: 66 ms, Beats 7.60% of users with JavaScript
 * Memory: 50.96 MB, Beats 48.26% of users with JavaScript
 */
