//  P --> Understand the Problem
//         Input: Number (Integer)
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take only two arguments
//                 - Count and Starting number of sequence
//              - Function should return an array
//                 - Array should contain the same number of elements as the
//                   count argument.
//                 - Each element should be a multiple of the starting number.
//            Implicit Requirements:
//              - Count argument will always be an integer greater than or equal
//                to zero.
//              - The starting number can be any integer.
//              - If the count is 0, the function should return an empty array.
//
// E --> Examples and Test Cases
//         - console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
//         - console.log(sequence(4, -7)); // [-7, -14, -21, -28]
//         - console.log(sequence(3, 0)); // [0, 0, 0]
//         - console.log(sequence(0, 1000000)); // []
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a varibale sequenceArr and initialize it with an empty array.
//       - Start a for loop
//          - For varibale intialization part use index value starting at 1
//          - for the loop condition part loop until index is less than euqal
//            to the count argument provided to the function.
//          - Increment index by 1 on each iteration
//          - Inside the body of the for loop push mutiples of starting number
//            of sequence
//               - Multiples of starting number of sequence could be determined
//                 by multiplying the starting number of sequence by the current
//                 index value.
//
// C --> Code With Intent

function sequence(count, startingNumOfSequence) {
  let sequenceArr = [];

  for (let index = 1; index <= count; index++) {
    sequenceArr.push(startingNumOfSequence * index);
  }

  return sequenceArr;
}

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []