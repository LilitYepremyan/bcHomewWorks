const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
let array = values.filter((el) => {
  return Boolean(el) == true;
});
console.log(array);
