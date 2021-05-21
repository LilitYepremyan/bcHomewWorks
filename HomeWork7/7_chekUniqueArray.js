let array = [1, 2, 3, 4];
function checkUniqueArray(array) {
  let newArray = [];
  for (let elem of array) {
    if (newArray.includes(elem)) {
      return "No";
    }
    newArray.push(elem);
  }
  return "Yes";
}
console.log(checkUniqueArray(array));
