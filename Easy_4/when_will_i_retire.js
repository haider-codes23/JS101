let readline = require("readline-sync");
let today = new Date();
const currentYear = today.getFullYear();
const age = readline.question("What is your age: \n");
const retirementAge = readline.question("At what age would you like to retire: \n");

let retirementYear = (retirementAge - age) + currentYear;
let numberOfWorkYears = retirementYear - currentYear;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You have only ${numberOfWorkYears} year of work to go!`);