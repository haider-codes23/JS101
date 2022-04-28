function findGreatest(numbers) {
  if (numbers === undefined) {
    console.log("You have provided an empty number list!!!");
  } else {
    let savedNumber = numbers[0];
    numbers.forEach(num => {
      if (num > savedNumber) {
        savedNumber = num;
      }
    });

    return savedNumber;
  }
  return (console.log("You have provided an empty number list!!!"));
}
console.log(findGreatest([undefined]));