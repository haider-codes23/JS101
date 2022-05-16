function matchNumber(number) {
  switch (number) {
    case 0: return "0";
    case 1: return "1";
    case 2: return "2";
    case 3: return "3";
    case 4: return "4";
    case 5: return "5";
    case 6: return "6";
    case 7: return "7";
    case 8: return "8";
    case 9: return "9";
    default: return undefined;
  }
}
function numberToString(number) {
  let finalString = '';
  let value = number;
  let units = matchNumber(value % 10);
  console.log(`units: ${units}`);
  value = (value - units) / 10;
  let tens = matchNumber(value % 10);
  value = (value - tens) / 10;
  let hundreds = matchNumber(value % 10);
  value = (value - hundreds) / 10;
  let thousands  = matchNumber(value);
  arrayOfStrings.push(thousands, hundreds, tens, units);
  console.log(arrayOfStrings);
  finalString = thousands + hundreds + tens + units;
  return finalString;
}
//console.log(numberToString(1212));

function numberToString1(number)  {
  let finalString = '';
  do {
    let remainder = number % 10;
    number = (number - remainder) / 10;

    finalString = matchNumber(remainder) + finalString;

  } while (number > 0);
  return finalString;
}
console.log(numberToString1(1212) === '1212');