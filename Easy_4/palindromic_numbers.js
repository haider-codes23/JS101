function isPalindrome(string) {
  let arrayOfChar = string.split("");
  let arrayOfReversedChar = string.split("").reverse();
  let stringOfChar = arrayOfChar.join("");
  let stringOfReversedChar = arrayOfReversedChar.join("");

  if (stringOfChar !== stringOfReversedChar) {
    return false;
  }
  return true;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}
console.log(isPalindromicNumber(34543)); // True
console.log(isPalindromicNumber(123210)); // False