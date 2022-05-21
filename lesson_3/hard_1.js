// Question 1
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());
// No, they donot return the same thing. The function first() returns the
// Object {prop: "hi there"} and the function second returns undefined
// In javaScript semicolons are optional. However if you ommit them, the
// javascript engine inserts them where it thinks you need them. In function
// second, it inserts a semicolon after the word return, so the function returns
// undefined. No error are thrown since the rest of the code is valid.
console.log("*******************************************************************");
// Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [1, 2] }
// In javaScript objects are passed by reference so numArray references the
// original array [1], and when you mutate the numArray it modifies the original
// object referenced by object.
// We can use slice() method on the object["first"] and initialize numArray with
// a reference to a copy of the original array.
// OR we could use concat() method on the object['first'] which returns a new
// array instead of modifying the original array.
console.log("*******************************************************************");
// Question 3
// Part A
/*function messWithVars(one, two, three) {
  // Here on line 42 local variable one, two and three references the same object as Global
  // varibale one two and three
  one = two;// This is reassinment, here the local varibale one references the object that local two was pointing at but the global varibale one still references ["one"] as we didn't change what it refernces 
  two = three;// This too is reassignmnet, here the local varibale two references the object that local varibale three points at, now local varibale two and three point at the same object, but the global varibale two still references the same object ["two"] as we didn't change it anywhere 
  three = one;// Again Reassignment, here the local varibale three references the same object as local varibale 1, which is ["two"] because we reassigned one to ["two"] above. But global varibale three still points to the object ["three"] ass we didn;t change it anywhere
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is ['two']
console.log(`two is: ${two}`); // two is ['three']
console.log(`three is: ${three}`); // three is ['one']*/
// Note: Here we have a total of three Global varibales one, two and three,
// then we have a function who has three parameters by the same name one,
// two and three but their scope is local(the function body only). Since they
// have the same name the inner scope varibales shadow the outer scope varibales
// thus the outer scope vaiables are not accessible inside the function.
// Thus the Global varibale one and the local varibale one are not the
// same variable, even though they have the same name.

// Part B
/*function messWithVars(one, two, three) {
  // Here on line 68 local varibale one, two and three references the same objects as the global varibales   
  one = ["two"];// This is reassignment. Local variable one points at a completely new array obect ["two"]. This is not the same object that varibale local variable two is pointing at. And Global varibale one still points at ["one"]
  two = ["three"];// This too is reassignment. local variable two references a completely new array object. This is not the same object that local varibale two points at. And Global varibale two still points at ["two"] as we didn' change it anywhere
  three = ["one"];// Again reassignment. local varibale three points at a completely new array object. This is not the same object that local varibale one points at. And Global varibale one still points at ["one"]
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`);// three is: three
*/
// Part C
/*function messWithVars(one, two, three) {
  // Here the local varibale one points at the same object that global variable one points. and same Goes for the rest of the varibales
  one.splice(0, 1, "two");// Here local varibale one is pointing at the same object that global varibale one is pointing at and we are calling a mutating method on the local varibale one, since global variable one points at the same array it gets mutated as well
  two.splice(0, 1, "three");// Here local varibale two is pointng at the same object as global variable two. And when we call a mutating method on the local varibale the array it points at get mutated. And since the global varibale was pointng at the same array as the local varibale two, it also gets mutated
  three.splice(0, 1, "one");// Here local varibale three is pointing at the same array as global varibale three. When we call the mutating method on the local varibale the global varibale three gets mutated as well.
}

let one = ["one"];// "two"
let two = ["two"];// "three"
let three = ["three"];// "one"

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: "two"
console.log(`two is: ${two}`);// two is: "three"
console.log(`three is: ${three}`);// three is: "three"*/


// Extra Example 1
/*function messWithVars(one, two) {
  // Here on line 105 the local varibale one is pointing at the same object as global varibale one. And same goes or two 
  one = two;// This is reassignment. Local variable one references the the same object as local varibel two same as global varibale two, but the global varibale two points at ["two"] as we haven't changed it anywhere
  one.splice(0, 1, "five");// Here local varibale one references the same object as local varibale two(because we reassigned local varibale one with the local varibale two's reference). When we apply the mutating method splice() on one it mutates the object referenced by local varibale two thus the global varibale two gets mutated as well. 
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: five*/

// Extra Example 2
function messWithVars(one, two) {
  // Here the local varibale one and two point at the same varibale as the variables as the global varibale one and two
  one = ["two"]; // This is reassignment, now local varibale one points at a completely new array ["two"]. It is not the same as object as local variable two points at. Global varibale one still points at ["one"] as we haven't changed it.
  one.splice(0, 1, "five"); // Local variale one is pointing at the array ["2"], so when one call splice() method what gets mutated is the object ["two"] referenced by local varibale one
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two


console.log("*******************************************************************");

// Question 4
function isDotSeparatedIpAddress(inputString) {
  const MAX_LENGTH = 4;
  let dotSeparatedWords = inputString.split(".");
  let lengthOfIpAddress = dotSeparatedWords.length;
  if (lengthOfIpAddress === MAX_LENGTH) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        console.log("Breaking");
        return false;
      }
    }
  }

  return true;
}

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}
console.log(isDotSeparatedIpAddress("255.255.255.256"));