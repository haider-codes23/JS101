// write a function that takes a string consistitng of zero or more spaces
// and returns an object that shows the number of words of different sizes

function wordSize(string) {
  let wordSizesObj = {};
  let wordArray = string.split(" ");
  for (let index = 0; index < wordArray.length; index++) {
    let wordLength = wordArray[index].length;
    if (wordLength === 0) {
      continue;
    }
    console.log(wordSizesObj[wordLength]);
    if (!wordSizesObj[wordLength]) {
      wordSizesObj[wordLength] = 0;
    }
    wordSizesObj[wordLength] += 1;
  }
  return wordSizesObj;
}

console.log(wordSize("It's Going to be really hard!!!!"));

//console.log(wordSize("Please Go Study ASAP"));
//console.log(wordSize("Kill Mee now"));
//console.log(wordSize(""));
