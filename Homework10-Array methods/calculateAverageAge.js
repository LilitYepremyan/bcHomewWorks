function getAverageAge(array) {
  let averageAge = array.reduce(
    (acc, currentValue) => acc + currentValue.age,
    0
  );
  return averageAge / array.length;
}
const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
console.log(getAverageAge(users));
