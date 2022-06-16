let findDup = arr => {
  return arr.filter((num, idx) => arr.slice(idx + 1).includes(num))[0];
};
console.log(findDup([1, 5, 3, 2, 5, 8, 9]));