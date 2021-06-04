function showBoolean(number) {
  let digit = number % 10;
  if (digit % 2 === 0) {
    return false;
  } else {
    let newNumber = Math.floor((number - digit) / 10);
    if (newNumber === 0) {
      return true;
    }
    return showBoolean(newNumber);
  }
}
console.log(showBoolean(12345));
