// const findProductNumber  = (num1, num2)=>{
//     let result = 0
//     while(num1){
//         result += num2;
//         num1--
//     }
//     return result
// }
// console.log(findProductNumber(14, 5))

const findProductNumber = (...args) => {
  let toggle = true;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === 0) {
      return "unsigned";
    }
    if (args[i] < 0) {
      toggle = !toggle;
    }
  }
  return toggle ? "+" : "-";
};
console.log(findProductNumber(-14, 5, -1));
