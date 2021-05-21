function filterByLength(array) {
  let newArray = array.filter((el) => {
    return el.length > 3;
  });

  return newArray;
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
