function checkNumber(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Not a number";
  }

  if (num === 0) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }

  num = Math.trunc(num / 10);
  return checkNumber(num);
}
console.log(checkNumber());
