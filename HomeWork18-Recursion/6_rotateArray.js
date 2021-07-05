let array = ["‘a’", "‘b’", "‘c’", "‘d’", "‘e’", "‘f’", "‘g’", "‘h’"];
function foo(array, num) {
  if (num > array.length) {
    throw new Error(`${num} մեծ է զանգվածի երկարությունից`);
  }
  if (num < 0) {
    num = num + array.length;
  }
  if (array.length === num) {
    return array;
  }
  let a = array.pop();
  array.unshift(a);
  num++;
  return foo(array, num);
}
console.log(foo(array, 3));
