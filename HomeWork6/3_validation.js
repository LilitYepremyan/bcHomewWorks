function validation(str) {
  str = str.split(" ").join("");
  if (!isNaN(str)) {
    if (str.length === 10 && str[0] !== "+") {
      return str;
    }
    if (str.length === 11 && str[0] === "+") {
      return str.slice(1);
    }
  }
  return "Bad Number";
}
console.log(validation("+123456780"));
