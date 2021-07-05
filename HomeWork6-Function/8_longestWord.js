let sentence = "A revolution without dancing is a revolution not worth having.";
function getLongWord(newStr) {
  let arr = newStr.split(" ");
  let max = 0;
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (max < arr[i].length) {
      max = arr[i].length;
      str = arr[i];
    }
  }
  return str;
}
console.log(getLongWord(sentence));
