// Sum Even Numbers Rows

// Imagine a sequence of consecutive even integers beginning with 2. The
// integers are grouped in rows, with the first row containing one integer,
// the second row two integers, the third row three integers, and so on.
// Given an integer representing the number of a particular row, return an
// integer representing the sum of all the integers in that row.

/* PEDAC Process */
// P --> Understanding of the problem
//    --> Sequence of Even Integers
//    --> Integers are Consecutive
//    --> The Sequence starts with 2
//    --> Integers are grouped in rows
//    --> First row contains 1 integer, second row contains 2 integers and so on
//    --> Row number equals the number of integers in that row
//    --> Input: Integer and it represents the number of a particular row in the
//               sequence of integers
//    --> Output: Integer, which represents the sum of all the intergers in that
//                row.
//
//
// E --> Examples and Test Cases
//     --> Sequence: 2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 26, 28, 30, 32
//     --> {
//           1: [2],
//           2: [4, 6],
//           3: [8, 10, 12]
//           4: [14, 16, 18, 20]
//         }
//     --> Individual rows within the structure
//     --> Each row contain a specific number of integers represented by its row
//         number.
//     --> First row in the sequence starts with 2 and the subsequent row's
//         first integer is equal to the preceding rows last integer + 2
//         Example: Row 1: [2]
//                  Row 2: [1st Integer is = preceding row's last integer + 2]
//                         [4, 2nd integer = 1st integer in this row + 2]
//     --> row number: 1 --> sum of integers in row: 2
//     --> row number: 2 --> sum of integers in row: 10
//     --> row number: 3 --> sum of integers in row: 30
//     --> row number: 4 --> sum of integers in row : 68
//
//
// D --> Data Structure
//     --> {
//           1: [2],
//           2: [4, 6],
//           3: [8, 10, 12],
//           4: [14, 16, 18, 20]
//         }
//
//
// A --> Algorithm
//       --> So far we know that we need to get all the integers from a specific
//           row in the data structure we defined, so we need to therefore
//           create a structure upto and including the row thats indicated by
//           the input. Then we need to extract the last row of integers from
//           the structure and sum all the elements in it and return that sum.
//       Step 1--> Create an empty object 'rows' to contain all the rows
//       Step 2--> Start Loop
//       Step 3--> Create an array that acts as a row containing integer or
//                 integers.
//       Step 4--> Append that array to the object 'rows'.
//       Step 5--> Reassign startingInteger to the preceding rows last integer+2
//                 for the sequence's next row's first integer.
//       Step 6--> Repeat step 2 & 3 until number of Arrays in the object is
//                 equal to
//            the input integer which represents the row number
//       Step 7--> Get the final array/ row from the object 'rows' and sum all
//                 the elements/ integers in it.
//       Step 8--> Return the sum of the final row elements.

//      Step 3: Create an array of integers given the starting integer and row#
//             --> lets say that the row# is 1 the first row in the sequence
//                 and starting integer is 2
//               --> That means our array should contain only one integer
//                    which is the starting integer.
//             --> lets say that the row# is 2 and we dont have the starting
//                 integer.
//               --> To get the starting integer we need to know the
//                 preceding array's/ row's last integer/ element and add 2 to
//                 that to get the the first integer/ starting integer of row# 2
//             --> Lets say that the row# is 3 again we'll have to figure out
//                 the starting integer and for that we need to know the
//                 preceding array's/ row's last element and add 2 to that to
//                 get the first integer/ element of the subsequent array/ row.
//             --> Integer are consecutive and even.
//                --> once you have the row number and the starting integer
//                    you need to figure out the subsequent integer in that row.
//                   To get subsequent integers keep adding 2 to the preceding
//                   element.
//             --> Example: row number: 1, startingInteger: 2 --> [2]
//             --> Example: row number: 2, startingInteger: 4 --> [4, 6]
//             --> Example: row number: 3, startingInteger: 8 --> [8, 10, 12]
//
//             **Algorithm**
//             1--> Given row number and starting integer.
//             2--> create an empty array called 'row'.
//             3--> Start the loop
//             4--> Add the starting integer to the array 'row'
//             5--> Increment the starting integer by 2 to get the subsequent
//                 integer until number of integers/ elements are equal to
//                 row number provided.
//             6--> Return the array.
//
// C --> Implementing the solution


function createRow(rowNumber, startingInteger) {
  let row = [];
  let currentInteger = startingInteger;
  for (let index = 0; index < rowNumber; index++) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

function sumIntegersInRow(rowNumber) {
  let rows = {};
  let startingInteger = 2;
  for (let numberOfRow = 1; numberOfRow <= rowNumber; numberOfRow++) {
    let row = createRow(numberOfRow, startingInteger);
    rows[numberOfRow] = row;
    startingInteger = (row[row.length - 1]) + 2;
  }
  let finalRow = rows[rowNumber];

  return finalRow.reduce((accumulator, integer) => accumulator + integer, 0);
}

//console.log(sumIntegersInRow(2)); // [2]
console.log(sumIntegersInRow(4));
