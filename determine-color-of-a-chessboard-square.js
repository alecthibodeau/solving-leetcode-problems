/**
 * 1812. Determine Color of a Chessboard Square
 * Run locally: $ node determine-color-of-a-chessboard-square.js
 */

/**
 * @param {string} coordinates
 * @return {boolean}
 */

const coordinates = 'a1';

var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) % 2 !== coordinates.charAt(1) % 2) ? true : false;
};

console.log(squareIsWhite(coordinates));

/**
 * Accepted
 * Runtime: 65 ms, Beats 82.91%
 * Memory: 41.6 MB, Beats 85.47%
 */
