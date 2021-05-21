let a = 2;
let b = 34356;
let isRight = false;
b = String(b);
let array = b.split("");
for (let i = 0; i < array.length; i++) {
  if (a == array[i]) {
    isRight = true;
    break;
  }
}
if (isRight) {
  console.log("Yes");
} else {
  console.log("No");
}
