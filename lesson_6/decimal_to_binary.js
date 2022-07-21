/* eslint-disable max-statements */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
// converting decimal to binary

// - if length of binary number is less than 3 we'll return an empty array
// - else we'll iterate over the binary number character by character
//   -if the character at the current index is '1',
//     - we'll concatenate that into a string
//     - we'll then iterate over the subsequent characters
//       -if the subsequent character is '0'
//         - we'll concatenate it into the subString
//       -else if the subsequent character is a '1' ,
//         - we'll reassign the substring with a copy of binaryNumber starting from the preceding character '1' uptil the current character '1'
//         - push that subString into an array
//         - break
//   -else we'll continue to the next iteration


function decimalToBinary(number) {
  let remainder;
  let binary = '';
  while (true) {
    remainder = number % 2;
    binary += Math.floor(remainder);
    number /= 2;
    if (Math.floor(number) === 0) break;
  }

  return binary.split('').reverse().join('');
}
// You need to find the longest number of consecutive 0's between any two 1's in
// a binary number

// Test Cases
// 1001010001
// 1001010000
// 010001
// 11000101
// 1010010001
// 1100010010
//101
// 110110 => 54
// 0100100010
function longestNumberOfConsecZeros(binaryNum) {
  let subString = '';
  let subStringArray = [];
  let subStringLengthArray;

  if (binaryNum.length < 3) {
    return [];
  } else {
    for (let startIndex = 0; startIndex < binaryNum.length; startIndex++) {
      if (binaryNum[startIndex] === "1") {
        subString = binaryNum.slice(startIndex);
      } else continue;
      for (let endIndex = startIndex + 1; endIndex < binaryNum.length; endIndex++) {
        if (binaryNum[endIndex] === '0') {
          subString += binaryNum[endIndex];
        } else if (binaryNum[endIndex] === '1') {
          subString = binaryNum.slice(startIndex, endIndex + 1);
          subStringArray.push(subString);
          break;
        }
      }
    }

  }

  let longestLengthElement;
  for (let currentIndex = 0; currentIndex < subStringArray.length; currentIndex++) {
    let currentElementLength = subStringArray[currentIndex].length;
    for (let nextIndex = currentIndex + 1; nextIndex < subStringArray.length; nextIndex++) {
      let nextElementLength = subStringArray[nextIndex].length;
      if (currentElementLength < nextElementLength) {
        longestLengthElement = subStringArray[nextIndex];
      }
    }
  }

  console.log(subStringArray);

  return longestLengthElement;
}

// 1001
// Main Program

let binaryNumber = decimalToBinary(54);
console.log(binaryNumber);
console.log(longestNumberOfConsecZeros('0100100010'));