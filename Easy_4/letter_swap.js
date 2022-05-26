// Write a function that swaps the first and last letter of every word.

function swap(string) {
  let arrayOfWords = string.split(" ");
  for (let indexI = 0; indexI < arrayOfWords.length; indexI++) {
    let arrayOfChar = arrayOfWords[indexI].split("");
    let firstLetter = arrayOfChar[0];
    let lastLetter = arrayOfChar[arrayOfChar.length - 1];
    arrayOfChar[0] = lastLetter;
    arrayOfChar[arrayOfChar.length - 1] = firstLetter;
    arrayOfWords[indexI] = arrayOfChar.join("");
  }
  console.log(arrayOfWords.join(" "));
}

swap("Oh what a wonderful day it is");
swap("Abcde");
swap("a");