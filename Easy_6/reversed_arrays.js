/* eslint-disable max-len */
//  P --> Understand the Problem
//         Input: Array
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take an array as an argument
//              - Function should reverse the input array's elemets.
//              - Function should use the same array that was passed to it as
//                an argument.
//            Implicit Requirements:
//              - If an empty array is given as an argument to the function then
//                the function should return the array as-is.
//              - If there is only one element in the array passed in as an argument to the
//                function then return that array as-is.
//
// E --> Examples and Test Cases
//         - console.log(reverseArray([1, 2, 3, 4]) === result); // true
//         - console.log(reverseArray(["a", "b", "c", "d"]) === result1); // true
//         - console.log(reverseArray(["abc"]) === result2) // true
//         - console.log(reverseArray([]) === result3); // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a variable leftIndex and give it a value equal to 0, it will play a role in accessing
//         elements from the left side of the array.
//       - Declare a varible rightIndex and give it a value equal to the length of the array - 1,
//         it will play a role in accessing elements from the right side of the array
//       - Create a for loop
//            - For variable initialization use index and give it a value of 0
//            - Loop until index is less than array's length
//            - Increment index on each iteration by 1
//            - Inside the body of the for loop
//               - Declare a variable leftElement and assign it array's value at leftIndex
//               - Declare a variable rightElement and assign it array's value at rightIndex
//               - Then assign the value at value(leftIndex) of the array, the value at the
//                 rightIndex of the array which we ealier assigned to the variable rightElement
//               - Then assign the value at value(rightIndex) of the array, the value at the
//                 leftIndex of the array which we earlier assigned to the variable leftElement.
//               - increment value of leftIndex by 1 on each iteration
//               - decrement value of rightIndex by 1 on each iteration
//               - What we are doing here is swaping values, taking one element from both ends of the array
//                 and assigning there values to at each other indexes, once the outer most elements
//                 are swaped we walk invards from both ends, the reason why we are incrementing our
//                 leftIndex by 1 and decrementing out rightIndex by 1 on each iteration.Khalas!!!
//
// C --> Code With Intent

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  for (let index = 0; index < array.length / 2; index++) {
    let leftElement = array[leftIndex];
    let rightElement = array[rightIndex];
    array[leftIndex] = rightElement;
    array[rightIndex] = leftElement;
    leftIndex += 1;
    rightIndex -= 1;
  }

  return array;
}
let list = [1,2,3,4];
console.log(reverse(list) === list);


// Other ways to solve this problem

// A ==> Algorithm
//        - Declare a variable extractedValue
//        - Create a for loop
//           - For variable intialization use index and assign it a value equal to 0
//           - For looping condition use index is less than array's length.
//           - Increment index by 1 on each iteration
//           - Inside the body of the for loop
//              - Invoke splice method on the array/ list and remove the first element from the array
//                and store the return value which is the element removed from the array and place it
//                in the variable we declared earlier extractedValue.
//              - Again Invoke splice method on the array but this time we add the element
//                we removed in the last step and place it in the last location of the array.
//              - Note: what we are doing on each iteration is extracting the first element
//                from the array whilst removing it from that array. Then we place that element at
//                the end of the array and repeat this process until the whole array is revered.

// function reverse(array) {
//   let extractedValue;

//   for (let index = 0; index < array.length; index++) {
//     extractedValue = array.splice(0, 1)[0];
//     array.splice(array.length - index, 0, extractedValue);
//   }

//   return array;
// }

// let list1 = [1, 2, 3, 4];
// console.log(reverse(list1) === list1);

// function reverse(array) {
//   let newArray = [];

//   while (array.length > 0) {
//     newArray.push(array.pop());
//   }

//   while (newArray.length > 0) {
//     array.push(newArray.shift());
//   }
//   return array;
// }

// console.log(reverse([1, 2, 3, 4]));