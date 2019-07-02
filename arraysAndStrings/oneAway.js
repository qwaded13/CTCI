// 1.5 One Away

// You can insert a character, remove a character, or replace a character to edit a string
// Given two strings, write a function to check if they are one or zero edits away

// EX: pale, ple -> true, pales, pale -> true

let oneAway = function(s1, s2) {
  // preliminary check on the difference in lengths of the two strings
  // if the lengths are more than one apart, return false immediately
  // oneEditReplace()
  // loop through both strings with a foundDifference flag
  // if the two characters are not equal and already a difference, return false
  //    else set the foundDifference flag to true
  // at end of loop, return true
  // oneEditInsert()
  // initialize the index of both strings
  // iterate through each character of strings using while loops
  //    if the chars are not equal and the indexes are not equal, return false
  //      else, increment the second index
  //    else (chars are equal)
  //      increment both indexes
  // O(n) where n is the length of the shorter string
  // Runtime only increases if both strings are very long, not if only one is long
  // Try to merge both methods into one
};
