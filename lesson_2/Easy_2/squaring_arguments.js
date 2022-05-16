let multiply = (number1, number2) => {
  return (number1 * number2);
};

let square = number => {
  return multiply(number, number);
};
console.log(square(5) === 25);

