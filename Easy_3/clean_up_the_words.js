function cleanUp(sentence) {
  let cleanText = '';

  for (let index = 0; index < sentence.length; index++) {
    if (isLowerCaseLetter(sentence[index]) ||
     (isUpperCaseLetter(sentence[index]))) {
      cleanText += sentence[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
      console.log(cleanText);
    }
  }
  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= "Z";
}

console.log(cleanUp("---what's my +*& line?"));