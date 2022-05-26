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
console.log(isPalindrome("123454321"));