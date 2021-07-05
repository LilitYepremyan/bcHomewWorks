let num = 241;
if (num % 10 === 0) {
  console.log(num);
} else {
  let n1 = num % 10;
  let n2 = num - n1;
  n2 = n2 / 10;
  result = n1 * 100 + n2;

  console.log(result);
}
