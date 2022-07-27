//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              - What is a consonant ?
//
//         Rules:-
//            Explicit Requirement:
//              - function should accept a string as an argument.
//              - Double every consonant character in the string.
//              - donot double vowels, digits, punctuations or whitespace
//              - return the result as a new string.
//            Implicit Requirements:
//              - if argument provided is an empty string then return an empty
//                string.
//
// E --> Examples and Test Cases
//    - console.log(doubleConsonants('String') === "SSttrrinngg");
//    - console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
//    - console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
//    - console.log(doubleConsonants('') === ''); // ''
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare an empty array called newStringArray
//       - Declare an array called vowels and intialize it with an array
//         containing all the vowels.
//       - Declare an array called digitsPunctuationsWhitespace and initialize
//         it with an array containing numbers from 0 to 9, ' ', '-' and '!'
//       - start loop to iterate through the string characters
//       - check if the character at the current index is a vowel or a digit or
//         a punctuation or a whitespace if it is then push it into the array
//         as it is and if it is not then push two copies of the current
//         character into the array newStringArray.
//       - return newStringArray
//
//
// C --> Code With Intent

function doubleConsonants(string) {
  let newStringArray = [];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let digitsPunctuationWhitespace = ['1','2','3','4','5','6','7','8','9','0','-',' ', '!'];

  for (let index = 0; index < string.length; index++) {
    // eslint-disable-next-line max-len
    if (vowels.includes(string[index]) || digitsPunctuationWhitespace.includes(string[index])) {
      newStringArray.push(string[index]);
    } else {
      newStringArray.push(string[index], string[index]);
    }
  }

  return newStringArray.join('');
}

console.log(doubleConsonants('String') === "SSttrrinngg");   // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");       // "JJullyy 4tthh"
console.log(doubleConsonants('') === ''); // ''