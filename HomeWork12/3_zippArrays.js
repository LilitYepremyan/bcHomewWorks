let key = ["a", "b", "c"];
let value = [1, 2];
function zipObject(arr1, arr2) {
  let result = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === undefined) {
      arr2[i] = null;
    }
    result[arr1[i]] = arr2[i];
  }
  return result;
}
console.log(zipObject(key, value));
