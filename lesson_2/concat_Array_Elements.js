/*
START

SET ARRAY = HAS MULTIPLE STRING ELEMENTS
SET STRING = EMPTY STRING
SET ITERATOR = 0

WHILE ITERATOR < ARRAYSLENGTH
  STRING = STRING + VALUE WITHIN ARRAY COLLECTION AT SPCAE ITERATOR
  ITERATOR = ITERATOR + 1;

PRINT STRING
END
*/
function concatElements (array) {
  let string = "";

  /*while (iterator < array.length) {
    string = string + array[iterator];
    iterator++;
  }*/

  array.forEach(element => {
    string += element;
  });
  console.log(string);
}

let array = ['1', '2', '3', '4'];
concatElements(array);