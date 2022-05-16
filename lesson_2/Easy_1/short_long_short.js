// get two different strings from user
// determine the length of the two strings
// determine which string is shorter and which is longer
// afterwards concatenate the shorter string, the longer string and the shorter string again
let readline = require('readline-sync');
let stringA;
let stringB;
let stringALength;
let stringBLength;

function getString() {
  return readline.question("Please Enter a String of your Choice:");
}

function compareStringLengths(stringA, stringB) {
  return stringA.length < stringB.length ? `${stringA}${stringB}${stringA}` : `${stringB}${stringA}${stringB}`;
}

stringA = getString();
stringB = getString();
console.log(compareStringLengths(stringA, stringB));
