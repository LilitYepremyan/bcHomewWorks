function every(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) {
      return false;
    }
  }
  return true;
}
console.log(every([13, 14, 15, 16, 17, 18, 19], (el) => el > 10));
