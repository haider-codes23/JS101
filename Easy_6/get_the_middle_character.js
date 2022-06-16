//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              -
//
//       Rules:-
//         Explicit Requirement:
//          - The function should take a non-empty string argument.
//          - Return the middle value of the string.
//             - If the string has an odd length, you should return exactly one
//               character
//             - If the string has an even length, you should return exactly two
//               character
//         Implicit Requirements:
//          - Character could be any character e.g whiteSpace, digit or a
//            punctuation.
//          - If there is only one character in the string argument provided
//            to the function return that character as it is.
//
// E --> Examples and Test Cases
//         - centerOf('I Love JavaScript') === "a"; // true
//         - centerOf('Launch School') === " ";     // true
//         - centerOf('Launch') === "un";           // true
//         - centerOf('Launchschool') === "hs";     // true
//         - centerOf('x') === "x";                 // true
//
//
// D --> Data Structure: String
//
// A --> Algorithm:
//       - Decalre a varible stringLength and initialize it with the length
//         of string argument provided.
//       - check if the string length is even or odd
//          - if it is even (stringLength % 2 === 0)
//             - Invoke slice method on the string with starting index equal to
//               (length / 2) -1 , ending index equal to (length / 2) + 1
//               and store the return value in the varibale result.
//          - if it is odd (stringLength % 2 === 1)
//             - Invoke slice method on the string with starting index
//               (length / 2) - 1 rounded to the nearest integer, the
//               ending index equal to (length /  2 ) rounded to the
//               nearest integer and store the return value in the
//               variable result.
//        - return the result.
//
// C --> Code With Intent

function centerOf(str) {
  let result;
  let strLength = str.length;
  if (strLength % 2 === 0) {
    result = str.slice(((strLength / 2) - 1),((strLength / 2) + 1));
  } else if (strLength % 2 === 1) {
    // eslint-disable-next-line max-len
    result = str.slice(Math.round(strLength / 2) - 1, Math.round(strLength / 2));
  }

  return result;
}

console.log(centerOf('I love JavaScript') === "a"); // true
console.log(centerOf('Launch School') === " "); // true
console.log(centerOf('Launch') === "un"); // true
console.log(centerOf('Launchschool') === 'hs'); // true
console.log(centerOf('x')); // true
console.log(centerOf(' ') === ' '); //true