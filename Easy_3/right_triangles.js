// write a function that takes a positive intege as an argument .
// The function logs a right triangle whoes sides each have n stars.

function triangle(numberOfStars) {
  let whiteSpace = " ";
  let star = "*";
  for (let index = 1; index <= numberOfStars; index++) {
    console.log(`${whiteSpace.repeat(numberOfStars - index)}${star.repeat(index)}`);
  }
}
triangle(5);
triangle(9);

// OR

function triangle1(numberOfStars) {
  let star = "*";
  for (let index = 1; index <= numberOfStars; index++) {
    console.log(`${"".padStart(numberOfStars - index, " ")}${star.repeat(index)}`);
  }
}
triangle1(5);
triangle1(10);