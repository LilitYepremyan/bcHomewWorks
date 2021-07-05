function showWord(arg1) {
  return function (arg2) {
    return arg1 + arg2;
  };
}
let firstArg = "hopeless";
let secondArg = "ly";
console.log(showWord(firstArg)(secondArg));
