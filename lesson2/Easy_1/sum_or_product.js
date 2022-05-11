// ask user to enter an integer greater than
// ask user if he/she wants to compute sum or product of all the number 
// between 1 and entered Integer
const READLINE = require('readline-sync');
let integer;
let choice;
let sum = 0;
let product = 1;
function getInteger() {
  console.log("==> Please Enter an Integer of your Choice\n");
  integer = READLINE.question();
  while (integer === '' || Number.isNaN(integer)) {
    console.log('==> Please Enter a correct Integer\n');
    integer = READLINE.question();
  }
}

function getChoice() {
  console.log("==> To compute Sum Enter 's'\n==> To Compute Product Enter 'p'\n");
  choice = READLINE.question();

  while (choice !== 's' && choice !== 'p') {
    console.log("==> Please Enter a Valid Choice\n");
    choice = READLINE.question();
  }
}

function computeSum() {
  for (let index = 1; index <= integer; index++) {
    sum += index;
  }
  return sum;
}

function ComputeProduct() {
  for (let index = 1; index <= integer; index++) {
    product *= index;
  }
  return product;
}

function main() {
  if (choice === 's') {
    console.log(`Sum: ${computeSum()}`);
  } else if (choice === 'p') {
    console.log(`Product: ${ComputeProduct()}`);
  }
}

getInteger();
getChoice();
main();
