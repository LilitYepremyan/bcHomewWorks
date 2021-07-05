let a = "12";
if (a % 3 === 0 && a % 5 === 0 && a % 7 === 0) {
  console.log(`${a} is multiple 3,5 and 7`);
} else if (a % 3 === 0 && a % 7 === 0 && a % 5 !== 0) {
  console.log(`${a} is multiple 3 and 7`);
} else if (a % 5 === 0 && a % 7 === 0 && a % 3 !== 0) {
  console.log(`${a} is multiple 5 and 7`);
} else if (a % 3 === 0 && a % 5 === 0 && a % 7 !== 0) {
  console.log(`${a} is multiple 3 and 5`);
} else if (a % 3 === 0 && a % 5 !== 0 && a % 7 !== 0) {
  console.log(`${a} is multiple 3`);
} else if (a % 5 === 0 && a % 3 !== 0 && a % 7 !== 0) {
  console.log(`${a} is multiple 5`);
} else if (a % 7 === 0 && a % 3 !== 0 && a % 5 !== 0) {
  console.log(`${a} is multiple 7`);
} else if (a % 3 !== o && a % 5 !== 0 && a % 7 !== 0) {
  console.log(`${a} is not multiple 3,5 or 7`);
}
