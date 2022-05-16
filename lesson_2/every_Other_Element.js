function everyOther(array) {
  let iterator = 0;
  let newArr = [];
  do {
    newArr.push(array[iterator]);
    iterator += 2;
  } while (iterator < array.length);

  return newArr;
}

let array = [1,4,7,2,5];
console.log(everyOther(array));
