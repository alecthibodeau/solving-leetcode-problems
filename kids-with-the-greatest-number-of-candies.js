/**
 * 1431. Kids With the Greatest Number of Candies
 * Run locally: $ node kids-with-the-greatest-number-of-candies.js
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// Testcase
const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

var kidsWithCandies = function(candies, extraCandies) {
  const output = [];

  for (let i = 0; i < candies.length; i++) {
    let greatestCount = 0;
    for (let j = 0; j < candies.length; j++) {
      if (candies[i] + extraCandies >= candies[j]) greatestCount++;
    }
    output.push(greatestCount === candies.length);
  }

  return output;
};

console.log(kidsWithCandies(candies, extraCandies));

/**
 * Accepted
 * Runtime: 66 ms, Beats 20.24% of users with JavaScript
 * Memory: 42.55 MB, Beats 66.22% of users with JavaScript
 */
