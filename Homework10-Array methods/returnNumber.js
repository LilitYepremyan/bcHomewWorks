const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
function returningNumber(arr) {
  return arr.filter((el) => {
    if (el === Number(el)) {
      return el;
    }
  });
}
console.log(returningNumber(array));
