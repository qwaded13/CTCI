// 1.2 Check Permutation
// Given two strings, write a function to decide if one is a permutation of the other

let checkPermutation = function(s1, s2) {
  // easy solution - sort both strings and then check if the resulting strings are equal
  // O(n log n)
  // MY SOLUTION:
  // iterate through both strings
  // build up a hash of characters in each string
  // if the two hash tables are the same, return true
  // if not, return false
  // O(n) time
  // second implementation
  // iterate through both strings
  // build up one hash table
  //   if char from s1, value = val + 1
  //   if char from s2, value = val - 1
  // if all values of object are not zero, return false
  // else, return true
  // O(n) time as well
};
