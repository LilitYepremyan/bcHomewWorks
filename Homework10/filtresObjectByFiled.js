const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
function filterByField(arr, text) {
  return arr.filter((el) => {
    if (el[text]) {
      return el;
    }
  });
}
console.log(filterByField(users, "isAstronaut"));
