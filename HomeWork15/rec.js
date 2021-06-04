let arr = ["a", "b"];
let sum = arr.reduce((acc, curent) => acc + curent, 0);
// console.log(sum);
let obj = arr.reduce((acc, item, index) => {
  return (acc = { ...acc, [index]: item });
}, {});
console.log(obj);
