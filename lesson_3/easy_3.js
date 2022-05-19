// Question 1 - Three ways to remove all elements from the array
let numbers = [1, 2, 3, 4, 5];
numbers.lenght = 0;
numbers = [];
console.log(numbers);

let numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(0, numbers1.length);
console.log(numbers1);

let numbers2 = [1, 2, 3, 4, 5];
while (numbers2.length) {
  numbers2.pop();
}
console.log(numbers2);
console.log("****************************************************");

// Question 2
console.log([1, 2, 3] + [4, 5]);

// Question 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
arr2[2] = 6;
console.log(arr1);
console.log("****************************************************");

// Question 5
function isColorValid(color) {
  let isValid;
  return (color === "blue" || color === "green");
}
console.log(isColorValid("blue"));

let isColorValid1 = (color) => color === "blue" || color === "green";
console.log(isColorValid1("blue"));
