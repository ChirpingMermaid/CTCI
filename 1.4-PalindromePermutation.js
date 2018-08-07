/**
CTCI - 1.4

Palindrome Permutation:

Given a string, write a function to check if it is a permutation of a palindrome.  
A palindrome is a word or phrase that is the same forwards and backwards.  
A permutation is a rearrangement of letters.  
The palindrome does not need to be limited to just dictionary words.

EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cat", etc.)

I: String
O: Boolean
C: optimize
E: empty string, even and odd chars, spaces between and in front and at end, more than 2 of the same char

time complexity: linear
space complexity: linear
*/

let palPerm = (s) => {
  //if even: there must be two of every char
  //if odd: there must be only one unique char

  //use hash table to store letters
  //if we see the same letter again, delete from hash
  //check hash at the end: odd - 1 key left, even - no keys left
  //skip spaces

  let hash = {};
  let charCount = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === ' ') {
      continue;
    }
    if (hash[c]) {
      delete hash[c];
    } else {
      hash[c] = true;
    }
    charCount++;
  }
  if (charCount % 2 === 0) {
    return Object.keys(hash).length === 0;
  } else {
    return Object.keys(hash).length === 1;
  }
};

console.log(
  palPerm('taco cat') === true,
  palPerm('atco cat') === true,
  palPerm(' rac  ecar rara ') === true,
  palPerm('chirpingmermaid') === false,
  palPerm('aabbc') === true,
  palPerm('aaaabbbbcc') === true,
  palPerm('aabc') === false,
  palPerm('') === true
);
