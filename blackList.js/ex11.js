let number = 1233;
let a = String(number);
let array = a.split("");
let sum = 0;
let multiple = 1;
for (let i = 0; i < array.length; i++) {
  multiple *= array[i];
  sum += Number(array[i]);
}
if (multiple % sum === 0) {
  let text = `Quotient is ${multiple / sum}`;
  console.log(text);
} else {
  console.log("Cannot calculate.");
}

