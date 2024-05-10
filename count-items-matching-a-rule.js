/**
 * 1773. Count Items Matching a Rule
 * Run locally: $ node count-items-matching-a-rule.js
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

// Input example 1
// const items = [
//   ["phone","blue","pixel"],
//   ["computer","silver","lenovo"],
//   ["phone","gold","iphone"]
// ];
// const ruleKey = "color";
// const ruleValue = "silver";

// Input example 2
const items = [
  ["phone","blue","pixel"],
  ["computer","silver","phone"],
  ["phone","gold","iphone"]
];
const ruleKey = "type";
const ruleValue = "phone";

var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0;
  const rules = [
    ruleKey === 'type' ? ruleValue : '',
    ruleKey === 'color' ? ruleValue : '',
    ruleKey === 'name' ? ruleValue : ''
  ];
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items[i].length; j++) {
      if (items[i][j] === rules[j]) {
        count ++;
        break;
      }
    }
  }
  return count;
};

console.log(countMatches(items, ruleKey, ruleValue));
