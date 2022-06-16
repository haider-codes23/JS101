
function subString(string) {

  let subStringArray = [];

  // eslint-disable-next-line max-len
  for (let startingIndex = 0; startingIndex <= string.length - 2; startingIndex++) {
    // eslint-disable-next-line max-len
    for (let endingIndex = 2; endingIndex <= string.length - startingIndex; endingIndex++) {
      // eslint-disable-next-line max-len
      let subString = string.substring(startingIndex, endingIndex + startingIndex);
      subStringArray.push(subString);
    }
  }

  return subStringArray;

}

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

function palindromeSubStrings(string) {
  let result = [];
  let subStringArray = subString(string);

  subStringArray.forEach(subString => {

    if (isPalindrome(subString)) {
      result.push(subString);
    }
  });

  return result;

}
// console.log(palindromeSubStrings('supercalifragilisticexpialidocious'));
// console.log(palindromeSubStrings("abcddcbA"));
// console.log(palindromeSubStrings("palindrome"));
console.log(subString("halo"));