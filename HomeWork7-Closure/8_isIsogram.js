let string = "John";
function isIsogram(string) {
  let newString = "";
  for (let elem of string) {
    if (newString.includes(elem)) {
      return "No";
    }
    newString += elem;
  }
  return "Yes";
}
console.log(isIsogram(string));
