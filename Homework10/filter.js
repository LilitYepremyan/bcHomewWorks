function filter(array, fn, index = 0) {
  let newArray = [];
  for (let i = index; i < array.length; i++) {
    if (fn(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(filter([1, 2, 3, 4, 5, 6], (el) => el > 2, 4));
