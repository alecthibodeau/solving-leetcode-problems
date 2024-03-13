/**
 * 2951. Find the Peaks
 * Run locally: $ node find-the-peaks.js
 */

/**
 * @param {number[]} mountain
 * @return {number[]}
 */

// Testcase
// const mountain = [2,4,4];

// Input example
const mountain = [1,4,3,8,5];

var findPeaks = function(mountain) {
  const answer = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      answer.push(i);
    }
  }
  return answer;
};

console.log(findPeaks(mountain));

/**
 * Accepted
 * Runtime: 52 ms, Beats 95.98% of users with JavaScript
 * Memory: 49.17 MB, Beats 89.51% of users with JavaScript
 */
