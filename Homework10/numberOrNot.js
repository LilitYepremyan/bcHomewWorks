function getNumber(array) {
  return array.map((el) => {
    if (el == Number(el)) {
      return Number(el);
    } else {
      return (el = null);
    }
  });
}


console.log(getNumber(["1", "px", "2323"]));
