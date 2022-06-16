//  P --> Understand the Problem
//         Input: Two Arrays
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - two arrays should be provided.
//              - Both arrays must be non-empty.
//              - Both arrays should have the same number of elements.
//              - return a new array that contains elements from both arrays.
//              - criteria for appending elements into the new array:-
//                - The new array should take first element from the first array
//                  then take the second element from the second array, then
//                  third element from the first array and forth element from
//                  the second array and so on.
//            Implicit Requirements:
//              - empty arrays should not be provided as argument
//
// E --> Examples and Test Cases
//         - newArray[0] = array1[0]
//         - newArray[1] = array2[0]
//         - newArray[2] = array1[1]
//         - newArray[3] = array2[1]
//         - newArray[4] = array1[2]
//         - newArray[5] = array2[2]
//
//
//
// D --> Data Structure:
//
// Algorithm:
//       - Declare an array called newArray
//       - Start looping through the array
//       - push two items simultaneously into the new array from array1 & array2
//         at a specific index.
//          - 1st item should be from array1
//          - 2nd item should be from array2
//
//
// C --> Code With Intent

function interLeave(array1, array2) {
  let newArray = [];

  for (let index = 0; index < array1.length; index++) {
    newArray.push(array1[index], array2[index]);
  }
  return newArray;
}


function interLeave1(array1, array2) {
  let newArray = [];
  array1.forEach((element, index) => {
    newArray.push(element, array2[index]);
  });
  return newArray;
}

function interLeave2(array1, array2) {
  let newArray = [];
  newArray = array1.map((element, index) => {
    return [element, array2[index]];
  });
  return newArray.flat();
}
console.log(interLeave3([1,2,3], ['a', 'b', 'c']));