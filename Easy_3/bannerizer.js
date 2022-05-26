// write a function which takes a short line of text and writes
// it to the console log within a box

function logInBox(string) {
  let dash = '-';
  let emptyString = " "; // using white space character
  console.log(`+${dash.repeat(string.length + 2)}+`);
  console.log(`|${emptyString.repeat(string.length + 2)}|`);
  console.log(`| ${string} |`);
  console.log(`|${emptyString.repeat(string.length + 2)}|`);
  console.log(`+${dash.repeat(string.length + 2)}+`);
}

console.log(logInBox("To Boldly go where no one has gone before."));
console.log(logInBox("Here I GO Again"));
console.log(logInBox(''));


function logInBox1(string, maxWidth) {
  let dash = '-';
  let emptyString = " "; // using white space character
  let newString = string.length > maxWidth ?
    string.slice(0, maxWidth + 1)  : string;
  console.log(`+${dash.repeat(newString.length + 2)}+`);
  console.log(`|${emptyString.repeat(newString.length + 2)}|`);
  console.log(`| ${newString} |`);
  console.log(`|${emptyString.repeat(newString.length + 2)}|`);
  console.log(`+${dash.repeat(newString.length + 2)}+`);
}

console.log(logInBox1("You dont have to worry about anybody else's course, because it's gonna take all your energy, all your intensity, all of your ferverncy to keep yourself on the track.", 80));


function logInBox2(string, maxWidth) {
  let dash = '-';
  let emptyString = " "; // using white space character
  let newString = string.length > maxWidth ?
    string.slice(0, maxWidth + 1) : string;
  console.log(`+${dash.repeat(newString.length + 2)}+`);
  console.log(`|${emptyString.repeat(newString.length + 2)}|`);
  console.log(`| ${newString} |`);
  console.log(`|${emptyString.repeat(newString.length + 2)}|`);
  console.log(`+${dash.repeat(newString.length + 2)}+`);
}

console.log(logInBox2("You dont have to worry about anybody else's course, because it's gonna take all your energy, all your intensity, all of your ferverncy to keep yourself on the track.", 80));