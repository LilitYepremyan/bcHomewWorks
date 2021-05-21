let array = [21, -9, 15, 2116, -71, 33];
let digit = -71;
let newArray = [];
let indexFromArr = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] === digit) {
    indexFromArr = i;
  } else {
    newArray.push(Math.abs(array[i] - digit));
  }
}
let findIndex = 0;
let min = Infinity;
for (let i = 0; i < newArray.length; i++) {
  if (min > newArray[i]) {
    min = newArray[i];
    findIndex = i;
  }
}
if (indexFromArr) {
  console.log(indexFromArr);
} else {
  console.log(findIndex);
}
