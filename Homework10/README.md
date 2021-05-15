##### Concatenate the two arrays
```Markdown
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```javascript
let array = [1, 2, 3, 4];
let concatArr = array.concat([5, 6, 7, 8]);
console.log(concatArr);
```
##### How to take arguments in sum function?
```Markdown
function sum() {
return args.reduce((sum, current) => {
return sum + current;
});
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```
```javascript
let args = [1, 2, 3];

function sum() {
  return args.reduce((sum, current) => sum + current);
}

console.log(sum());
```
##### How to pass arguments in sum function?
```Markdown
function sum(x, y, z) {
return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```
```javascript
function sum(x, y, z) {
  return x + y + z;
}
console.log(sum(1,2,3));
```
##### Swapping Values using the Destructuring Assignment
```Markdown
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```
```javascript
let a = 3;
let b = 6;
let array = ([a, b] = [b, a]);

console.log(a);
console.log(b);
```
##### Your function must use sort method
```Markdown
- Create a function that takes an array of numbers arr, a string str
and return an array of numbers as per the following rules:
- "Asc" returns a sorted array in ascending order.
- "Desc" returns a sorted array in descending order.
``` javascript
sortBy([4, 3, 2, 1], "Asc" ) // [1, 2, 3, 4]
sortBy([7, 8, 11, 66]) // [7, 8, 11, 66]
sortBy([7, 8, 11, 66], "Desc") // [66, 11, 8, 7]
```
```javascript
let array = [4, 3, 2, 1];
function sortBy(arr, str) {
  const sortByMetod = (a, b) => {
    if (str === "Asc") return a - b;
    else if (str === "Desc") return b - a;
  };
  return arr.sort(sortByMetod);
}
console.log(sortBy(array, "Desc"));
```
##### Your function must use map method
```Markdown 
- Write a function which returns array of usernames.
``` javascript
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
```
```javascript
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
console.log(
  users.map((el) => {
    return el.username;
  })
);
```
##### - Write a function which returns array of lengths of user names
```Markdown
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
getUsernameLengths(users); // [12, 13]
```
```javascript
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getUserNameLengths(arr) {
  return arr.map((el) => el.username.length);
}
console.log(getUserNameLengths(users));
```
##### - Write a function which parses string integers. If it's not possible to parse, then add null
```Markdown 
arseInteger(["1", "2", "34"]); // [1, 2, 34];
parseInteger(["1", "px", "2323"]); // [1, null, 2323];
```
```javascript
function getNumber(arr) {
  return arr.map((el) => {
    if (el == Number(el)) {
      return Number(el);
    } else {
      return (el = null);
    }
  });
}

console.log(getNumber(["1", "px", "2323"]));
```
##### Your functions must use filter method
```Markdown
- Given an array, return a new array that only includes the numbers.

const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
166, NaN]
// [1, 2, 55, 166]
```
```javascript
const array = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
function returningNumber(arr) {
  return arr.filter((el) => {
    if (el === Number(el)) {
      return el;
    }
  });
}
console.log(returningNumber(array));
```
##### - Write a function which remove users with language equals to 'ru'.
```Markdown 
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]
```
```javascript
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
function filterUsers(arr) {
  return arr.filter((el) => {
    if (el.lang !== "ru") {
      return el;
    }
  });
}
console.log(filterUsers(users));
```
##### Write a function which filters object by field.
```Markdown
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
isAstronaut: true,
},
{
username: "Nil Armstrong",
```
```javascript
lang: "ENG",
isAstronaut: true,
},
{
username: "Elon Musk",
isAstronaut: false,
},
];
filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
}]
```