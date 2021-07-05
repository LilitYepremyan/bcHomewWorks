let sign = 0;
let arr = [-14, 5, 14];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    console.log("Unsigned");
    sign = 0;
    break;
  } else if (arr[i] < 0) {
    sign++;
  }
}
if (sign !== 0) {
  if (sign % 2 === 0) {
    console.log("+");
  } else {
    console.log("-");
  }
}
