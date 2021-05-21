let array = [1, "‘10ʼ", "‘hiʼ", 2, 3];
let array1 = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === Number(array[i])) {
    array1.push(array[i]);
  }
}
let result = `The count of numbers ${array1.length} and the count of string ${
  array.length - array1.length
}`;
console.log(result);
