let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
function inValidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("WELCOME TO THE SIMPLE CALCULAOTR APP!");

prompt("Please Enter the First number of your choice ?\n");
let firstNumber = readline.question();

while (inValidNumber(firstNumber)) {
  prompt("Hmmm... that doesn't look like a valid number, Please Enter a valid number again below");
  firstNumber = readline.question();
}

prompt("Please Enter the Second number of your choice ?\n");
let secondNumber = readline.question();

while (inValidNumber(secondNumber)) {
  prompt("Hmmm... that doesn't look like a valid number, Please Enter a valid number again below");
  secondNumber = readline.question();
}

prompt("Which Operation would you like to perform ?\n 1) Add 2) Subtract 3) Multiply 4) Divide\n");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3 or 4");
  operation = readline.question();
}

let result;

switch (operation) {
  case '1':
    result = Number(firstNumber) + Number(secondNumber);
    break;
  case '2':
    result = Number(firstNumber) - Number(secondNumber);
    break;
  case '3':
    result = Number(firstNumber) * Number(secondNumber);
    break;
  case '4':
    result = Number(firstNumber) / Number(secondNumber);
    break;
  default:
    console.log(prompt("Please choose from the given Choices"));
}
prompt(`Result of the operation: ${result}`);

