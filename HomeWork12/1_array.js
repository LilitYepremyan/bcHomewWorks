let arr1 = ["a", 1];
let arr2 = ["b", 2];
function fromPairs(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
    result[args[i][0]] = args[i][1];
  }
  return result;
}
console.log(fromPairs(arr1, arr2, ["c", 3]));
