class Calculator {
  sum(a, b) {
    return a + b;
  }
  differens(a, b) {
    return a - b;
  }
  division(a, b) {
    return a / b;
  }
  multiple(a, b) {
    return a * b;
  }
}
let sum = new Calculator();
console.log(sum.sum(6, 2));
let differens = new Calculator();
console.log(differens.differens(6, 2));
let division = new Calculator();
console.log(division.division(6, 2));
let multiple = new Calculator();
console.log(multiple.multiple(6, 2));
