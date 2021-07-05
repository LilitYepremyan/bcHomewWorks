let arr1 = ["listen"];
let arr2 = ["enlists", "google", "inlets", "banana"];
let arr3 = [];

function anagram(arg1, arg2) {
  let word = arg1[0].split("").sort().join("");
  let anagramWords = [];
  for (let i = 0; i < arg2.length; i++) {
    let tempWord = arg2[i].split("").sort().join("");
    if (word === tempWord) {
      anagramWords.push(arg2[i]);
    }
  }
  return anagramWords;
}

console.log(anagram(arr1, arr2));
