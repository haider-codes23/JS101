// function reverse(array) {
//   let extractedValue;

//   for (let index = 0; index < array.length; index++) {
//     extractedValue = array.splice(0, 1)[0];
//     array.splice(array.length - index, 0, extractedValue);
//   }

//   return array;
// }

// let list1 = [1, 2, 3, 4];
// console.log(reverse(list1) === list1);


function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}

let list1 = [1, 2, 3, 4];
console.log(reverse(list1) === list1);