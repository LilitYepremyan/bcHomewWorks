let array = [10, 25, 16, -5, 30, 15, 24];
let number = 16;
function getLargerNumber(array, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      newArray.push(array[i]);
    }
  }
  if (newArray.length === 0) {
    return "Such values do not exist.";
  }
  return newArray;
}
console.log(getLargerNumber(array, number));
