function getMaxPairProduct(array) {
  let sum = array[0] * array[1];
  for (let i = 1; i < array.length; i++) {
    if (array[i] * array[i + 1] > sum) {
      sum = array[i] * array[i + 1];
    }
  }
  return sum;
}
console.log(getMaxPairProduct([1, 3, 5, 6, 7]));
