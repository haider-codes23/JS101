let number = 1;

function isEven (number) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

while (number < 100) {
  isEven(number);
  number++;
}
