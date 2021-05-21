let array = [-14, 5, -5];
let firstArray = [];
let lastArray = [];
let zero = "";
for (let i = 0; i < array.length; i++) {
  if (array[i] === 0) {
    zero = "unsigned";
    break;
  } else if (array[i] > 0) {
    firstArray.push(array[i]);
  } else if (array[i] < 0) {
    lastArray.push(array[i]);
  }
}
if (zero === "unsigned") {
  console.log("unsigned");
} else if (lastArray.length % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}
