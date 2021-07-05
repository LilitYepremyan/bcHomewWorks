const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
let sum = arr.reduce((acc, elem) => (elem > 18 ? acc + elem : acc), 0);
console.log(sum);
