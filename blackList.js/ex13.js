let array = [8, 0, 1, "‘heyʼ", 12, 5, true, "‘2ʼ", null, 7, 3];
let array1 = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === Number(array[i])) {
    array1.push(array[i]);
  }
}
console.log(array1);
