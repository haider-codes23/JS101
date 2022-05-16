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

function signedNumberToString(number)  {
  let finalString = '';
  let value = Math.abs(number);
  do {
    let remainder = value % 10;
    value = (value - remainder) / 10;

    finalString = matchNumber(remainder) + finalString;

  } while (value > 0);
  return number > 0 ? finalString : '-' + finalString;
}

console.log(signedNumberToString(-1212) === '-1212');
console.log(signedNumberToString(+1234) === '1234');
console.log(signedNumberToString(-1234) === ('-1234'));
/*
