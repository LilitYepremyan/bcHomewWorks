let x = 401;
let y = true;
for (let i = 2; i < x; i ++) {
  if (x % i === 0) {
    y = false;
    break;
  }
}
if (y) {
  console.log("Yes");
} else console.log("No");
