// 1.1 Is Unique
// Implement an algorithm to determine if a string has all unique characters

let isUnique = function(s) {
  let hash = {};
  for (let char of s) {
    if (hash[char] === true) {
      return false;
    }
    hash[char] = true;
  }
  return true;
};

// What if you can't use additional data structures?

/*
Can check each element to each other element
  O(1) space, O(n^2) time complexity
Can also sort each string, then check each character
  O(n log n) time
*/
