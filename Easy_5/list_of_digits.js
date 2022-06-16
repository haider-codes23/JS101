//  P --> Understand the Problem
//         Input: Postive Integer (Number)
//         Output: Array
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - function should take only one argument a positive integer
//              - function returns a list of digits
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
//       - Declare a variable named numString.
//       - Take the argument(integer) and convert it into a String
//         and store it in the varibale numString.
//       - Invoke the split method on numString using empty string
//         as an argument to the split method.
//       - split method call will return an array of strings where each string
//         will contain a single digit.
//       - Apply the forEach method and convert each string/ element into a
//         Number
// C --> Code With Intent

function digitList(integer) {
  let numString = String(integer);
  let arrayOfStringDigits = numString.split('');
  arrayOfStringDigits.forEach((element, index) => {
    arrayOfStringDigits[index] = Number.parseInt(element);
  });

  return arrayOfStringDigits;
}

function digitList1(integer) {
  let numString = String(integer);
  let arrayOfStringDigits = numString.split('');
  return arrayOfStringDigits.map(element => Number.parseInt(element));
}

console.log(digitList1(12345));       // [1, 2, 3, 4, 5]
console.log(digitList1(7));           // [7]
console.log(digitList1(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList1(444));         // [4, 4, 4]