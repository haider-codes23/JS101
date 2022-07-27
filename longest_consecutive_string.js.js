/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
//  P --> Understand the Problem
//         Input: Array
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Find the first longest string from the input array
//              - The string must consist of 'k' consecutive string from the
//                input array.
//              - If the input array is empty return an empty string.
//              - If input integer 'k' is greater than length of the array or
//                less than or equal to zero then return an empty string.
//            Implicit Requirements:
//              - The strings in the array could contain any type of character.
//                e.g. punctuations, integers(string form)
//
// E --> Examples and Test Cases
//         -  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta");
//         -  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta");
//         -  console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
//         -  console.log(longestConsec([], 3) === ""); // true
//         -  console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
//         -  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
//         -  console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
//         -  console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
//         -  console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true
//
//
// D --> Data Structure: Array
//
// Algorithm:
//       1- Declare a variable stringCombos and initialize it with an empty
//         array.
//       2- Check if the input array has a length less than or equal to zero
//          or input integer k is less than or equal to zero
//         If any of these conditions are met then return an empty string.
//       3- If k is equal to 1, then simply sort the array of strings using
//          string lengths as sorting criteria e.g. in decreasing order. After
//          the array has been sorted return the first element of the array.
//       4- If input array's length is greater than zero, interger 'k' is
//          less than length of the array and greater than 1, iterate over the
//         input array.
//             - On each iteration take 'k' elements from the list,
//               concatenate them, store the concatenated string into tempString
//               variable and at last append tempString into the stringCombos
//               array.
//             - if at any iteration the value retured by the array element
//               reference is undefined we will simply append an empty string
//               to the tempString.(otherwise the value undefined will be
//               appended into the tempString)
//             - Sort the stringCombos array using the string's length as the
//               sorting criteria. e.g. longest string comes first and so on.
//             - return the first element from the stringCombos array.
//
// C --> Code With Intent

function longestConsec(arr, k) {
  let stringCombos = [];
  let arrLength = arr.length;
  if (arrLength <= 0 || k <= 0 || k > arrLength) {
    return '';
  } else if (k === 1) {
    arr.sort((stringA, stringB) => stringB.length - stringA.length);
    return arr[0];
  } else if (arrLength > 0 && k < arrLength && k > 1) {
    for (let index = 0; index < arrLength - 1; index++) {
      let counter = 0;
      let tempString = "";
      while (counter < k) {
        if (arr[counter + index] === undefined) {
          tempString += "";
        } else {
          tempString += arr[counter + index];
          //console.log(tempString);
        }
        counter++;
      }
      stringCombos.push(tempString);
    }
    //console.log(stringCombos);
    stringCombos.sort((stringA, stringB) => stringB.length - stringA.length);
    //let stringCombosLengthArray = stringCombos.map(string => string.length);
    //console.log(stringCombos);
    return stringCombos[0];
  }
}


console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) === "abigailtheta");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta");
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true