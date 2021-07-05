let array = [45, 12, 3, 6, 17, 0];

let evenArray = [];
let oddArray = [];
function returnEvenAndOdd(arg) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] % 2 === 0) {
      evenArray.push(arg[i]);
    } else {
      oddArray.push(arg[i]);
    }
  }
  console.log(evenArray, oddArray);
}
returnEvenAndOdd(array);
