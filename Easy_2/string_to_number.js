function matchString(char) {
  switch (char) {
    case "0": return 0;
    case "1": return 1;
    case "2": return 2;
    case "3": return 3;
    case "4": return 4;
    case "5": return 5;
    case "6": return 6;
    case "7": return 7;
    case "8": return 8;
    case "9": return 9;
    default: return undefined;
  }
}

function stringToNumber1(string) {
  let arrayOfNumbers = string.split("").map(char => matchString(char));
  let value = arrayOfNumbers[0];
  value = arrayOfNumbers.reduce((accumulator, number) =>
    (accumulator * 10) + number, value);
  return value;
}

function stringToNumber(string) {
  let value = 0;
  let arrayOfNumbers = string.split("").map(char => matchString(char));
  arrayOfNumbers.forEach(number => {
    value = (value * 10) + number;
  });
  return value;
}

console.log(stringToNumber("1212"));
console.log(stringToNumber("3456"));
