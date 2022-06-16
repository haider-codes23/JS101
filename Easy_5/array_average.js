//  P --> Understand the Problem
//         Input: Array
//         Output: Number
//         Questions:-
//              - What does rounded down to the integer component of the average
//                mean ?
//
//         Rules:-
//            Explicit Requirement:
//              - Return the average of all the integers in the array rounded
//                down to the integer component of the average.
//              - The array will never be empty.
//              - The numbers of the array will always be positive.
//            Implicit Requirements:
//              -
//
// E --> Examples and Test Cases
//         -
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a varible sum and intialize it with the value of 0.
//       - Decalre a variable numberOfElements and initialize it with the length
//         of the array.
//       - Decalre a varibale average.
//       - Start a loop to iterate over the elements of the array
//       - Add the element of the array to the sum varibale while iterating
//         through the array.
//       - end loop
//       - intialize average with the quotient of sum and numberOfElements
//
// C --> Code With Intent

function average(arrayOfIntegers) {
  let sum = 0;
  let numberOfElements = arrayOfIntegers.length;
  let average;

  for (let index = 0; index < arrayOfIntegers.length; index++) {
    sum += arrayOfIntegers[index];
  }

  average = sum / numberOfElements;

  return Math.floor(average);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
