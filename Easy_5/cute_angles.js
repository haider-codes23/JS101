// Write a function that takes a floating point number as an argument.
// The floating point number represents an angle between 0 and 360 degress.
// The function returns a string representing the angle in degress, minutes and seconds.
// You should use degrees symbol (˚) to represent degrees
// you should use single quote (') to represent minutes
// you should use double quote (") to represent seconds
// There a 60 minutes in a degrees and 60 seconds in a minute

// eslint-disable-next-line max-lines-per-function
function dms(floatingPoint) {
  const minConversionFactor = 60;// 1 Degree is equal to 60 minutes
  const secConversionFactor = 60;// 1 Minute is equal to 60 seconds

  let degress = floatingPoint.toString().split('.')[0];
  let remainingDegress = Number.parseFloat((floatingPoint-degress).toFixed(3));
  let minutes = (remainingDegress * minConversionFactor).toFixed(1);
  let seconds = minutes.split('.')[1];
  minutes = minutes.split('.')[0];
  let lengthOfDigits = seconds.length;
  seconds /= (10 ** lengthOfDigits);
  seconds *= secConversionFactor;
  console.log(`${degress}˚${minutes.toString().padStart(2, '0')}'${seconds.toString().padStart(2, '0')}"`);
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"