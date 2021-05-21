let num = 1565166;
num = String(num);
let array = num.split("");
let first = array.shift();
let last = array.pop();
array.unshift(last);
array.push(first)
let number= array.join("")
console.log(number);

