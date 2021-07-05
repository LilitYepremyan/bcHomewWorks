function getNegativeNumber(arr) {
  negatives = [];
  for (group of arr) {
    if (Array.isArray(group)) {
      negatives.push(...group.filter((i) => i < 0));
    } else {
      return "Invalid Argument";
    }
  }
  if (negatives.length === 0) {
    return "No negatives";
  }
  negatives.sort((a, b) => b - a);

  return negatives[0] * negatives[1];
}
console.log(
  getNegativeNumber([
    [1, -2, -3],
    [7, -5, -6],
  ])
);
