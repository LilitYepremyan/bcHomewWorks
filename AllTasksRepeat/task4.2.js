const checkOddOrEven = (number) => {
  if (typeof number === "number" && !Number.isNaN(number)) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  return "Error";
};
console.log(checkOddOrEven(NaN));
