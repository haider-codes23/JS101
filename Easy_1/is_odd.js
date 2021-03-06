// function that takes one integer argument
// Argument can be negative or postive or zero
// function returns true if the number's absolute value is odd
// argument is a valid integer value

let isOdd = (number) => Math.abs(number) % 2 === 1;

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
