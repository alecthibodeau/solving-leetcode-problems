/**
 * 2739. Total Distance Traveled
 * Run locally: $ node total-distance-traveled.js
 */

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */

// Input example 1
// const mainTank = 5;
// const additionalTank = 10;

// Input example 2
const mainTank = 1;
const additionalTank = 2;

var distanceTraveled = function(mainTank, additionalTank) {
  let distance = 0;
  for (let i = 1; i <= mainTank; i++) {
    distance += 10;
    if (i % 5 === 0 && additionalTank > 0) {
      mainTank++;
      additionalTank--;
    }
  }
  return distance;
};

console.log(distanceTraveled(mainTank, additionalTank));
