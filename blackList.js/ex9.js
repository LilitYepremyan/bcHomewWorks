let digit = 201;
let prime = true;
for (let i = 2; i < digit; i++) {
  if (digit % i === 0) {
    prime = false;
  } else {
    prime = true;
  }
}
if ((prime = true)) {
  console.log("Yes");
} else {
  console.log("No");
}
