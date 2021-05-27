function getBestStudent() {}
let arr1 = [100, 90, 80];
let a = arr1.reduce((acc, el) => acc + el, 0);
let b = a / arr1.length;
console.log(b);
