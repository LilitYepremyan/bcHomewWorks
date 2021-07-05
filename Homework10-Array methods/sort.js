function returnSortNumber(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let array = [7, 8, 11, 66];

array.sort(returnSortNumber);

console.log(array);
