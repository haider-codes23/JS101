// Question 1
// It wouldn't raise any error, because javascript engine enables the array
// to now have a total of 6 slots of which slot 3, 4 and 5 are empty. If we
// try to access these empty locations, it'll return undefined although slots
// 3, 4 and 5 donot have the value undefined
let number = [1, 2, 3];
number[6] = 5;
console.log(number[4]);
console.log("**************************************************************");

// Question 2
// There are mulitple ways to find out if a given string ends with a certain
// character or symbol
// 1st way ==> Use String method String.prototype.endsWith() which returns
//         ==> true or false depending on wether or not the string ends with
//         ==> the character passed to it as argumnet.
// 2nd way ==> determine the length of the string
//         ==> using the lenght of the string inside a condtional evaluate 
//         ==> if the last character of the string is an Excalmation mark or not
let str1 = "come over here!";
let str2 = "What's up,Doc?";
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

function strEndsWith(str) {
  if ((str.length - 1) === '!') {
    console.log("Yes, the String ends with '!'");
  }
}

strEndsWith(str1);
strEndsWith(str2);

console.log("**************************************************************");

// Question 3
// There are two ways using which we can find out if an object contains a
// property or not.
// using the method Object.prototype.hasOwnProperty()
// ==> This method can be called on almost all javaScript objects,
// ==> because most objects descend from Object, and hence inherit its methods
// using the method Object.hasOwn()
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(Object.hasOwn(ages, 'Spot'));
console.log(ages.hasOwnProperty('Spot'));

console.log("**************************************************************");

// Question 4
// There a multiples ways

let munstersDescription  = "the Munsters are CREEPY and Spooky.";
let newString = munstersDescription.slice(-35, -34).toUpperCase() +
 munstersDescription.slice(1).toLowerCase();
console.log(newString);

let newStr = munstersDescription.charAt(0).toUpperCase() +
 munstersDescription.substring(1).toLowerCase();
console.log(newStr);

// Question 5
console.log(false == '0'); // false is evaluated to 0 and the string '0' is implicitly coereced to a number
console.log(false === '0'); // strict euqality operator returns false if the oprands are not of the same type 

// Question 6
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);
console.log(ages);

// Question 7
let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str3.includes('Dino'));
console.log(str4.includes("Dino"));
console.log(str3.match('Dino') !== null);
console.log(str4.match('Dino') !== null);

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
console.log(flintstones.push('Dino'));

// Question 9
console.log(flintstones.push('Dino', 'Happy'));
console.log(flintstones);

// Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0, advice.indexOf('house')));


