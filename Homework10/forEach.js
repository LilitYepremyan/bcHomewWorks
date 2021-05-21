function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}
console.log(forEach([1, 2, 3, 45, 6], (el) => console.log(el + 5)));
