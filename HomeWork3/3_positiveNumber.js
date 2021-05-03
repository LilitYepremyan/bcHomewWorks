let posInteger = 250;
if (String(posInteger).length === 1 || posInteger % 10 === 0) {
  console.log(posInteger);
} else {
  let lastDigit = posInteger % 10;
  let firsDigits = (posInteger - lastDigit) / 10;

  console.log(String(lastDigit) + String(firsDigits));
}
