// Question 1
let str = "The Flintstone Rock!";
const MAX_TIMES = 10;
for (let index = 0; index < MAX_TIMES; index++) {
  console.log(str.padStart(str.length + index));
}

// OR
for (let padding = 0; padding < MAX_TIMES; padding++) {
  console.log(" ".repeat(padding) + "The Flintstones Rock");
}
console.log("**********************************************************");

// Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
let arr = Array.from(munstersDescription);
for (let index = 0; index < arr.length; index++) {
  arr[index] = arr[index] !== arr[index].toUpperCase() ?
    arr[index].toUpperCase() : arr[index].toLowerCase();
}
let newStr = arr.reduce((accumulator, element) => {
  accumulator += element;
  return accumulator;
}, '');
console.log(newStr);

// OR
console.log(munstersDescription.split('').map(function (char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join(""));
console.log("**********************************************************");

//Question 3

function factors(number) {
  let factors = [];
  let divisor = number;
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor--;
  }
  return factors;
}
console.log(factors(10));
console.log("**********************************************************");

// Question 4

let buffer = [1, 2, 3, 4];
let buffer1 = [1, 2, 3, 4];
const MAX_SIZE = 4;
let newElement = 5;
let newElement1 = 5;
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1(buffer, MAX_SIZE, newElement));

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log(addToRollingBuffer2(buffer1, MAX_SIZE, newElement1));
console.log("**********************************************************");

// Question 5
console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true

console.log("**********************************************************");
// Question 6
let nanArray = [NaN];
console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]) === Number.isNaN(NaN));
console.log("**********************************************************");

//Question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34 will be the output because we're just subtracting 8 from 42
console.log("**********************************************************");

// Question 8

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  let demoObject1 = demoObject;
  Object.values(demoObject1).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

//messWithDemographics(munsters);
console.log(Object.values(munsters));
//console.log(munsters);
//  Yes the family's data did get ransacked because objects are mutable.
// In javaScript Objects are passed by reference, thus demoObject points
// at munsters Object and munster Object is mutated within the function body.
// When spot uses Object.values(demoObject) it returns an array of values
// and each value in that array is it-self an object and each individual
// object references to the original sub-object of munnsters.
// familyMembers is just a pointer to some object in memory - that object
// is shared between munster and the new array.

// Question 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// It will log paper to the console
// How ?
// First the innermost rps() invocation that is at level 3, is evaluated
//  which are rps("rock", "paper"), rps("rock", "scissors") the values that
// these two incovations return are passed into the outer rps() invocation
// at level 2 rps("paper", "rock") which returns the value "paper" to the
// console.log() mehtod

// Question 10

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
console.log(bar(foo())); // It will return 'no'
