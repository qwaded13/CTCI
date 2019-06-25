// 1.3 URLify
/*
  Write method to replace all spaces in string with '%20'
  We are given the true length of the string
  ** Use a character array, modify in-place **

  Questions:
    What about duplicate spaces? for now just treat as one space
    
*/

let urlify = function(s, len) {
  // two pass algorithm
  // first pass - count the number of whitespaces
  // determine the end index to begin editing for the second pass
  //   index = truelength + whitespaces * 2
  // second pass, actually edit the string in reverse order
  //   start at the truelength - 1 of original string
  //   if whitespace, modify index -1 (0), index -2(2), and index -3(%)
  //   if not, just put the original char in the string
};
