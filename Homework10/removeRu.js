const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
function filterUsers(arr) {
  return arr.filter((el) => {
    if (el.lang !== "ru") {
      return el;
    }
  });
}
console.log(filterUsers(users));
