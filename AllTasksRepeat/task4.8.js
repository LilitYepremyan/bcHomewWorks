const checkContainDigit = (digit, number) => {
  const checkDigit =
    typeof digit === "number" && !Number.isNaN(digit) && Math.abs(digit) < 10;

  const checkNumber = typeof number === "number" && !Number.isNaN(number);

  if (checkDigit && checkNumber) {
    while (number) {
      if (digit === number % 10) {
        return "Yes";
      }
      number = Math.trunc(number / 10);
    }

    return "No";
  }
  return "Error";
};
console.log(checkContainDigit(-7, -173));

