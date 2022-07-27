//  P --> Understand the Problem
//         Input: Number
//         Output: Number
//         Questions:-
//              - what if the number provided as argument is 0 ?
//              - can i assume the number argument to always be an integer ?
//
//         Rules:-
//            Explicit Requirement:
//              - function only takes positive numbers as argument.
//              - reverse the number provided as an an argument.
//              - return the reversed number.
//            Implicit Requirements:
//              - if it is a single digit then return that number as it is.
//              - if a number has zeros after reversing it the zeros get dropped
//
// E --> Examples and Test Cases
//         - console.log(reverseNumber(12345) === 54321) // true
//         - console.log(reverseNumber(12213) === 31221) // true
//         - console.log(reverseNumber(456) === 654) // true
//         - console.log(reverseNumber(12000) === 21) // true
//         - console.log(reverseNumber(1) === 1) // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a varibale numArr
//       - Declare a varibale reversedNum
//       - Convert the number into a string and invoke split method on it
//         and store the returned array in the numStringArray
//       - Start a for loop with the starting index equal to the length of
//         array - 1 and end it at index equal to 0
//       - In the for loops body push the element at the current index into
//         the reversedArr array.
//       - Invoke join method on the reversedArr and store the return value
//         in the variable reversedNum
//       - while returning the reversedNum varibale invoke parseInt on it to
//         drop the zeros at the start of the number if there are any.
//
// C --> Code With Intent

function reverseNumber(number) {
  let numArr = number.toString().split('');
  let reversedArr = [];
  // eslint-disable-next-line for-direction
  for (let index = numArr.length - 1; index >= 0; index--) {
    reversedArr.push(numArr[index]);
  }
  let reversedNum = reversedArr.join('');
  return parseInt(reversedNum, 10);
}

console.log(reverseNumber(123));
console.log(reverseNumber(12000));
console.log(reverseNumber(122021));