let array = [10, 2];
function sum(arr) {
  let digit = 0;
  for (let i = 0; i < arr.length; i++) {
    digit += arr[i];
  }
  return digit;
}
console.log(sum(array));

function difference(arg) {
  let digit = arg[0];
  for (let i = 1; i < arg.length; i++) {
    digit -= arg[i];
  }
  return digit;
}
console.log(difference(array));

function multiplication(arg) {
  let digit = 1;
  for (let i = 0; i < arg.length; i++) {
    digit *= arg[i];
  }
  return digit;
}
console.log(multiplication(array));

function division(arg) {
  let digit = arg[0];
  for (let i = 1; i < arg.length; i++) {
    digit /= arg[i];
  }
  return digit;
}
console.log(division(array));
