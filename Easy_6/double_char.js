//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - The function takes a string as an argument.
//              - Double every character of the string argument and return it
//                as a new string.
//            Implicit Requirements:
//              - if the argument is an empty string then return an empty string
//
// E --> Examples and Test Cases
//         - console.log(repeater('Hello') === 'HHeelllloo') // true
//         - console.log(repeater('Good Job') === 'GGoodd  JJoobb') // true
///        - console.log(repeater('') === '') // true
//
//
// D --> Data Structure: String
//
// Algorithm:
//       - Declare a varibale called doublesArray.
//       - Invoke split method on the string and store the returned array
//         in the variable doublesArray.
//       - invoke map method on the array of characters
//          - the callback function should return character + character on each
//            iteration.
//
// C --> Code With Intent

function repeater(string) {
  let arrOfchar = string.split('');
  //console.log(doublesArray);
  let doublesArray =  arrOfchar.map(char => char + char);
  return doublesArray.join('');
}

function repeater1(string) {
  let stringArray = [];

  for (let index = 0; index < string.length; index++) {
    stringArray.push(string[index], string[index]);
  }
  return stringArray.join('');
}

console.log(repeater1("Hello"));
console.log(repeater1('Good job!'));
console.log(repeater1(''));