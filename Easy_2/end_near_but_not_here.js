function penultimate(string) {
  let arrayOfStrings = string.split(' ');
  console.log(arrayOfStrings);
  let arrayLength = arrayOfStrings.length;
  return arrayOfStrings[arrayLength - 2];
}

console.log(penultimate("I am a Badass programmer"));