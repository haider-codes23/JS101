// Write a function that takes a string argument and returns a new string that
// contains the value of the original string with all consecutive duplicate
// characters collapsed into a single character.
// 1. Use Array.from(string) or string.split("") to convert the string into
//    an array of characters.
// 2. Iterate over the elemets of the array.
// 3. Check at every index if the element is not the same as the following
//    element. If it is not then we'll append it with an empty string
// 4. Once you've looped over every element of the array return the new String
//    formed from it.

function stringDoubles(string) {
  let arrayOfcharacters = string.split("");
  let newString = '';
  for (let index = 0; index < arrayOfcharacters.length; index++) {
    if (arrayOfcharacters[index] !== arrayOfcharacters[index + 1]) {
      newString += arrayOfcharacters[index];
    }
  }
  return newString;
}

console.log(stringDoubles("ddaaiillyy ddoouubbllee"));
console.log(stringDoubles('4444abcabccba'));
console.log(stringDoubles('ggggggggggggggg'));
console.log(stringDoubles('a'));
console.log(stringDoubles(''));

function stringDoubles1(string) {
  let arrayOfDoubles = string.split('');
  arrayOfDoubles = arrayOfDoubles.filter((character, index) =>
    character !== arrayOfDoubles[index + 1]);
  return arrayOfDoubles.join("");
}


console.log(stringDoubles1("gggggggggggggggggggg"));

