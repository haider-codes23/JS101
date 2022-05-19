// Question 1
let advice = "Few things in life are as important important as house training your pet dinosaur.";
console.log(advice.replaceAll('important', 'urgent'));// Replaces all occurences.
console.log(advice.replace('important', 'urgent'));// only replaces the first occurence.
console.log("***************************************************************");
// Question 2

let numbers = [1, 2, 3, 4, 5];
let number1 = numbers.slice().reverse();
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(`sorted array: ${sortedArray}`);
// Bonus features
let numbers2 = [1,2,3,4,5];
let reversedArray = [];
numbers2.forEach(number => {
  reversedArray.unshift(number);
});
console.log(`forEach ReversedArray:${reversedArray}`);
console.log("***************************************************************");

// Question 3
// Given a number and array, determine whether the number is included in the array 
let numbers3 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number4 = 8;  // false
let number5 = 95; // true
let found;
function findInArray(array, number) {
  found = array.find((element) => element === number);
  return found;
}
console.log(findInArray(numbers3, number4) === number4);
console.log(findInArray(numbers3, number5) === number5);

// Another way to do it
console.log(numbers3.includes(number4));
console.log(numbers3.includes(number5));
console.log("***************************************************************");

// Question 4
let famousWords = "seven years ago...";
famousWords = "Four score and " + famousWords;
console.log(famousWords);
// OR
let famousWords1 = "seven years ago...";
famousWords1 = "Four score and ".concat(famousWords1);
console.log(famousWords1);
// OR
let famousWords2 = "seven years ago...";
famousWords2 = 'Four score and '.repeat(1) + famousWords2;
console.log(famousWords2);
console.log("***************************************************************");

// Question 5
let numbers4 = [1, 2, 3, 4, 5];
numbers4.splice(2, 1);
console.log(numbers4);
console.log("***************************************************************");

// Question 6
let flintStone = [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ];
let newFlintStone = [].concat(...flintStone);
console.log(newFlintStone);
//OR
let flintStone1 = [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ];
let newFlintStone1 = flintStone1.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);
console.log(newFlintStone1);
// OR
let newFlintStone2 = [];
let flintStone2 = [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ];
flintStone2.forEach(element => {
  newFlintStone2 = newFlintStone2.concat(element);
});
console.log(flintStone2);
console.log("***************************************************************");

// Question 7
let objFlintStone = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
for (let array of Object.entries(objFlintStone)) {
  if (array.includes('Barney')) {
    console.log(array);
  }
}
let newArray = Object.entries(objFlintStone).filter(pair => pair[0] === "Barney").shift();
console.log(newArray);
console.log("***************************************************************");

// Question 8
let numbers5 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };
console.log(Array.isArray(numbers5));
console.log(Array.isArray(table));

// Question 9
let title = "Flintstone Family Members";
let padding = Math.floor(40 - title.length) / 2;
console.log(padding);
console.log(title.padStart(padding + title.length));

// Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";
let statement3 = "Here I go again";
let lengthStatement1 = statement1.split("").filter(element => element === "t").length;
let lengthstatment2 = statement2.split("").filter(element => element === "t").length;
let lengthStatement3 = Array.from(statement3).filter(element => element === "e").length;
console.log(lengthStatement1);
console.log(lengthstatment2);
console.log(lengthStatement3);


