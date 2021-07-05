function some(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return true;
    }
  }
  return false;
}
// console.log(some([0, 2, 3, 4, 0, 6], (el) => el > 2));
console.log(Number.prototype)