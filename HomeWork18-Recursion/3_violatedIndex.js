function getVioletedIndex(array, i = 0) {
  if (array[i] > array[i + 1]) {
    return i;
  }
  if (i === array.length - 1) {
    return -1;
  }

  i++;
  return getVioletedIndex(array, i);
}
console.log(getVioletedIndex([-9, -4, -4, 3, 85, 6, 7]));
