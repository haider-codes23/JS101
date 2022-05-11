// ask user for length of the room in meters
// ask user for width of the room in meters
// calculate area of room in both square meters and square feet
// note 1 square meter == 10.7639 square feet
const READLINE = require('readline-sync');
const CONVERSIONFACTOR = 10.7639;
let length;
let width;
let areaObj = {
  areaInMeters: 0,
  areaInFeet: 0,
};

function calcualteArea() {
  console.log("Please Enter the Length of the Room in Meters:");
  length = READLINE.question();
  console.log("Please Enter the Width of the Room in Meters:");
  width = READLINE.question();
  areaObj.areaInMeters = length * width;
  areaObj.areaInFeet = areaObj.areaInMeters * CONVERSIONFACTOR;
  console.log(`Area in Square Meters: ${areaObj.areaInMeters}`);
  console.log(`Area in Square Feet ${areaObj.areaInFeet.toFixed(2)}`);
}

calcualteArea();

