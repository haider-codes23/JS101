//  P --> Understand the Problem
//         Input: Array
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              -count the number of occurences of each element in the given
//               array.
//              - log each element along side the number of occurences.
//            Implicit Requirements:
//              - words are case sensitive.
//
// E --> Examples and Test Cases
//         -console.log(countOccurences(['car', 'car', 'truck', 'car',
// 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck']))//car => 4
//                                                                truck => 3
//                                                                SUV => 1
//                                                               motorcycle => 2
//
//
// D --> Data Structure: Arrays and Objects
//
// Algorithm:
//       - Declare a variable count equal to 0
//       - Decalre an object vechileTypeCount
//       - create a loop to iterate over array elements
//       - Check if a property, equal to the name of the current vechile exists
//         in vechileTypeCount Object if it doesn't exist initialize the
//         property by 0 the element into the object and assign it the variable
//         count and increment its value by 1 Which means that the element has
//         occured once in the array.
//       - Check if the property by the name of the current vechile has a value
//         greater than 0, if it does then increment the value by 1.
//
//
// C --> Code With Intent

function countOccurrences(vehicles) {
  let count = 0;
  let vechileTypeCount = {};
  let string;
  for (let index = 0; index < vehicles.length; index++) {
    if (vechileTypeCount[vehicles[index]] > 0) {
      vechileTypeCount[vehicles[index]] += 1;
    } else if (vechileTypeCount[vehicles[index]] === undefined) {
      vechileTypeCount[vehicles[index]] = count;
      vechileTypeCount[vehicles[index]] += 1;
    }
  }
  string = `car => ${vechileTypeCount['car']}\ntruck => ${vechileTypeCount['truck']}\nSUV => ${vechileTypeCount['SUV']}\nmotorcycle => ${vechileTypeCount['motorcycle']}`;
  return string;
}
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];
console.log(countOccurrences(vehicles));