// let num = 1565166;
// num = String(num);
// let array = num.split("");
// let first = array.shift();
// let last = array.pop();
// array.unshift(last);
// array.push(first);
// let number = array.join("");
// console.log(number);

const reverse = (num) => {
  num = String(num);
  return Number(num.slice(num.length - 1) + num.slice(1, num.length - 1) + num[0]);
};

console.log(reverse(1443));
