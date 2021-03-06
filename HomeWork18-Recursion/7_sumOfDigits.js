function getSumOfDigits(num, sum = 0) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Not a number";
  }
  if (num < 0) {
    num = -num;
  }
  if (num === 0 && sum < 10) {
    return sum;
  }

  if (num === 0 && sum > 9) {
    num = sum;
    sum = 0;
    return getSumOfDigits(num, sum);
  }

  sum += num % 10;
  num = Math.floor(num / 10);
  return getSumOfDigits(num, sum);
}
console.log(getSumOfDigits(24576));

// let num = 1987;
// let sum = 0;
// while (num !== 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
//   if (num === 0 && sum > 9) {
//     num = sum;
//     sum = 0;
//   }
// }

// console.log(sum);
