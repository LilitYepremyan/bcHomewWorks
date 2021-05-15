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

function getUserNameLengths(arr) {
  return arr.map((el) => el.username.length);
}
console.log(getUserNameLengths(users));

