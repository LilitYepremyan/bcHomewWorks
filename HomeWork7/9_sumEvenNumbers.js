function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      let sqrt = array[i] ** 2;
      sum += sqrt;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([2, 4, 5]));
