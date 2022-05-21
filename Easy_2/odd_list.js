/*function oddities(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if (index % 2 !== 1) {
      result.push(array[index]);
    }
  }
  return result;
}
*/
let oddities = array => array.filter((_, index) => index % 2 !== 1);


//const oddities = (arr) => arr.filter((_, idx) => idx % 2 === 0);
let arrayOfNumbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 110];
let arrayOfStrings = ["Haider", "is", "a", "badass", "programmer"];
console.log(oddities(arrayOfStrings));
console.log(oddities(arrayOfNumbers));
