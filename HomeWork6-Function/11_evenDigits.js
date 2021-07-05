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
