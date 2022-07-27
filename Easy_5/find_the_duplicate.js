//  P --> Understand the Problem
//         Input: Array
//         Output: Number
//         Questions:-
//              - can i assume that all inputs are valid arrays which always
//                conatain a set of duplicate elements
//
//         Rules:-
//            Explicit Requirement:
//              - Exactly one value in the array occurs twice
//              - Every other value occurs once
//              - return the value which occurs twice
//            Implicit Requirements:
//              - array provided to the function should not be empty
//              - array should have atleat 3 elements
//              - two of them should be duplicate
//              - one of them should be a unique
//
// E --> Examples and Test Cases
//         console.log(findDup([1, 2, 4, 5, 6, 2])) // 2
//         console.log(findDup([89, 98, 78, 56, 46, 67, 56]))// undefined
//
//
// D --> Data Structure: Array and Number
//
// Algorithm:
//       - decalre a variable count and initialize it with the value of 1
//       - declare an object called elementCount
//
//       - loop over the array elements
//           - if the element does not exist in the elementCount Object
//             or is undefined then initialize it with count varibale
//             that would mean that the element has occured once.
//           - if in the succcessive iterations of the loop an element that
//             already exists in the elementCount Object occurs again in the
//             the array and its value in the object elementCount is equal
//             to 1 then increment its value by 1 and returns the element at
//             the current iteration.
//           - The key will be the element of the array and the value will be
//             its count(the number of times it has occured in the array)
//           - if at any time the count increases to 2 return that element.
//
// C --> Code With Intent
// My Own Solution
function findDup(array) {
  let valueCount = {};
  let count = 1;
  for (let index = 0; index < array.length; index++) {
    if (valueCount[array[index]] === 1) {
      valueCount[array[index]] += 1;
      console.log(valueCount[array[index]]);
      return array[index];
    } else if (valueCount[array[index]] === undefined) {
      valueCount[array[index]] = count;
    }
  }
  return undefined;
}


//console.log(findDup([1, 5, 3, 2, 6, 7, 9 ,10, 3]));
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));

// LaunchSchool Solution
/*
function count(array, element) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      count += 1;
    }
  }
  return count;
}

function findDup(array) {
  return array.find(element => count(array, element) === 2);
}

*/


// LaunchSchool Solution
/*
function findDup(array) {
  let valueSeen = {};

  for (let index = 0; index < array.length; index++) {
    if (valueSeen[array[index]]) {
      return array[index];
    } else {
      valueSeen[array[index]] = true;
    }
  }
}
*/
