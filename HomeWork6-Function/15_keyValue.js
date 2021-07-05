let obj = { a: "1", b: "2" };
let first = Object.keys(obj);
let second = Object.values(obj);
let ob2 = {};
for (let i = 0; i < first.length; i++) {
  ob2[second[i]] = first[i];
}
console.log(ob2);
