const MESSAGE = require('./refactored_calculator_messages.json');
let readline = require('readline-sync');
// Function Declerations
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidOperand(operand) {
  return operand.trimStart() === '' || Number.isNaN(Number(operand));
}

function invalidLanguage(language) {
  return language !== 'en' && language !== 'es';
}

function message(lang = 'en', message) {
  return MESSAGE[lang][message];
}

function getLanguage() {
  prompt(message('lang', "language"));
  let language = readline.question();

  while (invalidLanguage(language)) {
    prompt(message('lang', 'invalidLanguage'));
    language = readline.question();
  }
  return language;
}

// left Operand is the 1st one
function getLeftOperand (lang = 'en') {
  prompt(message(lang, 'leftOperand'));
  let leftOperand = readline.question();

  while (invalidOperand(leftOperand)) {
    prompt(message(lang, 'invalidOperand'));
    leftOperand = readline.question();
  }
  return leftOperand;
}
//  Right Operand is the 2nd one
function getRightOperand (lang = 'en') {
  prompt(message(lang, 'rightOperand'));
  let rightOperand = readline.question();

  while (invalidOperand(rightOperand)) {
    prompt(message(lang, 'invalidOperand'));
    rightOperand = readline.question();
  }
  return rightOperand;
}
function getOperation(language) {
  prompt(message(language, 'getOperation'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose from 1, 2, 3 or 4");
    operation = readline.question();
  }
  return operation;
}
function calculate(leftOperand, rightOperand, operation) {
  let result;
  switch (operation) {
    case '1':
      result = Number(leftOperand) + Number(rightOperand);
      break;
    case '2':
      result = Number(leftOperand) - Number(rightOperand);
      break;
    case '3':
      result = Number(leftOperand) * Number(rightOperand);
      break;
    case '4':
      result = Number(leftOperand) / Number(rightOperand);
      break;
  }
  return result;
}

function getName(language) {
  prompt(message(language, 'name'));
  let name = readline.question();
  return name;
}
// Main Program
let leftOperand;
let rightOperand;
let operation;
let result;
let name;
let language;

// Ask user which language they would prefer English or Spanish
language = getLanguage();

// Ask user for their Name
name = getName(language);
prompt(name.toUpperCase() + ' ' + message(language, 'welcome'));

while (true) {
  console.clear();
  leftOperand = getLeftOperand(language);
  rightOperand = getRightOperand(language);
  operation = getOperation(language);
  result = calculate(leftOperand, rightOperand, operation);
  if (result === Infinity) {
    prompt(message(language, 'divisionByZero'));
  } else {
    prompt(message(language, 'result') + ` ${result}`);
  }

  prompt(message(language, 'calculateAgain'));
  let answer = readline.question();
  if (answer.toLowerCase() !== 'y') break;
}