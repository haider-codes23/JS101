let isLeapYear1 = (year) => {
  // eslint-disable-next-line no-unneeded-ternary
  let result = ((year % 400 === 0)
  || ((year % 4 === 0) && (year % 100 !== 0))) ? true : false;
  return result;
};

console.log(isLeapYear1(2016));  // true
console.log(isLeapYear1(2015));      // false
console.log(isLeapYear1(2100));      // false
console.log(isLeapYear1(2400));      // true
console.log(isLeapYear1(240000));    // true
console.log(isLeapYear1(240001));    // false
console.log(isLeapYear1(2000));      // true
console.log(isLeapYear1(1900));      // false
console.log(isLeapYear1(1752));      // true
console.log(isLeapYear1(1700));      // false
console.log(isLeapYear1(1));         // false
console.log(isLeapYear1(100));       // false
console.log(isLeapYear1(400));       // true
