/**
 CTCI - 1.1 
 
Is Unique:

Implement an algorithm to determine if a string has all unique characters.  
What if you cannot use additional data structures?

I: string
O: boolean
C: no additional data structures, optimize
E: empty string

time complexity: linear - O(n)
space complexity: linear - O(n)
*/

let isUnique = (s) => {
  //check each character and store in a hash table
  //if we find that the character is already there, return false
  //when done checking, return true
  let hash = {};

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (hash[c]) {
      return false;
    } else {
      hash[c] = true;
    }
  }

  return true;
};

console.log(isUnique('s') === true);
console.log(isUnique('') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('stories') === false);
console.log(isUnique('rainbow') === true);
console.log(isUnique('chirpingmermaid') === false);


