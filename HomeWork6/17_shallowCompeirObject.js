let a = { a: "1" };
let b = { a: "1" };
function shallowCompare(a, b) {
  let arr = Object.keys(a).concat(Object.values(a));
  let brr = Object.keys(b).concat(Object.values(b));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === brr[i]) {
      return true;
    }
    return false;
  }
}
console.log(shallowCompare(a, b));
