function checkIsPolindrom(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "Is not polindrom ";
    }
  }
  return "Is polindrom";
}
console.log(checkIsPolindrom("AbbA"));
