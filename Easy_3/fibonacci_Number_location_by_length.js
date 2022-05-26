function findFibonacciIndexByLength(noOfDigits) {
  let fibonacciSeq = [1n, 1n];
  let count = 1n;
  do {
    count += 1n;
    fibonacciSeq[count] = fibonacciSeq[count - 2n] + fibonacciSeq[count - 1n];
    console.log(`Value at Index ${count}: ${fibonacciSeq[count]}`);
  } while (fibonacciSeq[count].toString().length < noOfDigits);
  console.log(fibonacciSeq);
  return count + 1n; // The reason why im returning count + 1 is because we assumed that the first fibonacci number has an index of 1 but array index starts at 0
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(10n) === 45n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
// The function starts by initializing the Fibonacci sequence
// array's first two locations Index 0 and 1, both of which are 1n.
// I use the count varibale to store the number of location in the fibonacciSeq
// array that have been initialized with a value. And initially our count in 1n.
// The solution then uses a do...while loop to calculate the value of each
// subsequent fibonacci number while the length of the fibonacci
// number is less than the value the of the length argument.
// At every iteration first the count is incremented by 1n,
// then the subsequent fibonacci number is calculated.
// If the length of the fibonacci number calculated is equal to or greater
// than the desired length, the function returns the value of count + 1, I am
// adding 1 to count while returning it, is because the first fibonacci
// number is should be at index 1, but arrays start at index 0 not 1, thus i add
// 1 to count while returning it.