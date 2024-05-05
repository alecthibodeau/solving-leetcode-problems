/**
 * 2255. Count Prefixes of a Given String
 * Run locally: $ node count-prefixes-of-a-given-string.js
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */

// Input example 1
// const words = ["a","b","c","ab","bc","abc"];
// const s = "abc";

// Input example 2
// const words = ["a","a"];
// const s = "aa";

// Input example 3
// const words = ["feh","w","w","lwd","c","s","vk","zwlv","n","w","sw","qrd","w","w","mqe","w","w","w","gb","w","qy","xs","br","w","rypg","wh","g","w","w","fh","w","w","sccy"];
// const s = "w";

// Input example 4
const words = ["ycwj","hak","v","kjg","zw","vtes","vom","ii","as","v","vo","v","w","vomy","loa","fbm","j","v","vo","e","y","t","eh","yk","bt","x","vomy","vom","yab","v","sydi","wnb","z","v","iygp","vomy"];
const s = "vomy";

var countPrefixes = function(words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] !== s[j]) {
        break
      } else if (j === words[i].length - 1) {
        count++;
      }
    }
  }
  return count;
};

console.log(countPrefixes(words, s));
