// Welcome the user to the calculator
// ask the user for the first number
// ask the user for the second number
// ask the user the operation they want to perform
// perform the operation
// display the result of the operation

let readline = require('readline-sync');

console.log("WELCOME TO THE SIMPLE CALCULAOTR APP!");

let firstNumber = Number(readline.question("Please Enter the First number of your choice ?\n"));

let secondNumber = Number(readline.question("Please Enter the Second number of your choice ?\n"));

let operation = readline.question("Which Operation would you like to perform ?\n 1) Add 2) Subtract 3) Multiply 4) Divide\n");

let result;
if (operation === '1') {
  result = firstNumber + secondNumber;
} else if (operation === '2') {
  result = firstNumber - secondNumber;
} else if (operation === '3') {
  result = firstNumber * secondNumber;
} else if (operation === '4') {
  result = firstNumber / secondNumber;
}

console.log(`Result of the operation is : ${result}`);
