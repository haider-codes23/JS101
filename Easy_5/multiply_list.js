//  P --> Understand the Problem
//         Input: Array
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - The function should take a pair of arrays as arguments
//              - retured array should contain the product of each pair of
//                numbers from the arguments that have the same index.
//            Implicit Requirements:
//              - Each array contains equal number of integers/ elements
//
// E --> Examples and Test Cases
//         -
//
//
// D --> Data Structure:
//
// Algorithm:
//       - Declare a variable called result and intialize it with an empty array
//       - start a loop to iterate over the elements of the array
//       - take the first element from both arrays and push their product into
//         the result array.
//
// C --> Code With Intent

function multiplyList(array1, array2) {
  let result = [];

  for (let index = 0; index < array1.length; index++) {
    result.push(array1[index] * array2[index]);
  }

  return result;
}

console.log(multiplyList([3,5,7], [9, 10, 11]));