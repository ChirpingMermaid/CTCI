/**
CTCI - 1.5

One Away: 

There are three types of edits that can be performed on strings: 
- insert a character,
- remove a character, 
- or replace a character. 
Given two strings, write a function to check if they are
one edit (or zero edits) away.

EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false 

I: 2 strings
O: boolean
C: optimize
E: empty string, 

time complexity: linear
space complexity: constant
*/

//if insert, then s1's current char should match s2's next char
//if remove, then s1's next char should match s2's current char
//if replace, then s1's next char should match s2's next char

//max one edit
//if diff in lengths is greater than max edit, return false

//iterate through strings at the same time, checking for diff
//store max length for forloop condition
//if diff is found, dec edits, check if edits dropped below zero, if so return false
//when forloop is done, return true

let oneAway = (s1, s2) => {
  let edits = 1;
  let maxLen = Math.max(s1.length, s2.length);
  let diff = Math.abs(s1.length - s2.length);

  if (diff > edits) {
    return false;
  }
  for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
    let c1 = s1[i];
    let c2 = s2[j];
    if (c1 !== c2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (s1[i] === s2[j + 1]) { //inserted
        j++;
      } else if (s1[i + 1] === s2[j]) { //removed
        i++;
      }
    } 
  }
  return true;
};

// let oneAway = (s1, s2) => {
//   let edits = 1;
//   let long = s1.length > s2.length ? s1 : s2;
//   let short = s1.length <= s2.length ? s1 : s2;

//   let maxLen = Math.max(s1.length, s2.length);
//   let diff = long.length - short.length;

//   if (diff > edits) {
//     return false;
//   }

//   for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
//     let c1 = long[i];
//     let c2 = short[j];
//     if (c1 !== c2) {
//       edits--;
//       if (edits < 0) {
//         return false;
//       }
//       if (long[i + 1] === c2) { //inserted or removed
//         i++;
//       }
//     }
//   }
//   return true;
// };


console.log(
  oneAway('pale', 'ple') === true, //removed
  oneAway('pales', 'pale') === true, //inserted
  oneAway('pale', 'bale') === true, //replaced
  oneAway('pale', 'bake') === false,
  oneAway('p', '') === true,
  oneAway('', 'bake') === false,
  oneAway('pr', 'r') === true,
  oneAway('pr', 'rp') === false,
  oneAway('brrr', 'brrss') === false,
  oneAway('abc', 'acs') === false,
  oneAway('aple', 'aple') === true 
);


