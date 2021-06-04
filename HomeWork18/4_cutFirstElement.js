function cutFirstElement(array, start = 0, end = 1) {
  if (array.length === 0 || start === end) {
    return array;
  }
  array.splice(start++, 1);
  return cutFirstElement(array, start, end);
}
console.log(cutFirstElement([6, 78, "n", 0, 1]));
