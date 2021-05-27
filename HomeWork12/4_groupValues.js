function groupBy(array) {
  let object = {};
  for (let i = 0; i < array.length; i++) {
    let key = Math.floor(array[i]);
    if (key in object) {
      object[key].push(array[i]);
      continue;
    }
    let newArray = [array[i]];
    object[key] = newArray;
  }
  return object;
}

console.log(groupBy([4.2, 6.1, 6.3, 5.6]));

