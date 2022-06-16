//  P --> Understand the Problem
//         Input: Number
//         Output: Number
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take a number as an argument
//              - If the argument is a positive number, return the negative
//                of that number.
//              - If the argument is a negative number, return the number
//                as-is.
//            Implicit Requirements:
//              - If a number is 0 then return negative zero.
//
// E --> Examples and Test Cases
//         - console.log(negative(5) === -5) // true
//         - console.log(negative(-3) === -3) // true
//         - console.log(negative(0) === -0) // true
//
//
// D --> Data Structure: Number
//
// Algorithm:
//       - Declare a varibale result.
//       - Check if the number argument provided by the function is negative
//         or positive.
//       - If it is positive then multiply the number by -1 and store the
//         product in result
//       - If it is negative then store the number in result as-is.
//       - Return result
//
// C --> Code With Intent

function negative(number) {
  let result;
  if (number > 0) {
    result = -1 * number;
  } else if (number < 0) {
    result = number;
  } else if (number === 0) {
    result = number * -1;
  }
  return result;
}

console.log(negative(5) === -5); // true
console.log(negative(-3) === -3);  // true
console.log(negative(0)); // true
