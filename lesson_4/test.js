let numbers = [1,2,3,4,5];
function doubleNumber(array, valueToMultiplyBy) {
  let doubleNumberArray = [];

  for (let counter = 0; counter < array.length; counter++) {
    let currentNumber = array[counter];

    if (currentNumber % 2 === 1) {
      doubleNumberArray.push(currentNumber * valueToMultiplyBy);
    } else {
      doubleNumberArray.push(currentNumber);
    }
  }
  return doubleNumberArray;
}
console.log(doubleNumber(numbers, 3));

