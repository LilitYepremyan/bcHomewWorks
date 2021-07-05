function slice(array, start = 0, end = array.length - 1) {
  if (start < 0) {
    start = array.length + start;
  }
  if (end < 0) {
    end = array.length + end;
  }
  let returnSlice = [];
  for (let i = start; i < end; i++) {
    returnSlice.push(array[i]);
  }
  return returnSlice;
}
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8], 2, -3));
