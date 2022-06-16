function union(array1, array2) {
  let combinedArray = [];
  combinedArray = array1.concat(combinedArray);
  console.log(combinedArray);

  for (let index = 0; index < array2.length; index++) {
    //console.log(combinedArray.includes(array2[index]));
    if (combinedArray.includes(array2[index])) {
      continue;
    }

    combinedArray.push(array2[index]);
  }
  return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));

// OR

function union1(array1, array2) {
  let combinedArray = [];
  combinedArray = array1.concat(combinedArray);
  console.log(combinedArray);

  array2.forEach(element => {
    if (!combinedArray.includes(element)) {
      combinedArray.push(element);
    }
  });
  return combinedArray;
}

console.log(union1([1, 3, 5], [3, 6, 9]));