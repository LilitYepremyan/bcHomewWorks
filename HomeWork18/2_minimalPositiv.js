// function showMinimalPositiv(arr, i = 0, minPos = Infinity) {
//   if (minPos === 0) {
//     return minPos;
//   }
//   if (i === arr.length) {
//     return minPos >= 0 && minPos !== Infinity ? minPos : -1;
//   }
//   if (arr[i] >= 0 && arr[i] < minPos) {
//     minPos = arr[i];
//   }
//   return showMinimalPositiv(arr, i + 1, minPos);
// }
// console.log(showMinimalPositiv([56, -9, 87, -23, 0, -105, 55, 1]));

function show(arr, i = 0, minPos = Infinity) {
  if (minPos === 0) {
    return minPos;
  }
  if (i === arr.length) {
    return minPos >= 0 && minPos !== Infinity ? minPos : -1;
  }
  if (arr[i] >= 0 && arr[i] < minPos) {
    minPos = arr[i];
  }
  return show(arr, i + 1, minPos);
}
console.log(show([1, 2, 3]));
