let arr = ["anymore", "raven", "me", "communicate"];
let max = 0; 
let min = Infinity;
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i].length) {
    max = arr[i].length;
  }
  if (min > arr[i].length) {
    min = arr[i].length;
  }
}
result = min + max;
console.log(result);
