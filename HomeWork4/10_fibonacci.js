function fibonacchi(n) {
    let a = 0;
    let b = 1;
    if (n === a) {
      return a;
    }
    if (n === b) {
      return b;
    }
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log(fibonacchi(3));