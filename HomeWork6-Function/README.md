##### Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
```Markdown
Input                                                   Output
[45, 12, 3, 6, 17, 0]                            [45, 3, 17], [12, 6, 0]
[1, 3, 5, 9]                                         [1, 3, 5, 9], []
```
```javascript
let array = [45, 12, 3, 6, 17, 0];

let evenArray = [];
let oddArray = [];
function returnEvenAndOdd(arg) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] % 2 === 0) {
      evenArray.push(arg[i]);
    } else {
      oddArray.push(arg[i]);
    }
  }
  console.log(evenArray, oddArray);
}
returnEvenAndOdd(array);
```
##### Write a function that calculates sum, difference, multiplication and division between given array elements depending on passed operation symbol. Write appropriate function for each operation.
```javascript
let array = [10, 2];
function sum(arr) {
  let digit = 0;
  for (let i = 0; i < arr.length; i++) {
    digit += arr[i];
  }
  return digit;
}
console.log(sum(array));

function difference(arg) {
  let digit = arg[0];
  for (let i = 1; i < arg.length; i++) {
    digit -= arg[i];
  }
  return digit;
}
console.log(difference(array));

function multiplication(arg) {
  let digit = 1;
  for (let i = 0; i < arg.length; i++) {
    digit *= arg[i];
  }
  return digit;
}
console.log(multiplication(array));

function division(arg) {
  let digit = arg[0];
  for (let i = 1; i < arg.length; i++) {
    digit /= arg[i];
  }
  return digit;
}
console.log(division(array));

```
##### Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
```Markdown
* If the phone numberis less than 10 digits assume that it is a bad number
* If the phone numberis longerthan 10, then it is a bad number
* If the phone numberis 10 digits assume that it is good
* If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
* If the phone number contains + symbol more than one, considerit as a bad number.
* If the phone number contains + symbol not as the first character, considerit as a badnumber.
Input                                         Output
“455678”                                   “Bad number”
“339 5656888”                              “3395656888”
“+0008989562”                              “0008989562”
“45231489562”                              “Bad number”
“123+2356897452”                           “Bad number”
```
```javascript
function validation(str) {
  str = str.split(" ").join("");
  if (!isNaN(str)) {
    if (str.length === 10 && str[0] !== "+") {
      return str;
    }
    if (str.length === 11 && str[0] === "+") {
      return str.slice(1);
    }
  }
  return "Bad Number";
}
console.log(validation("+123456780"));
```
##### Given a word and a list of possible anagrams, select the correct sublist.
```Markdown
Input                                                                      Output
“listen”, ["enlists", "google", "inlets", "banana"]                       [“inlets”]
“pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”]         [“licnep”, nilcpe]
```
```javascript
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
```
##### Write a function, which receives a string, finds possible largest numbers in the string and returns their sum.
```Markdown
Input                                                     Output
“FwrtY45KHL120mn10P”                                       175
“Wert12lop-12”                                              0
```
```javascript
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
```
##### Write a function which receives two strings and removes appearances of the second string from the first one.
```Markdown
Input                                                               Output
“This is some text.”, “is”                                      “Th some text.”
```
```javascript
let sentence = "This is some text";
let word = "is";
let newSentence = sentence.split(word).join();
console.log(newSentence);
```
##### Write a function that accepts a string(a sentence) as a parameter and finds the longest word within the string. If there are several words which are the longest ones, print the last word(words can be separated by space, comma or hyphen).
```Markdown
Input                                                                         Output
“A revolution without dancing is a revolution not worth having.”           “revolution”
”Which would be worse - to live as a monster, orto die as a good man?”       “monster”
```
```javascript
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
```
##### Write a function which receives an array and a number as arguments and returns a new array from the elements of the given array which are largerthan the given number.
```Markdown
Input                                                              Output
[10, 25, 16, -5, 30, 15, 24] , 16                               [25, 30, 24]
[1, 1, 2, -3, 0, 8, 4, 0], 9                               “Such values do not exist.”
```
```javascript
let array = [10, 25, 16, -5, 30, 15, 24];
let number = 16;
function getLargerNumber(array, number) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      newArray.push(array[i]);
    }
  }
  if (newArray.length === 0) {
    return "Such values do not exist.";
  }
  return newArray;
}
console.log(getLargerNumber(array, number));
```
##### Write a function, which receives two numbers as arguments and finds all numbers between them such that each digit of the numberis even. The numbers obtained should be printed in a comma-separated sequence on a single line.
```Markdown
Input                                                          Output
19, 42                                              “20, 22, 24, 26, 28, 40, 42”
99, 199                                             “Such numbers does not exist.”
```
```javascript
function returnEvenDigits(start, end) {
  let array = [];
  let array1 = [];
  let array2 = [];
  let newArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  for (let i = 0; i < array.length; i++) {
    array1.push(`${array[i]}`);
  }
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i].split(""));
  }
  let num = "";
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array2[i].length; j++) {
      if (array2[i][0] % 2 === 0) {
        num += array2[i][j];
      }
    }
    if (Number(num) !== 0) {
      newArray.push(Number(num));
    }

    num = "";
  }
  return newArray;
}

console.log(returnEvenDigits(19, 42));

```
##### Write a function, which receives an array as an argument which elements arrays of numbers. Find product of biggest negative number of each array. If there is not any negative number, ignore that array.Check that items of the given array are arrays.
```Markdown 
Input                                                                 Output
[[2, -9, -3, 0], [1, 2], [-4 , -11, 0]]                                 12
[[3, 4], [11, 0], [5, 6, 7, 8]]                                   ‘No negativesʼ
[1, 2, 3]                                                        ‘Invalid Argumentʼ
```
```javascript
function getNegativeNumber(arr) {
  negatives = [];
  for (group of arr) {
    if (Array.isArray(group)) {
      negatives.push(...group.filter((i) => i < 0));
    } else {
      return "Invalid Argument";
    }
  }
  if (negatives.length === 0) {
    return "No negatives";
  }
  negatives.sort((a, b) => b - a);

  return negatives[0] * negatives[1];
}
console.log(
  getNegativeNumber([
    [1, -2, -3],
    [7, -5, -6],
  ])
);
```
##### Given an object. Invert it (keys become values and values become keys). If there is more than key forthat given value create an array.
```Markdown
Input                                                                 Output
{ a: ‘1ʼ, b: ‘2ʼ }                                               { 1: ‘aʼ, 2: ‘bʼ }
{ a: ‘1ʼ, b: ‘2ʼ, c: ‘2ʼ }                                    { 1: ‘aʼ, 2: [‘bʼ, ‘cʼ] }
```
```javascript
let obj = { a: "1", b: "2" };
let arr = Object.keys(obj);
let brr = Object.values(obj);
let ob2 = {};
for (let i = 0; i < arr.length; i++) {
  ob2[brr[i]] = arr[i];
}
console.log(ob2);
```
##### Given the list of the following readers:
```Markdown
Given the list of the following readers:
[
{ book: "Catcher in the Rye", readStatus: true, percent: 40 },
{ book: "Animal Farm", readStatus: true, percent: 20 },
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 },
{ book: "After Dark", readStatus: true, percent: 70 },
];
```
```javascript
let arr = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 },
];

let brr = arr.filter((el) => el.readStatus);
let crr = brr.sort((a, b) => a.percent - b.percent);
console.log(crr);

```
##### Given two objects. Write a function that performs shallow compare.
```Markdown
Input       Output
let a = { a: ‘1ʼ };
let b = { a: ‘1ʼ};
shallowCompare(a, b)
true

let a = { a: ‘1ʼ };
let b = { a: ‘1ʼ, b: ‘2ʼ };
shallowCompare(a, b)
false

let a = { };
let b = { };
shallowCompare(a, b)
true
```
```javascript
let a = { a: "1" };
let b = { a: "1" };
function shallowCompare(a, b) {
  let arr = Object.keys(a).concat(Object.values(a));
  let brr = Object.keys(b).concat(Object.values(b));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === brr[i]) {
      return true;
    }
    return false;
  }
}
console.log(shallowCompare(a, b));
```