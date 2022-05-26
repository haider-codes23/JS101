let readline = require("readline-sync");
let numObj = {};
numObj['number1'] = readline.question("Enter the 1st number: \n");
numObj['number2'] = readline.question("Enter the 2nd number: \n");
numObj['number3'] = readline.question("Enter the 3rd number: \n");
numObj['number4'] = readline.question("Enter the 4th number: \n");
numObj['number5'] = readline.question("Enter the 5th number: \n");
let lastNumber = readline.question("Enter the 6th number: \n");
for (let propety in numObj) {
  if (numObj[propety] === lastNumber) {
    console.log(`The number ${lastNumber} appears in ${numObj['number1']},${numObj['number2']},${numObj['number3']},${numObj['number4']},${numObj['number5']}`);
  }
}

