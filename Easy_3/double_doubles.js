// A double number is an even length number whoes left side digits are the same
// as its right side digits.
let readline = require('readline-sync');

function twice() {
  let number = readline.question("Please Enter a Number of your choice:\n");
  console.clear();
  if (number.length % 2 !== 0) {
    console.log("Its not a double number!!!");
    console.log("Hint: Enter a number with even number of digits: \n");
    number = readline.question();
  }
  let leftSideDigits = number.slice(0,2);
  let rightSideDigits = number.slice(2);
  if (leftSideDigits === rightSideDigits) {
    console.log(`${number} is a Double Number`);
    return number;
  } else {
    console.log(`${number} is not a Double Number`);
  }
  return number * 2;
}

console.log(twice());