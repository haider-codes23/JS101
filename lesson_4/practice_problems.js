// Q1) What is the return value of the filter method call below
[1, 2, 3].filter(num => 'hi');
// filter only determines the truthiness of the call-back's return value,
// that's the only thing filter cares about concerning the call-back's
// return value, if the return value is truthy then filter will select
// that item/ element otherwise it will not. Now the call-back return
// value 'hi' on each iteration. 'hi' is a truthy value thus filter will
// select all values in the original array. And return an array that
// contains all elements that were in the original array.

// Q2) What is the return value of the map in the following code? why?
[1, 2, 3].map(num => {
  num * num;
});
// The return value is an array with all three elements set to
// undefined. [undefined, undefined, undefined]
// Because our arrow function does not have an explicit return value
// the call-back will return undefined for all 3 iteration of the
// call-back.
// Map looks at the return value of the callback function to decide
// the elements in the returned array. Each element in the original array
// is replaced by what the callback returns for that element. And in this
// case there is no explicit return statement in the callback function
// which means the callback returns undefined.


// Q3) What is the return value of map in this case? why ?
[1, 2, 3].map(num => num * num);
// [1, 4, 9]
// map uses the return value of the callback and the return value is the product
// of num and num. map then takes this value and places it in a new array.
// This process repeats for each element in the original array.


// Q4) What is the return value of the following statement ?
['ant', 'bear', 'caterpillar'].pop().length;
// It return the length of the string 'caterpillar' which is 11.
// The pop method removes last element from the array and uses it as it's return
// value. pop method returns the string 'caterpillar' and then on that string we
// we apply strings length property, which in turn returns the length of the
// string.

// Q5)What is the callback return value in the following code? Also, what is the
// return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});
// every() method looks at the return value of the callback and if
// each iteration of the callback returns a truthy value only then the
// return value of the method call to every() will be true and in the case above
// the callback on each iteration returns the product of num and 2. The return
// value of the callback is always truthy so the method call the every() returns
// true.


// Q6) How does Array.prototype.fill work? Is it destructive? How can we
// find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
// fill method changes all elements in array to a static value.
// And then returns the modified array.
// The method call to fill returns the array [1, 1, 1, 1, 1]


// Q7) What is the return value of map in the following code? why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// map method uses the return value of the callback to perform transformation
// Here the return value of the callback depends on the if condition
// if the element that is passed as an argument to the callback has a length
// greater than 3, then that element is placed in the new array as it is.
// On the first iteration of the callback, nothing is returned because the
// return statement is wrapped in the body of an if statement, and if the
// condition evaluates to false nothing will be returned explicity by the
// callback function, so the implicit return value will be used that is
// undefined.Then on the second iteration of the callback the conditional
// expression evaluates to true and returns the string 'bear'. So the array
// returned by the method call to maps is [undeined, 'bear'].


// Q8) Write a program that uses this array to create an object where the names
// are the keys and the values are the positions in the array:
let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];
let keys = Object.keys(flintstones);
console.log(keys);
let flintstoneObj = {};
flintstones.forEach(element => {
  keys.forEach(key => {
    flintstoneObj[element] = key;
  });
});
console.log(flintstoneObj);

// Q9) Add up all the ages from the munster family object
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let values = Object.values(ages);
let sumOfAges = values.reduce((agesSum, currentAge) => agesSum + currentAge, 0);
console.log(sumOfAges);

// Q10) Pick out the minimum age from our current Munster family object.
let ageArray = Object.values(ages);
let currentAge = ageArray[0];
ageArray.forEach(age => {
  if (age < currentAge) {
    currentAge = age;
  }
});
console.log(currentAge);

// Q 11) Create an object that expresses the frequency with
// which each letter occurs in this string
let statement = "The Flintstones Rock";
let array = statement.split('');
let arrOfChar = [];
let frequency = {};
array.forEach(char => {
  if ((char > 'a' && char < 'z') || (char > 'A' && char < 'Z')) {
    arrOfChar.push(char);
  }
});
arrOfChar.forEach(char => {
  let count = 0;
  frequency[char] = frequency[char] || 0;
  frequency[char] += 1;
});
console.log(frequency);
