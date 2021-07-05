let argument = "FwrtYKHL12mn-12P";

function sumNumber(arg) {
  let a = "";
  let b = 0;
  for (let i = 0; i <= arg.length; i++) {
    if (Number(arg[i]) === Number(arg[i]) || arg[i] === "-") {
      a += arg[i];
      continue;
    }
    b += Number(a);
    a = "";
  }
  return b;
}
console.log(sumNumber(argument));
