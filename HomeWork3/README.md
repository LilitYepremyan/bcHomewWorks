##### What will be output of i and n?
```Markdown
let i = 10;
let n = i++ % 5;
```
```javascript
11
0
```
##### Swap two variables
```Markdown
let a = 10,
b = 3;
// a = 3, b =10
```
```javascript
let a = 10;
  let b = 3;
  let c = a;
  a=b;
  b=c;
  console.log(a,b);
```
##### Swap two variables without using the third one
```Markdown
let a = 10,
b = 3;
// a = 3, b =10
```
```javascript
let a = 10;
let b = 3;
a = a + b - (b = a);
console.log(a, b);
```
##### Declare two variables: admin and name.Assign the value "John" to name.Copy the value from name to admin.Show the value of admin using alert (must output “John”).
```javascript
let admin, name; 
name = "John";
admin = name;
alert(admin);
```
##### Create a variable with the name of our planet. How would you name such a variable?Create a variable to store the name of a current visitor to a website. How would you name that variable?
```javascript
let world = Planet;
let people = bestPerson;
```
##### What is the output of the script?
```Makdown
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```
```javascript
hello 1
hello name
hello Ilya
```
##### Here’s a code that asks the user for two numbers and shows their sum.It works incorrectly. The output in the example below is 12 (for default prompt values).Why? Fix it. The result should be 3.
```Markdown
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

```
```javascript
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

alert((num1) + (num2));
```
##### What will be the result for these expressions?
```Makdown
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```
```javascript
5 > 4//true
"ананас" > "яблоко"//false
"2" > "12"//true
undefined == null//true
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"//false
```
##### What is the code below going to output?
```Markdown
alert( null || 2 || undefined );
```
```javascript
2
```
##### What will the code below output?
```Markdown
alert( alert(1) || 2 || alert(3) );
```
```javascript
1,2
```
##### What is this code going to show?
```Markdown
alert( 1 && null && 2 );

```
```javascript
null
```
##### What will the result be?
```Markdown
alert( null || 2 && 3 || 4 );
```
```javascript
3
```
##### Write an if condition to check that age is between 14 and 90 inclusively.“Inclusively” means that age can reach the edges 14 or 90.
```javascript
if (age <= 14 || age => 90);
```
##### Write an if condition to check that age is NOT between 14 and 90 inclusively.Create two variants: the first one using NOT !, the second one – without it.
```javascript
if (!(age >= 14 && age <= 90));
```
##### Write the code which asks for a login with prompt.If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
The password is checked as follows:

* If it equals “TheMaster”, then show “Welcome!”,
* Another string – show “Wrong password”,
* For an empty string or cancelled input, show “Canceled”
```javascript
let userName = prompt("Enter your user name");
if (userName === "" || userName === null) {
  console.log("Canceled");
} else if (userName === "Admin") {
  let password = prompt("Enter your password");
  if (password === "" || password === null) {
    console.log("Canceled");
  } else if (password === "TheMaster") {
    console.log("Welcome");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("I don’t know you");
}

```
##### Create a script that prompts the visitor to enter two numbers and then shows their sum.
```javascript
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

alert(parseInt(num1) + parseInt(num2));
```
##### Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
```Markdown
ucFirst("john") == "John";
```
```javascript
function firstLetter(str) {
  return str[0].toUpperCase() + str.substring(1);
}
console.log(firstLetter("john"));
```
##### Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:
```Markdown
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
```
```javascript
function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
```
##### We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

```Markdown
alert( extractCurrencyValue('$120') === 120 ); // true
```
``` javascript
let str = "$120";
alert( str.slice(1) );
```
