/**
 * CTCI - 1.2
 *
 * CHECK PERMUTATION
 * Given two strings, write a method to decide of one is a permutation of the other.
 * 
 * I: 2 strings
 * O: boolean
 * C: optimize
 * E: empty string, diff lengths
 */

// time complexity: O(2n) - linear
// space complexity: O(n) - linear

let checkPerm = (s1, s2) => {
  //if two strings have diff lengths, automatically return false
  //one way: sort both strings and compare -- O(n log n)
  //to optimize, we can make a map of one string, and check the second string

  let hash = {};

  if (s1.length !== s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    let c = s1[i];
    if (hash[c]) {
      hash[c]++;
    } else {
      hash[c] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    let c = s2[i];
    if (hash[c] && hash[c] !== 0) {
      hash[c]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(
  checkPerm('', '') === true,
  checkPerm('so', 'os') === true,
  checkPerm('sos', 'os') === false,
  checkPerm('abc', 'abz') === false,
  checkPerm('restful', 'fluster') === true,
  checkPerm('baab', 'bbba') === false
);
