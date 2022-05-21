let number = 1;

function isOdd (number) {
  if (number % 2 === 1) {
    console.log(number);
  }
}

while (number < 100) {
  isOdd(number);
  number++;
}
