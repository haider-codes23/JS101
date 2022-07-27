//  P --> Understand the Problem
//         Input: Array
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - From an array of integers, multiply all the integers together
//              - Divide the product by the number of entries in an array
//              - Return the result of quotient rounded of to three decimal
//                place.
//            Implicit Requirements:
//              -
//
// E --> Examples and Test Cases
//         -
//
//
// D --> Data Structure:
//
// Algorithm:
//       - Declare a varibale called product
//       - Decalre a varibale called quotient
//       - Declare a vaiable called numberOfEntries
//       - start a loop and iterate over the values in the array starting
//         from index 0
//       - multiply all the number in the array together and store the result of
//         multiplication in the varibale product.
//       - determine the length of the array and subtract 1 from it and store
//         the result in the varibale called numberOfEntries
//       - divide the product by numberOfEntries
//
// C --> Code With Intent

function multiplicativeAverage(array) {
  let product = 1;
  let quotient;
  let numberOfEntries =array.length;

  for (let index = 0; index < array.length; index++) {
    product *= array[index];
  }

  quotient = product / numberOfEntries;

  return String(quotient.toFixed(3));

}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));