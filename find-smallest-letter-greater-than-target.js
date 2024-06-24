/**
 * 744. Find Smallest Letter Greater Than Target
 * Run locally: $ node find-smallest-letter-greater-than-target.js
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// Input example 1
// const letters = ["c","f","j"];
// const target = "a";

// Input example 2
// const letters = ["c","f","j"];
// const target = "c";

// Input example 3
const letters = ["x","x","y","y"];
const target = "z";

var nextGreatestLetter = function(letters, target) {
  let smallest = Infinity;
  for (const letter of letters) {
    const code = letter.charCodeAt(0);
    if (code < smallest && code > target.charCodeAt(0)) smallest = code;
  }
  return smallest === Infinity ? letters[0] : String.fromCharCode(smallest);
};

console.log(nextGreatestLetter(letters, target));
