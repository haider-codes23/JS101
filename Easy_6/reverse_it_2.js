/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
//  P --> Understand the Problem
//         Input: String
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Function should take a string argument containing one or more
//                words.
//              - Function should return a new string containing the words from
//                the string argument.
//              - if an input string has 5 or more letter words then the letters
//                of those word should be reversed.
//              - The string argument should only have letter and spaces.
//              - Words should be seperated by a single space.
//            Implicit Requirements:
//              -
//
// E --> Examples and Test Cases
//         - console.log(reverseWords('Professional') === 'lanoisseforP');//true
//         - console.log(reverseWords('Walk around the block') === 'Walk dnuora the kcolb'); // true
//         - console.log(reverseWords('Launch School') === "hcnuaL loohcs"); // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       - Declare a variable resultArray.
//       - Declare a variable newString.
//       - Declare a variable wordsArray.
//       - Invoke split method using the pattern (" ") on the input string
//         and store the returned array in the varibale wordsArray.
//       - Create a for loop.
//          - Create index variable for Variable initialization and initialize
//            it with value equal to 0.
//          - For looping condition: loop until index is less than wordsArray
//            array's length.
//          - increment index by 1 on each iteration
//          - In the body of the for loop
//             - Check if element's(string's) length is greater than or equal to 5
//                - if element's(string's) length is greater than or equal to 5
//                   - Declare a variable word and assign it the string element
//                     at the current index location of the wordsArray.
//                   - Declare a variable lengthOfWord and assign it the length
//                     of the string stored in the varibale word.
//                   - Declare a variable reversedWord and initialize it with an
//                     empty string.
//                   - Create a while loop to iterate over the characters in
//                     word variable and loop until lengthOfWord is greater than
//                     or equal to 0.
//                       - append the current character in the variable
//                         reversedWord.
//                       - decrement lengthOfword by 1 on each iteration of the
//                         while loop.
//                   - End While loop
//                   - Append reversedWord variable into the array resultArray
//                - Else if length is less than 5 than push the element as-is
//                  into the array resultArray.
//          - Invoke join method on the array resultArray with the argument(" ")
//            and store the return the value in the variable newString
//          - Return newString.
//
//
// C --> Code With Intent

function reverseWords(string) {
  let newString;
  let wordsArray = string.split(" ");
  let resultsArray = [];

  for (let index = 0; index < wordsArray.length; index++) {

    if (wordsArray[index].length >= 5) {
      let word = wordsArray[index];
      let lengthOfWord = word.length - 1;
      let reversedWord = '';

      while (lengthOfWord >= 0) {
        reversedWord += word[lengthOfWord];
        lengthOfWord -= 1;
      }

      resultsArray.push(reversedWord);

    } else {
      resultsArray.push(wordsArray[index]);
    }
  }

  newString = resultsArray.join(" ");

  return newString;

}

console.log(reverseWords("Walk around the block"));
console.log(reverseWords('Professional'));
console.log(reverseWords('Launch School'));