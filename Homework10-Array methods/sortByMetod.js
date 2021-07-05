let array = [4, 3, 2, 1];
function sortBy(arr, str) {
  const sortByMetod = (a, b) => {
    if (str === "Asc") return a - b;
    else if (str === "Desc") return b - a;
  };
  return arr.sort(sortByMetod);
}
console.log(sortBy(array, "Desc"));
