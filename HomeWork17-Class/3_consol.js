class CustomConsole {
  constructor(str) {
    this.str = str;
    this.logs = [];
  }
  log(...args) {
    let a = args.map((el) => JSON.stringify(el));
    a = a.join(", ");
    this.logs.push(a);
    return a;
  }

  history(start = 0, end = this.logs.length) {
    return this.logs.slice(start, end);
  }
  clearHistory() {
    this.log = [];
    return this.log;
  }
}
let b = new CustomConsole();

console.log(b.log([1, 2], { a: 1 }));
// console.log(b.clearHistory());
console.log(b.history());
