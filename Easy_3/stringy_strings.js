// write a function that takes one argument, a positive integer
// and returns a string of alternating '1's and '0's
// always starting with '1'

function stringy(maxLength) {
  let finalString = "";
  let one  = '1';
  let zero = '0';
  while (maxLength > 0) {
    if (finalString === "") {
      finalString += one;
    } else if (finalString.endsWith('1')) {
      finalString += zero;
    } else if (finalString.endsWith('0')) {
      finalString += one;
    }
    maxLength--;
  }
  return finalString;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"