
// Question 1
let cat = "butterscotch";
console.log(cat[-4]);
console.log(cat.slice(-4, -3));
console.log(cat[cat.length - 4]);

// Question 2
let dog = "fido";
//dog = dog[0].toUpperCase() + dog.substring(1);
// dog.replace('f' , 'F');
let letters = dog.split('');
letters[0] = letters[0].toUpperCase();
dog = letters.join('');
console.log(dog);
console.log('*********************************');

let arr = ['This', 'is', 'a', 'string'];
let obj = {'Thisis': 'a string'};
console.log(obj['Thisis']);
//console.log(arr[3.14151926]);

let s = "s";
let animals = ['cat', 'dog', 'ass', '','tiger', 'rhino', 'eagle', 'giraffe'];
animals.forEach(animal => {
  animals.shift();
  console.log(`This is interation ${animal}`);
  return true;
});
console.log(animals);
