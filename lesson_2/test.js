let buffer = [];
const MAX_SIZE = 3;
let newElement = 2;
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log(addToRollingBuffer1(buffer, MAX_SIZE, newElement));
function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}
console.log(addToRollingBuffer2(buffer, MAX_SIZE, newElement));
