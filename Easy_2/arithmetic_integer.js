let readline = require('readline-sync');
let firstNumber = parseInt(readline.question("Please Enter 1st Number:\n"), 10);
let secondNumber = parseInt(readline.question("Please enter the second number:\n"), 10);
console.clear();

function operations() {
  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
  console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
  console.log(`${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
}

operations();