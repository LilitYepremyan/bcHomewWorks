function findIndex(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i;
    }
  }return -1
}
console.log(findIndex([0, 1, 2, 3, 4, 5, 6, 7], 15));
