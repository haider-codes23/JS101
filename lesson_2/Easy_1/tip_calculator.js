// simple tip calculator
// ask user for bill amount
// ask user for tip rate
// computer the tip
// print the tip and the total bill amount
const READLINE = require('readline-sync');
let billAmount;
let tipRate;
let tip;
console.log("Please Enter Your Bill Amount:");
billAmount = Number(READLINE.question());
console.log("Please Enter Tip Rate:");
tipRate = Number(READLINE.question());

function computerTip(billAmount, tipRate) {
  tip = billAmount * (tipRate / 100);
  return tip;
}
function displayBill() {
  console.log(`The Tip is ${tip}`);
  console.log(`The Bill is ${billAmount + tip}`);
}
tip = computerTip(billAmount, tipRate);
displayBill();

