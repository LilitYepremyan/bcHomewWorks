### Task
---
#### Required Tasks
##### 1  Given a number. Print “odd” if the numberis odd and “even” if itʼs even.

```Markdown
Input   Output
125     “odd”
35      “odd”
20      “even”
```

```javascript
let arrayNum = [125, 35, 20];
for (let i = 0; i < arrayNum.length; i += 1) {
  if (arrayNum[i] % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
console.log();


```

###### Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the angles of a triangle equals 180 degrees).

```Markdown
Input    Output
45,      90 45
30,      30 120
75,      25 80
```

```javascript
let corner = 45;
let otherCorner = 90;
let corner180 = 180 - (corner + otherCorner);
console.log(corner180);


```
##### Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the last digit of the inserted numberis 0, numberremains the same.

```Markdown
Input     Output
367        736
1002       2100
250        250
8           8
```
```javascript
let posInteger = 250;

if (String(posInteger).length === 1 || posInteger % 10 === 0) {
  console.log(posInteger);
} else {
  let lastDigit = posInteger % 10;
  let firsDigits = (posInteger - lastDigit) / 10;

  console.log(String(lastDigit) + String(firsDigits));
}

```
##### Check if a numberis a multiple of 3, 5 or 7 and output the appropriate message.

```Markdown
Input       Output
21          “21 is a multiple of 3 and 7.”
35          “35 is a multiple of 5 and 7.“
13          “13 is not a multiple of 3, 5 or 7.”
420         “420 is a multiple of 3, 5 and 7.”
24          “24 is a multiple of 3.”

```
```javascript

if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
  console.log(`${num} is a multiple of 3,5 and 7`);
} else if (num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
  console.log(`${num} is not a multiple of 3,5 and 7`);
} else if (num % 3 === 0 && num % 7 === 0) {
  console.log(`${num} is a multiple of  3 and 7`);
} else if (num % 5 === 0 && num % 7 === 0) {
  console.log(`${num} is a multiple of 5 and 7`);
} else if (num % 3 === 0) {
  console.log(`${num} is a multiple of 3`);
}

```

##### Given three numbers. Sort them by the ascending order.
```Markdown 
Input                Output
45 , 26, 78        26, 45, 78
-23, -456, 0      -456, -23, 0

```
```javascript
let arr = [-23, -456, 0];
arr.sort((a, b) => a - b);
console.log(arr.sort());

```

##### Find the sign of product of three numbers without multiplication operator. Display the specified sign.

```Markdown
Input             Output
-14, 5, 0       “unsigned”
-8, 9, -6          “+”
4, 19, -2          “-”
```
```javascript
let sign = 0;
let arr = [-14, 5, 14];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    console.log("Unsigned");
    sign = 0;
    break;
  } else if (arr[i] < 0) {
    sign++;
  }
}
if (sign !== 0) {
  if (sign % 2 === 0) {
    console.log("+");
  } else {
    console.log("-");
  }
}
```
##### Insert a digit and a number. Check whetherthe digits contains in the number or not.

