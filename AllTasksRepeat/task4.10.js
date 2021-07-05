const checkPrimeNumber = (number) => {
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return "No";
    }
  }
  return "Yes";
};
console.log(checkPrimeNumber(123));

