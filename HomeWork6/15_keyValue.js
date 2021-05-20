let obj = { a: "1", b: "2" };
let arr = Object.keys(obj);
let brr = Object.values(obj);
let ob2 = {};
for (let i = 0; i < arr.length; i++) {
  ob2[brr[i]] = arr[i];
}
console.log(ob2);
