/**
 * 1189. Maximum Number of Balloons
 * Run locally: $ node maximum-number-of-balloons.js
 */

/**
 * @param {string} text
 * @return {number}
 */

// Input example 1
// const text = "nlaebolko";

// Input example 2
// const text = "loonbalxballpoon";

// Input example 3
// const text = "leetcode";

// Input example 4
// const text = "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw";

// Input example 5
const text = "balllllllllllloooooooooon";

var maxNumberOfBalloons = function(text) {
  const letters = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0
  };

  let maxNumber = 0;

  for (let i = 0; i < text.length; i++) {
    if (letters[text.charAt(i)] !== undefined) letters[text.charAt(i)]++;
  }
  if (Object.values(letters).every(value => value > 0)) {
    maxNumber = Math.min(...[
      Math.min(...[letters.b, letters.a, letters.n]),
      Math.floor(Math.min(...[letters.l, letters.o]) / 2)
    ]);
  }
  return(maxNumber);
};

console.log(maxNumberOfBalloons(text));

/**
 * Accepted
 * Runtime: 63 ms, Beats 41.65% of users with JavaScript
 * Memory: 49.24 MB, Beats 84.12% of users with JavaScript
 */
