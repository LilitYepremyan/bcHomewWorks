let a = { a: "1" };
let b = { a: "1" };
function shallowCompare(a, b) {
  let array1 = Object.keys(a).concat(Object.values(a));
  let array2 = Object.keys(b).concat(Object.values(b));
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      return true;
    }
    return false;
  }
}
console.log(shallowCompare(a, b));
