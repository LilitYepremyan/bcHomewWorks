##### Write function that will do reverse operation for Object.entries

```Markdown
fromPairs([
["a", 1],
["b", 2],
]);
// => { 'a': 1, 'b': 2 }
```

```javascript
let arr1 = ["a", 1];
let arr2 = ["b", 2];
function fromPairs(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
    result[args[i][0]] = args[i][1];
  }
  return result;
}
console.log(fromPairs(arr1, arr2, ["c", 3]));
```

##### Write functions that willreturn head and tail of Array

```Markdown
getHead([1, 2, 3]);
// => [1]
getTail([1, 2, 3]);
// => [2, 3]
```

```javascript
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
```

##### Write function that will zip arrays into object

```Markdown
zipObject(["a", "b", "c"], [1, 2]);
// => { 'a': 1, 'b': 2, c: null }
```

```javascript
let key = ["a", "b", "c"];
let value = [1, 2];
function zipObject(arr1, arr2) {
  let result = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === undefined) {
      arr2[i] = null;
    }
    result[arr1[i]] = arr2[i];
  }
  return result;
}
console.log(zipObject(key, value));
```

##### Write function that will group by some rule

```Markdown
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
groupBy(["one", "two", "three"], (i) => i.length);
// => { '3': ['one', 'two'], '5': ['three'] }
```

```javascript
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
```
