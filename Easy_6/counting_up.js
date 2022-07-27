//  P --> Understand the Problem
//         Input: Number(Integer)
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take an integer argument
//              - Function should return an array
//              - The array should contain all integers between 1 and the
//                argument(inclusive) in ascending order.
//
//            Implicit Requirements:
//              - Argument will always be a positive integer.
//
// E --> Examples and Test Cases
//         - console.log(sequence(5) === [1,2,3,4,5]) // true
//         - console.log(sequence(3) === [1,2,3]) // true
//         - console.log(sequence(1) === [1]) // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a varibale result and initialize it with an empty array.
//       - Create a loop
//          - For varibale initialization use index = 1
//          - For looping condition: loop until index is less than equal
//            to number(provided as a function argument).
//          - For varible increment part: increment index by 1 on each iteration
//          - In the body of the loop, push current index into the result array.
//        - End loop
//        - Return result array.
//
// C --> Code With Intent

function sequence(Integer) {
  let result = [];

  for (let index = 1; index <= Integer; index++) {
    result.push(index);
  }

  return result;
}

console.log(sequence(5)); // [1,2,3,4,5]
console.log(sequence(3)); // [1,2,3]
console.log(sequence(1)); // [1]
console.log(sequence(0));