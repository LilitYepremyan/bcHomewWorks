let a = [1, 2, 3];
// for (var i = 0; i < a.length; i++) {
//   console.log("for", i, a[i]);
// }

// 1. i = 0, a[i] = 1  i++
// 2. i = 1, a[i] = 2  i++
// 3. i = 2, a[i] = 3  i++

let i = 0;
// while (i < a.length) {
// console.log("for", i, a[i]);
//   i++;
// }

do {
  console.log("for", i, a[i]);
  i++;
} while (i < a.length);
