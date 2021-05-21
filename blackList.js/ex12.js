let string = "_, we have a _.";
let array = ["Houston", "problem"];
let text = "";
let j = 0;
for (i = 0; i < string.length; i++) {
  if (string[i] === "_") {
    text += array[j];
    j++;
  } else {
    text += string[i];
  }
}

console.log(text);
