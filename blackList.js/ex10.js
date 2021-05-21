let fibonacci = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let num = fibonacci(n - 1);
    num.push(num[num.length - 1] + num[num.length - 2]);
    return num;
  }
};
let brr = fibonacci(5);
console.log(brr);
let sum = 0;
for (let i = 0; i < brr.length; i++) {
  sum += brr[i];
}
console.log(sum);
