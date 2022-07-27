//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take a string argument
//              - Function should return a new string containing the words from
//                the string argument in reverse order.
//            Implicit Requirements:
//              - If an empty string is given as an argument to the function
//                return a empty string.
//
// E --> Examples and Test Cases
//         - console.log(reverseSentence('') === ''); // true
//           eslint-disable-next-line max-len
//         - console.log(reverseSentence('Hello World') === 'World Hello); // true
//           eslint-disable-next-line max-len
//         - console.log(reverseSentence('Reverse these words') === 'words these Reverse'); // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a variable wordsArray.
//       - declare a variable resultsArray and intialize it with an empty array.
//       - Declare a variable newString.
//       - Invoke the split method on the input string using (" ").
//         whitespace pattern as argument and store the returned array
//         in the varibale wordsArray.
//       - Declare a variable index and initialize it with value equal to the
//         length of the array WordsArray
//       - Start a while loop
//          - Looping condition: Loop until index is greater than or equal to 0
//          - On each iteration push an element from the wordsArray array at
//            the current index into resultsArray array.
//          - Decrement index on each iteration by 1.
//       - End while loop
//       - Invoke join method on the resultsArray array using the pattern (" ")
//         and store the return value in the varibale newString.
//       - return newString.
//
// C --> Code With Intent

function reverseSentence(string) {
  let newString;
  let wordsArray = string.split(" ");
  let resultsArray = [];
  let index = wordsArray.length - 1;

  while (index >= 0) {
    resultsArray.push(wordsArray[index]);
    index -= 1;
  }

  newString = resultsArray.join(" ");

  return newString;
}

console.log(reverseSentence("") === ""); // true
console.log(reverseSentence("Hello World") === "World Hello"); // true
console.log(reverseSentence("Reverse these Words") === "Words these Reverse"); // true