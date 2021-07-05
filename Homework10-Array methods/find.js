function find(array, el) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return array[i];
    }
  }
  return undefined;
}
console.log(find([0, 1, 2, 3, 4, 5, 6, 7], 5));
