function fn(array) {
  return array.reduce(function (a, b) {
    if (Array.isArray(b)) {
      return a.concat(fn(b));
    }
    return a.concat(b);
  }, []);
}
console.log(fn([1, [3, 4, [1, 2]], 10]));
