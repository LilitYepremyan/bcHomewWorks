const reverseLastAndFirstDigits = (number) => {
  if (typeof number === "number" && !Number.isNaN(number)) {
    if (Math.abs(number) < 10) {
      return number;
    }
    const lastDigit = number % 10;
    number = Math.trunc(number / 10);
    let numberClone = number;
    let count = 0;
    while (numberClone) {
      count++;
      numberClone = Math.trunc(numberClone / 10);
    }
    const firstDigit = Math.trunc(number / Math.pow(10, count - 1));
    number = number % Math.pow(10, count - 1);
    return lastDigit * 10 ** count + number * 10 + firstDigit;
  }
  return "Error";
};
console.log(reverseLastAndFirstDigits(6458));
