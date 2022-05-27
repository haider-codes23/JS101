function LengthOfWord(word) {
  let length = 0;
  for (let index = 0; index < word.length; index++) {
    if ((word[index].toLowerCase().charCodeAt() >= 'a'.charCodeAt()) && (word[index].toLowerCase().charCodeAt() <= 'z'.charCodeAt())) {
      length += 1;
    }
  }
  return length;
}

function wordSize(string) {
  let wordSizesObj = {};
  let wordArray = string.split(" ");
  for (let index = 0; index < wordArray.length; index++) {
    let wordLength = LengthOfWord(wordArray[index]);
    if (wordLength === 0) {
      continue;
    }

    if (!wordSizesObj[wordLength]) {
      wordSizesObj[wordLength] = 0;
    }
    wordSizesObj[wordLength] += 1;
  }
  return wordSizesObj;
}

console.log(wordSize("It's Going to be really hard!!!!"));
console.log(wordSize("What's up doc?"));

//console.log(wordSize("Please Go Study ASAP"));
//console.log(wordSize("Kill Mee now"));
//console.log(wordSize(""));
