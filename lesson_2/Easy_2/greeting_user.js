let readline = require('readline-sync');
let nameOfPerson;
let nameLength;
nameOfPerson = readline.question("What is your name ?\n");
nameLength = nameOfPerson.length;


let result = nameOfPerson[nameLength - 1] === '!' ? `HELLO ${nameOfPerson}. WHY ARE WE SCREAMING ?` : `Hello ${nameOfPerson}`;
console.log(result);