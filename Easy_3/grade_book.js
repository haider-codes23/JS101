// Write a function that determines the Average of the three scores passed to it
// The Function should return the letter associated with the grade
// 90 <= score <= 100:"A"
// 80 <= score < 90:"B"
// 70 <= score < 80:"C"
// 60 <= score < 70:"D"
// 0 <= score < 60:"F"

function getGrade(score1, score2, score3) {
  let grade;
  let marks = Math.floor((score1 + score2 + score3) / 3);
  console.log(marks);
  if (marks <= 100 && marks >= 90) {
    grade = "A";
  } else if (marks < 90 && marks >= 80) {
    grade = "B";
  } else if (marks < 80 && marks >= 70) {
    grade = "C";
  } else if (marks < 70 && marks >= 60) {
    grade = "D";
  } else if (marks < 60 && marks > 0) {
    grade = "F";
  }
  return grade;
}

console.log(getGrade(88, 90 , 92));