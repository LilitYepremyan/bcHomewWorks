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
console.log(show([-1, 2, 3, 1]));
