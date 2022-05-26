// Write a function that takes an array of numbers
// and returns an array with the same number of element
// but with each elements value being the running total

function runningTotal(arrOfNum) {
  for (let index = 0; index < arrOfNum.length; index++) {
    if (index === 0) {
      continue;
    } else {
      arrOfNum[index] = arrOfNum[index - 1] + arrOfNum[index];
    }
  }
  return arrOfNum;
}
console.log(runningTotal([14, 11, 7, 15, 20]));
