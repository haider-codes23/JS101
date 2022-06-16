//  P --> Understand the Problem
//         Input: Number
//         Output: String
//         Questions:-
//              -
//
//         Rules:-
//            Explicit Requirement:
//              - Time of the day can be represented as the number of minutes
//                before of after midnight.
//              - If the number of minutes is poitive, the time is after
//                midnight.
//              - If the number of minutes is negative, the time is before
//                midnight.
//              - The function should take a time using minute-based format.
//              - The function should return the time of the day in 24 hour
//                format(hh:mm).
//              - The function should work any iteger input postive or negative.
//              - Donot use javascript's Date class method.
//            Implicit Requirements:
//              -
//
// E --> Examples and Test Cases
//         -console.log(timeOfDay(0) === "00:00"); // true
//         -console.log(timeOfDay(-3) === "23:57"); // true
//         -console.log(timeOfDay(35) === "00:35"); /// true
//         -console.log(timeOfDay(-1437) === "00:03"); // true
//         -console.log(timeOfDay(3000) === "02:00"); // true
//         -console.log(timeOfDay(800) === "13:20"); // true
//         -console.log(timeOfDay(-4231) === "01:29"); // true
//
//
// D --> Data Structure: Numbers
//
// Algorithm:
//       - 
//
// C --> Code With Intent

function timeOfDay(minutes) {
  let mins;
  let hours;
  if (minutes === 0) {
    mins = 0;
    hours = 0;
  } else if (minutes > 0) {
    if (minutes < 60) {
      mins = minutes;
      hours = 0;
    } else if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      mins = minutes % 60;
    }
  } else if (minutes < 0) {
    //
  }
  let string = `${hours}:${mins}`;
  return string;
}

console.log(timeOfDay(800));
console.log(timeOfDay(35));
console.log(timeOfDay(3000));