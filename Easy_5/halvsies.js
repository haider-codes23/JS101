// Input : Array
// Output : Array containing Two elements each of which is an array
// The first Element of the returned value which is an array should contain
// the first half of the original array elements and put the second half of the
// original array into the second element of the returned array.
// If the original array contain odd number of elements place the
// middle element in the first half array.

function halvsies(array) {
  let halvsiesArray = [[], []];
  if (array.length % 2 === 0) {
    halvsiesArray[0] = array.slice(0, (array.length / 2));
    halvsiesArray[1] = array.slice((array.length / 2), array.length);
  } else if (array.length % 2 === 1) {
    halvsiesArray[0] = array.slice(0, ((array.length / 2) + 1));
    halvsiesArray[1] = array.slice(((array.length / 2) + 1), array.length);
  }
  return halvsiesArray;
}
console.log(halvsies([1,2,3,4]));
console.log(halvsies([1,2,3,4,5]));