let words = "May the Force ,  be with you.";
let wordsArr = words.split(" ");
let array = [];
for (let i = 0; i < wordsArr.length; i++) {
  if (wordsArr[i] !== "," && wordsArr[i] !== "") {
    array.push(wordsArr[i]);
  }
}
console.log(array);
