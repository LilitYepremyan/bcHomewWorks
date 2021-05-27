function getHead(array) {
  let head = [array[0]];
  return head;
}
console.log(getHead([0, 1, 2, 3, 4, 5]));
function getTail(array) {
  let tail = array.slice(1);
  return tail;
}
console.log(getTail([0, 1, 2, 3, 4, 5]));