```Markdown
Input        Output
5, 2463      ‘Noʼ
4, 6         ‘Noʼ
8, 45689     ‘Yesʼ
```
```javascript
let number = 5;
let nextNumber = 2461;
let boolNum = false;
for (let i of String(nextNumber)) {
  if (i === String(number)) {
    bollNum = true;
  }
}
if (boolNum) {
  console.log("Yes");
} else console.log("No");
```
##### Enter a number. Reverse its first and last digits. Print the new number.
```Makdown
Input       Output
2              2
13             31
895796        695798
```
```javascript
let number = 895796;
let num1 = Math.floor(number / 100000);
let num2 = Math.floor(number % 100000);
let num3 = Math.floor(num2 / 10000);
let num4 = num2 % 10000;
let num5 = Math.floor(num4 / 1000);
let num6 = num4 % 1000;
let num7 = Math.floor(num6 / 100);
let num8 = num6 % 100;
let num9 = Math.floor(num8 / 10);
let num10 = num8 % 10;
console.log(
  num10 * 100000 +
    num9 * 10000 +
    num7 * 1000 +
    num5 * 100 +
    num3 * 10 +
    num1 * 1
```
##### Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,print the quotient, otherwise print the remainder.
``` Makdown
Input       Output
1233      ‘Quotient is 2.ʼ
5         ‘Quotient is 1.ʼ
0         ‘Cannot calculate.ʼ
455       ‘Remainderis 2.ʼ
```
```javascript
function calculate(numbers) {
    let res = String(numbers);
    let sumRes = 0;
    let prodRes = 1;
    let resoult = '';
    for (let i = 0; i < res.length; i++) {
        sumRes += Number(res[i])
        prodRes *= Number(res[i])
    }
    if (numbers === 0) {
        resoult = 'Cannot calculate';
        console.log(resoult);

    }
    else if (prodRes % sumRes !== 0) {
        resoult = prodRes % sumRes;
        console.log(`Remainder is ${resoult}`);
    }
    else if (prodRes % sumRes === 0) {
        resoult = prodRes / sumRes;
        console.log(`Quotient is ${resoult}`);
    }

}

calculate(1233)

```
#####  Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each row and print them as an array.
```Makdown
Input                                                    Output
[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]           [12, 1, 13, 15]
[[8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]]    [45, 8, 0, -6]
[[1], [2], [3], [4]]                                    [1, 2, 3, 4]
```
```javascript
const arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
];

let sum = 0;
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    sum += arr[i][j];
  }
  newArr.push(sum);
  sum = 0;
}

console.log(newArr);

```
##### Write the code, one line for each action:
```Makdown
* Create an empty object user.
* Add the property name with the value John.
* Add the property surname with the value Smith.
* Change the value of the name to Pete.
* Remove the property name from the object.

```
```javascript
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user)
```
##### We have an object storing salaries of our team:
```Makdown
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```
```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

```
##### What is this code going to show?
```Makdown
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?
```
```javascript 
4
```
##### Let’s try 5 array operations.
```Makdown
* Create an array styles with items “Jazz” and “Blues”.
* Append “Rock-n-Roll” to the end.
* Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
* Strip off the first value of the array and show it.
* Prepend Rap and Reggae to the array.

```
```javascript
let music = ["Jazz", "Blues"];
console.log(music);
music.push("Rock-n-Roll");
console.log(music);
music[(music.length - 1) / 2] = "Classic";
console.log(music);
music.shift();
console.log(music);
music.unshift("Rep", "Reggae");
console.log(music);

```
##### Will alert be shown?
```Makdown
if ("0") {
  alert( 'Hello' );
}

```
```javascript
Hello
```
##### Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
```javascript
let userName = prompt("What is the “official” name of JavaScript?");
if (userName === "ECMAScript") {
  alert("Right!");
} else {
  alert("You don’t know? ECMAScript!");
}

```
##### Using if..else, write the code which gets a number via prompt and then shows in alert:
```Makdown
* 1, if the value is greater than zero,
* -1, if less than zero,
* 0, if equals zero.
In this task we assume that the input is always a number.
```
```javascript
let userNum = prompt("Enter number");
if (userNum > 0) {
  console.log = "1";
} else if (userNum < 0) {
  console.log = "-1";
} else {
  console.log = "0";
}
```
##### Rewrite this if using the conditional operator '?':
```Makdown
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

```
```javascript
 (a + b < 4)? 'Below':'Over'
```
##### Rewrite if..else using multiple ternary operators '?'.For readability, it’s recommended to split the code into multiple lines.
```Makdown
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
```
```javascript
let login = "Employee";

login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : "";
console.log(message);


```
##### Write the code using if..else which would correspond to the following switch:
```Mardown
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```
``` javascript
let browser = prompt("Edge");
if (browser === "Edge") {
  alert("You've got the Edge!");
} else if (
  browser === "Chrome" ||
  browser === "Firefox" ||
  browser === "Safari" ||
  browser === "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

```
##### Rewrite the code below using a single switch statement:
```Markdown
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

```
```javascript
let a = +prompt('a?', '');
switch (a) {
  case 0:
    alert("0");
    break;
  case 1:
    alert("1");
    break;
  case 2:
  case 3:
    alert("2,3");
}
```
##### An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

```Markdown
In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
```
```javascript
for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
```
##### Use the for loop to output even numbers from 2 to 10.
```javascript
for (let i = 2; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
```
##### Print the following pattern:
```Makdown
1
2 6
3 7 10
4 8 11 13
5 9 12 14 15
```
```javascript
let size = 5;

let result = "";
for (let i = 1; i <= size; i++) {
  for (let j = 1, m = i; j <= i; j++) {
    result += ` ${m}`;
    m += size - j;
  }
  result += "\n";
}

console.log(result);
```
##### Given a number n ( n >= 0 ) . Print n Fibonacci number. (Fibonacci th series: 0, 1, 1, 2, 3, 5, 8 ..., ak = ak-1 +ak-2)
```Makdown
| Input     | Output |
| ---       | ----------- |
| 0         | 0 |
| 2         | 1 |
| 10        | 55 |
| 20        | 6765 |
```
```javascript
function fibonacchi(n) {
  let a = 0;
  let b = 1;
  if (n === a) {
    return a;
  }
  if (n === b) {
    return b;
  }
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fibonacchi(10));
```
##### Given a sentence as a string. Split it according to space and comma and create an array consisting of the words of the array. The last word should not contain the last . or! .
 ```Makdown
 Input                                                       Output
“May the Force be with you.”             [“May”, “the”, “Force”, “be”, “with”, “you”]

 ```
 ```javascript
let words = "May the Force  be with you.";
let wordsArr = words.split(" ");
console.log(wordsArr);




 ```