//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take a string argument
//              - String Argument should contain a first name, a space and
//                a last name.
//              - Function should return a string that starts with
//                last name then a comma then a space and at last the first name
//            Implicit Requirements:
//              -
//
// E --> Examples and Test Cases
//      - console.log(swapName('Joe Roberts') === 'Roberts, Joe');
//        eslint-disable-next-line max-len
//      - console.log(swapName('Karl Oskar Henriksson Ragvals') === 'Ragvals, Karl Oskar Henriksson');
//        eslint-disable-next-line max-len
//      - console.log(swapName('Karl Oskar Henrikssons') === 'Henrikssons, Karl Oskar');


//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a variable nameArr
//       - Declare a varibale swappedName
//       - Invoke split method on the input string using " " pattern as argument
//         and store the return value in the nameArr varibale
//       - Append the last element of nameArr which is the last name in the
//         variable swappedName along with a comma.
//       - start a for loop
//          - Append a whitespace (" ") into the string swappedName
//          - Then append nameArr element into the string swappedName
//          - loop until all the elements of nameArr have been appended into
//            the string swappedName except the last element.
//       - return swappedName
//
// C --> Code With Intent

function swapName(string) {
  let nameArr = string.split(" ");
  let swappedName;
  swappedName = `${nameArr[nameArr.length - 1]},`;
  for (let index = 0; index < nameArr.length - 1; index++) {
    swappedName += " ";
    swappedName += nameArr[index];
  }
  return swappedName;
}
console.log(swapName('Joe Roberts') === 'Roberts, Joe'); // true
console.log(swapName('Karl Oskar Henriksson Ragvals') === 'Ragvals, Karl Oskar Henriksson');
console.log(swapName('Karl Oskar Henrikssons') === 'Henrikssons, Karl Oskar');

