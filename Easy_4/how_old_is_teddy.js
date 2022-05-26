function getAge(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let age = getAge(20, 120);
console.log(`Teddy is ${age} years old!`);

