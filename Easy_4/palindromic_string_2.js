function isRealPalindrome(string) {
  let stringOfFilterdChar = string.toLowerCase().split("").filter(char => {
    return ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'));
  }).join("");
  //console.log(stringOfFilterdChar);
  let stringOfFilteredReversedChar = string.toLowerCase().split("").filter(char => {
    return ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'));
  }).reverse().join("");
  //console.log(stringOfFilteredReversedChar);
  return stringOfFilterdChar === stringOfFilteredReversedChar;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false