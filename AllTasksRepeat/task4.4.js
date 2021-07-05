const lastDigitToStart = (number) => {
  if (typeof number === "number" && !Number.isNaN(number) && number > 0) {
    if (number % 10 === 0 || number < 10) {
      return number;
    }
    const lastDigit = number % 10; 
    number = Math.floor(number / 10); 
    let count = 0;
    let numberClone = number;
    while (numberClone) {
      numberClone = Math.floor(numberClone / 10);
      count++;
    }
    // lastDigit = 9, count = 2, number = 40
    return lastDigit * 10 ** count + number;
  }
  return "Error";
};
console.log(lastDigitToStart(4569));
