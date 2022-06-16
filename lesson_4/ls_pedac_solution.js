// 1. Create an empty 'rows' array to contain all of the rows
//       - Calculating the Starting Index
//       - Rule: First integer of row equal to last integer of preseding row + 2
//       Algorithm
//        - Get the last row from the rows array
//        - Get the last integer of that row
//        - Add 2 to the integer
// 2. Create a 'row' array and add it to overall 'rows' array
// 3. Repeat step 2 until all necessary rows have been created
//   - All rows have been created when the length of the 'rows' array is equal
//     to the input integer
// 4. Sum the final row
// 5. return the sum of the final row elements


function sumEvenNumbeRow(rowNumber) {
  const rows = [];
  let startingInteger = 2;
  for (let currentRowNumber = 1; currentRowNumber <= rowNumber; currentRowNumber++) {
    let row = createRow(startingInteger, currentRowNumber);
    rows.push(row);
    let previousInteger = row[row.length - 1];
    startingInteger = previousInteger + 2;
  }
  let finalRow = rows.pop(); // removes the last array from the rows array and returns it to finalRow
  let finalRowSum = 0;
  finalRowSum = finalRow.reduce((accumulator, element) => accumulator + element, 0);
  return finalRowSum;
}

// 1. Create an empty 'row' to contain the integers
// 2. Add the starting integer
//     - Start the loop
//      -Add start integer to the row array
//      -increment the start integer by 2
//      - break out of the loop if length of the row array equals rowLength
// 3. Increments the starting integer by 2 to get the next integer in the
//    sequence
// 4. Repeat the step 2 and step 3 until the array has reached the correct
//    length
// 5. Return the array 'row'


function createRow(startingInteger, rowLength) {
  const row = [];
  let currentInteger = startingInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}


// row number: 1 --> sum of integers in row: 2
// row number: 2 --> sum of integers in row: 10
// row number: 3 --> sum of integers in row: 68

console.log(sumEvenNumbeRow(1)); // 2
console.log(sumEvenNumbeRow(2)); // 10
console.log(sumEvenNumbeRow(4)); // 68

// start: 2, Length: 1 ---> [2]
// start: 4, length: 2 ---> [4, 6]
// start: 8, length: 3 ---> [8, 10, 12]

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]
